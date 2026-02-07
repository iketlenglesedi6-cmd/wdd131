// Update current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update last modified date
document.getElementById('lastModified').textContent =
  "Last modified: " + document.lastModified;

// Product Array
const products = [
  { id: "bassboost3000", name: "BassBoost 3000" },
  { id: "quietcomfortx", name: "QuietComfort X" },
  { id: "soundwavepro", name: "SoundWave Pro" }
];

// Features Array
const features = [
  "Noise-cancelling",
  "Long battery life",
  "Wireless",
  "Comfortable fit"
];

// Optional: dynamically populate dropdown (already in HTML, so this is extra)
const productSelect = document.getElementById("product");
products.forEach(product => {
  if (!Array.from(productSelect.options).some(opt => opt.value === product.id)) {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  }
});

// Optional: dynamically populate features (already in HTML, so this is extra)
const featuresFieldset = document.querySelector("fieldset#features");
features.forEach(feature => {
  if (![...featuresFieldset.querySelectorAll('input')].some(input => input.value === feature)) {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" name="features" value="${feature}"> ${feature}`;
    featuresFieldset.appendChild(label);
  }
});

// LocalStorage review counter
let count = localStorage.getItem('reviewCount') || 0;
document.getElementById('reviewForm')?.addEventListener('submit', () => {
  count++;
  localStorage.setItem('reviewCount', count);
});
