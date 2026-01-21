// ====== Footer Year & Last Modified ======
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// ====== Wind Chill Calculation ======
function calculateWindChill(temp, speed) {
  // Only calculate if temp <=10°C and wind speed >4.8 km/h
  if (temp <= 10 && speed > 4.8) {
    return Math.round(
      13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    ) + "°C";
  } else {
    return "N/A";
  }
}

// Static values for now
const temperature = 9; // °C
const windSpeed = 12; // km/h

document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);
