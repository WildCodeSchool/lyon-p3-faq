const $ = (selector) => {
    return document.querySelector(selector);
  };
  let overlay = $("div#nav-mobile-overlay");
  let nav = $("header nav");
  let hamburger = $("header #hamburger");
  let body = $("body");
  let buttonAsk = $("body header button");
  let buttonClose = $("main div div#modalPost button");
  let modalAsk = $("body main div.wrapper div#modalPost");
  let buttonAskMobile=$('footer div.wrapper button');
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
  buttonAsk.addEventListener("click", (e) => {
    modalAsk.classList.add("show");
  
  });
  buttonClose.addEventListener("click", (e) => {
    modalAsk.classList.remove("show");
  });
  buttonAskMobile.addEventListener("click", (e) => {
    modalAsk.classList.add("show");
  });