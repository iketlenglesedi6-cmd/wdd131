const yearSpan = document.querySelector("#year");
const modifiedSpan = document.querySelector("#modified");
yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

const temp = Number(document.querySelector("#temp").textContent);
const speed = Number(document.querySelector("#speed").textContent);
const windchillSpan = document.querySelector("#windchill");

function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
  windchillSpan.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
  windchillSpan.textContent = "N/A";
}
