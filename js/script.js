// Get current year and add it to the DOM in footer section
const currentYear = document.getElementById("copyright-year");
const getCurrentYear = new Date().getFullYear();
currentYear.innerText = getCurrentYear;
