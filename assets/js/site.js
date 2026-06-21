(function () {
  var storageKey = "ryan-site-theme";
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var text = document.querySelector(".toggle-text");

  function applyTheme(theme) {
    var isLight = theme === "light";
    root.setAttribute("data-theme", isLight ? "light" : "dark");

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }

    if (text) {
      text.textContent = isLight ? "Dark" : "Light";
    }
  }

  var savedTheme = localStorage.getItem(storageKey);
  applyTheme(savedTheme === "light" ? "light" : "dark");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }
})();
