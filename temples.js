// Current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last modified
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

  // Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.textContent = navLinks.classList.contains("open") ? "✖" : "☰";
});
