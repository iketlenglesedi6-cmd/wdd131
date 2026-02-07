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

// Populate Product Dropdown
const productSelect = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Populate Features Checkboxes
const featuresFieldset = document.querySelector("fieldset#features");
features.forEach(feature => {
  const label = document.createElement("label");
  label.innerHTML = `
    <input type="checkbox" name="features" value="${feature}"> ${feature}
  `;
  featuresFieldset.appendChild(label);
});

// Last Modified Date
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;
