// Toggle theme

const localTheme = window.localStorage && window.localStorage.getItem("theme");

if (localTheme) {
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(localTheme);
}