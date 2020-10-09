const $ = (selector) => {
  return document.querySelector(selector);
};
let overlay = $("div#nav-mobile-overlay");
let nav = $("header nav");
let hamburger = $("header #hamburger");
let body = $("body");
hamburger.addEventListener("click", (e) => {
  overlay.classList.add("show");
  nav.classList.add("open");
  body.classList.add("prevent-scroll");
});
overlay.addEventListener("click", (e) => {
  overlay.classList.remove("show");
  nav.classList.remove("open");
  body.classList.remove("prevent-scroll");
});
