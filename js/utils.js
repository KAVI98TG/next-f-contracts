export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function statusBadge(status, label = null) {
  const normalized = status === "available" ? "stable" : status === "current" ? "stable" : "planned";
  const display = label ?? (status === "available" ? "Available" : status === "current" ? "Current" : "Planned");
  return `<span class="status-badge status-badge--${normalized}">${escapeHtml(display)}</span>`;
}

export function phaseBadge(phase) {
  return `<span class="phase-badge">Phase ${escapeHtml(phase)}</span>`;
}

export function icon(name) {
  return `<i class="fa-solid ${escapeHtml(name)}" aria-hidden="true"></i>`;
}


export function prettyJson(value) {
  return JSON.stringify(value, null, 2);
}

export async function copyText(value) {
  const text = String(value ?? "");
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  if (!ok) throw new Error("Copy unavailable");
  return true;
}
