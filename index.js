const aside = document.getElementById("aside");
const humberger = document.getElementById("humberger");
const light_mode = document.getElementById("light_mode");
const dark_mode = document.getElementById("dark_mode");
const theme = document.getElementById("theme");
const container = document.getElementById("container");

const root = document.querySelector(":root");

humberger.addEventListener("click", () => {
  aside.classList.toggle("active");
});

theme.addEventListener("click", () => {
  light_mode.classList.toggle("remove");
  dark_mode.classList.toggle("active");
  root.classList.toggle("lightMode");
});
