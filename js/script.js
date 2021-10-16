// DOM SELECTORS
// Navigation
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const backdrop = document.getElementById("backdrop");
const currentYear = document.getElementById("copyright-year");

// Get current year and add it to the DOM in footer section
const getCurrentYear = new Date().getFullYear();
currentYear.innerText = getCurrentYear;

// HELPER FUNCTIONS
const openNavBar = () => {
  navbar.classList.add("showNav");
  backdrop.classList.add("showBackdrop");
};
const closeNavBar = () => {
  navbar.classList.remove("showNav");
  backdrop.classList.remove("showBackdrop");
};

// EVENT LISTENERS
navBtn.addEventListener("click", openNavBar);
navClose.addEventListener("click", closeNavBar);
backdrop.addEventListener("click", closeNavBar);
