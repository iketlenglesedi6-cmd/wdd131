// Set current year in footer
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Set last modified date in footer
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

// ----------------------------
// Hamburger Menu Toggle
// ----------------------------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle the "open" class on click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
