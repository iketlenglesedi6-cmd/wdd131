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


// Populate Features Checkboxes with proper labels and IDs
const featuresFieldset = document.getElementById("features");
features.forEach((feature, index) => {
  const id = `feature${index + 1}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "features";
  checkbox.value = feature;
  checkbox.id = id;

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = feature;

  featuresFieldset.appendChild(checkbox);
  featuresFieldset.appendChild(label);
  featuresFieldset.appendChild(document.createElement("br")); // optional line break
});

// Update current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update last modified date
document.getElementById('lastModified').textContent =
  "Last modified: " + document.lastModified;
