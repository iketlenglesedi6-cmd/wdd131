// Current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last modified
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;
