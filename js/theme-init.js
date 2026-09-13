(() => {
  const storageKey = "nextf-contracts-theme";
  let theme = "dark";

  try {
    theme = localStorage.getItem(storageKey) === "light" ? "light" : "dark";
  } catch {
    // Storage can be unavailable in hardened browser contexts; dark remains the default.
  }

  document.documentElement.dataset.theme = theme;
})();
