const loadGeneratedFallback = () => import("./generated-search-index.js");

const VALID_KINDS = new Set(["registry", "field", "route", "document", "release", "change"]);

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[._/\\:-]+/g, " ")
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalize(value).split(" ").filter(Boolean);
}

function levenshtein(a, b, max = 2) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    const cur = [i];
    let rowMin = cur[0];
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      rowMin = Math.min(rowMin, cur[j]);
    }
    if (rowMin > max) return max + 1;
    for (let j = 0; j < cur.length; j += 1) prev[j] = cur[j];
  }
  return prev[b.length];
}

function minimalShapeValid(data) {
  return Boolean(data && typeof data.registryVersion === "string" && Number.isInteger(data.schemaVersion) && data.stats && Array.isArray(data.documents) && data.documents.every((doc) => doc && typeof doc.id === "string" && VALID_KINDS.has(doc.kind) && typeof doc.title === "string" && typeof doc.description === "string" && typeof doc.target === "string" && typeof doc.searchText === "string"));
}

async function loadAuthoritativeJson() {
  if (window.location.protocol === "file:") throw new Error("file protocol uses generated search fallback");
  const response = await fetch("./registry/search/search-index.json", { cache: "no-store" });
  if (!response.ok) throw new Error(`Search index request failed with ${response.status}`);
  const data = await response.json();
  if (!minimalShapeValid(data)) throw new Error("Search index failed runtime shape validation");
  return data;
}

async function loadSearchConfig() {
  if (window.location.protocol === "file:") {
    return {
      defaultPaletteLimit: 14,
      defaultPageLimit: 50,
      maxQueryLength: 160,
      minFuzzyTokenLength: 5,
      stopWords: ["a","an","and","as","at","by","for","from","in","of","on","or","the","to","with"],
      synonyms: { ecommerce:["commerce","store","shop"], store:["commerce","ecommerce","shop"], shop:["commerce","ecommerce","store"], facebook:["meta"], meta:["facebook"], ga4:["google","analytics"], gtm:["google","tag","manager"], cms:["content","management","customer"], seo:["search","optimization","metadata"], api:["endpoint","operation","interface"], webhook:["delivery","subscription","event"], permission:["authorization","role","access"], blog:["post","editorial"], lead:["form","submission","prospect"], product:["commerce","catalog"], order:["commerce","checkout"], tracking:["analytics","marketing","event"], pixel:["meta","tracking"], ads:["advertising","marketing","conversion"] }
    };
  }
  try {
    const response = await fetch("./registry/search/search-config.json", { cache: "no-store" });
    if (!response.ok) throw new Error("config request failed");
    return await response.json();
  } catch {
    return { defaultPaletteLimit:14, defaultPageLimit:50, maxQueryLength:160, minFuzzyTokenLength:5, stopWords:[], synonyms:{} };
  }
}

function exactRawMatch(value, query) {
  return String(value ?? "").trim().toLowerCase() === String(query ?? "").trim().toLowerCase();
}

function parseQuery(raw, stopWords) {
  const bounded = String(raw ?? "").slice(0, 160).trim();
  const phrases = [...bounded.matchAll(/"([^"]+)"/g)].map((m) => normalize(m[1])).filter(Boolean);
  const withoutPhrases = bounded.replace(/"[^"]+"/g, " ");
  const stop = new Set(stopWords ?? []);
  const tokens = tokenize(withoutPhrases).filter((token) => !stop.has(token));
  if (!tokens.length && !phrases.length && bounded) tokens.push(...tokenize(bounded));
  return { raw: bounded, normalized: normalize(bounded), tokens: [...new Set(tokens)], phrases };
}

function prepareDoc(doc) {
  const title = normalize(doc.title);
  const machine = normalize(doc.machineId);
  const description = normalize(doc.description);
  const aliases = normalize((doc.aliases ?? []).join(" "));
  const search = normalize(doc.searchText);
  return {
    ...doc,
    _title: title,
    _machine: machine,
    _description: description,
    _aliases: aliases,
    _search: search,
    _titleTokens: tokenize(doc.title),
    _machineTokens: tokenize(doc.machineId),
    _searchTokens: null
  };
}

function scoreToken(token, doc) {
  let score = 0;
  if (doc._titleTokens.includes(token)) score = Math.max(score, 145);
  if (doc._machineTokens.includes(token)) score = Math.max(score, 140);
  if (doc._titleTokens.some((v) => v.startsWith(token))) score = Math.max(score, 110);
  if (doc._machineTokens.some((v) => v.startsWith(token))) score = Math.max(score, 105);
  if (doc._aliases.split(" ").includes(token)) score = Math.max(score, 75);
  if (doc._description.includes(token)) score = Math.max(score, 45);
  if (doc._search.includes(token)) score = Math.max(score, 28);
  return score;
}

function fuzzyScore(token, doc, minFuzzyLength) {
  if (token.length < minFuzzyLength) return 0;
  const candidates = [...new Set([...doc._titleTokens, ...doc._machineTokens, ...doc._aliases.split(" ")])].filter((v) => v.length >= minFuzzyLength).slice(0, 80);
  let best = 3;
  for (const candidate of candidates) {
    if (Math.abs(candidate.length - token.length) > 2) continue;
    const distance = levenshtein(token, candidate, 2);
    if (distance < best) best = distance;
    if (best === 1) break;
  }
  if (best === 1) return 24;
  if (best === 2 && token.length >= 7) return 10;
  return 0;
}

function kindBoost(kind) {
  if (kind === "registry") return 16;
  if (kind === "field") return 12;
  if (kind === "route") return 8;
  if (kind === "release") return 10;
  if (kind === "change") return 9;
  return 4;
}

export class GlobalSearchEngine {
  constructor(data, config, source = "generated-fallback", sourceDigest = null) {
    if (!minimalShapeValid(data)) throw new Error("Invalid global search index");
    this.data = data;
    this.config = config ?? {};
    this.source = source;
    this.sourceDigest = sourceDigest;
    this.documents = Object.freeze(data.documents.map(prepareDoc));
    this.stats = Object.freeze({ ...data.stats });
    this.kinds = [...new Set(this.documents.map((doc) => doc.kind))].sort();
    this.domains = [...new Set(this.documents.map((doc) => doc.domain).filter(Boolean))].sort();
    this.statuses = [...new Set(this.documents.map((doc) => doc.status).filter(Boolean))].sort();
  }

  search(query = "", filters = {}, options = {}) {
    const parsed = parseQuery(query, this.config.stopWords);
    const kind = String(filters.kind ?? "").trim();
    const domain = String(filters.domain ?? "").trim();
    const status = String(filters.status ?? "").trim();
    const limit = Math.max(1, Math.min(Number(options.limit ?? this.config.defaultPageLimit ?? 50), 200));
    const synonyms = this.config.synonyms ?? {};
    const minFuzzy = Number(this.config.minFuzzyTokenLength ?? 5);

    const rows = [];
    for (const doc of this.documents) {
      if (kind && doc.kind !== kind) continue;
      if (domain && doc.domain !== domain) continue;
      if (status && doc.status !== status) continue;
      if (!parsed.raw) {
        rows.push({ doc, score: kindBoost(doc.kind), reasons: ["indexed"] });
        continue;
      }

      let score = 0;
      const reasons = [];
      if (exactRawMatch(doc.machineId, parsed.raw)) { score += 1600; reasons.push("Exact machine ID"); }
      if (exactRawMatch(doc.title, parsed.raw)) { score += 1450; reasons.push("Exact title"); }
      if (doc._machine.startsWith(parsed.normalized) && parsed.normalized) { score += 720; reasons.push("Machine ID prefix"); }
      if (doc._title.startsWith(parsed.normalized) && parsed.normalized) { score += 650; reasons.push("Title prefix"); }
      if (parsed.normalized && doc._title.includes(parsed.normalized)) { score += 480; reasons.push("Title phrase"); }
      if (parsed.normalized && doc._machine.includes(parsed.normalized)) { score += 440; reasons.push("Machine ID phrase"); }

      let matchedCore = 0;
      for (const phrase of parsed.phrases) {
        if (doc._title.includes(phrase) || doc._machine.includes(phrase)) { score += 360; matchedCore += 1; reasons.push(`Phrase: ${phrase}`); }
        else if (doc._search.includes(phrase)) { score += 135; matchedCore += 1; reasons.push(`Phrase text: ${phrase}`); }
      }

      for (const token of parsed.tokens) {
        const direct = scoreToken(token, doc);
        const expansions = synonyms[token] ?? [];
        let bestSynonym = 0;
        for (const synonym of expansions) bestSynonym = Math.max(bestSynonym, scoreToken(normalize(synonym), doc));
        const synonymScore = Math.min(bestSynonym * 1.10, 165);
        if (Math.max(direct, synonymScore) > 0) {
          matchedCore += 1;
          if (synonymScore > direct) { score += synonymScore; reasons.push(`Related: ${token}`); }
          else { score += direct; if (direct >= 100) reasons.push(`Match: ${token}`); }
        }
      }

      const required = parsed.tokens.length + parsed.phrases.length;
      if (required && matchedCore === required) score += 150;
      else if (required > 1 && matchedCore / required >= 0.6) score += 45;
      if (doc.kind === "field" && parsed.tokens.some((token) => doc._titleTokens.includes(token))) score += 90;
      score += kindBoost(doc.kind);
      if (score >= 24) rows.push({ doc, score, reasons: [...new Set(reasons)].slice(0, 3) });
    }

    if (parsed.raw && rows.length < 12 && parsed.tokens.some((token) => token.length >= minFuzzy)) {
      const matchedIds = new Set(rows.map((row) => row.doc.id));
      for (const doc of this.documents) {
        if (matchedIds.has(doc.id)) continue;
        if (kind && doc.kind !== kind) continue;
        if (domain && doc.domain !== domain) continue;
        if (status && doc.status !== status) continue;
        let fuzzy = 0;
        let count = 0;
        for (const token of parsed.tokens) {
          const value = fuzzyScore(token, doc, minFuzzy);
          if (value) { fuzzy += value; count += 1; }
        }
        if (fuzzy >= 20 && count) rows.push({ doc, score: fuzzy + kindBoost(doc.kind), reasons: ["Fuzzy match"] });
      }
    }

    rows.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title, undefined, { sensitivity: "base", numeric: true }) || a.doc.id.localeCompare(b.doc.id));
    const total = rows.length;
    const resultRows = rows.slice(0, limit);
    return {
      query: parsed.raw,
      total,
      results: resultRows,
      facets: this.facets(rows),
      source: this.source
    };
  }

  facets(rows) {
    const build = (key) => {
      const map = new Map();
      for (const row of rows) {
        const value = row.doc[key];
        if (!value) continue;
        map.set(value, (map.get(value) ?? 0) + 1);
      }
      return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([value, count]) => ({ value, count }));
    };
    return { kinds: build("kind"), domains: build("domain"), statuses: build("status") };
  }
}

export async function loadGlobalSearch() {
  const config = await loadSearchConfig();
  try {
    const data = await loadAuthoritativeJson();
    return new GlobalSearchEngine(data, config, "authoritative-json", null);
  } catch (error) {
    console.info("Using generated global search fallback:", error.message);
    return new GlobalSearchEngine((await loadGeneratedFallback()).GENERATED_SEARCH_INDEX, config, "generated-fallback", (await loadGeneratedFallback()).GENERATED_SEARCH_INDEX_SOURCE_SHA256);
  }
}

export function parseGlobalSearchFilters(search = "") {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return {
    q: (params.get("q") ?? "").slice(0, 160),
    kind: params.get("kind") ?? "",
    domain: params.get("domain") ?? "",
    status: params.get("status") ?? ""
  };
}

export function buildGlobalSearchQuery(filters = {}) {
  const params = new URLSearchParams();
  if (filters.q) params.set("q", String(filters.q).slice(0, 160));
  if (filters.kind) params.set("kind", filters.kind);
  if (filters.domain) params.set("domain", filters.domain);
  if (filters.status) params.set("status", filters.status);
  const value = params.toString();
  return value ? `?${value}` : "";
}
