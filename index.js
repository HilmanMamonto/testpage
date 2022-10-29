// Menu
const menu = document.querySelector(".menu");
const headerLogo = document.querySelector(".header-logo");
const burger = document.querySelector(".btn-burger");
const logoLight = "./assets/images/logo-light.png";
const logoDark = "./assets/images/logo.png";
const burgerImageClose = "./assets/images/burger-close.svg";
const burgerImage = "./assets/images/burger.svg";
const btnBurger = document.querySelector(".btn-burger");
const body = document.querySelector("body");
const header = document.querySelector(".header");

// device breakpoints
const desktop = 720;

body.onscroll = () => {
  if (window.scrollY > 700) {
    header.classList.add("d-none");
  }
  if (window.scrollY > 10) {
    header.classList.add("has-bg");
    if (window.innerWidth >= 720) {
      header.classList.add("desktop-scroll-down");
    }
    return;
  }
  header.classList.remove("d-none");
  header.classList.remove("has-bg");
  header.classList.remove("desktop-scroll-down");
};

burger.onclick = () => {
  // Set menu to active
  if (!menu.classList.contains("active")) {
    headerLogo.src = logoLight;
    btnBurger.src = burgerImageClose;
    menu.classList.add("active");
    body.style = "overflow-y:hidden;";
    header.classList.remove("has-bg");
    header.classList.remove("desktop-scroll-down");
    return;
  }
  //   Set menu to non active
  body.style = "overflow-y:scroll;";
  headerLogo.src = logoDark;
  btnBurger.src = burgerImage;
  menu.classList.remove("active");
  if (window.scrollY > 10) {
    header.classList.add("has-bg");
  }
};
