// ---------- Footer ----------
document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

// ---------- Hamburger ----------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ---------- Data ----------
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "images/salt-lake-temple.jpg",
    alt: "Salt Lake Temple"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 12945,
    imageUrl: "images/hawaii-temple.jpg",
    alt: "Laie Hawaii Temple"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "images/italy-temple.jpg",
    alt: "Rome Italy Temple"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 53545,
    imageUrl: "images/japan-temple.jpg",
    alt: "Tokyo Japan Temple"
  },
  {
    templeName: "London England Temple",
    location: "London, England",
    dedicated: "1958-09-07",
    area: 19934,
    imageUrl: "images/london-england-temple.jpg",
    alt: "London England Temple"
  },
  {
    templeName: "Sydney Australia Temple",
    location: "Sydney, Australia",
    dedicated: "1984-09-20",
    area: 25000,
    imageUrl: "images/australia-temple.jpg",
    alt: "Sydney Australia Temple"
  },
  {
  templeName: "Cochabamba Bolivia Temple",
  location: "Cochabamba, Bolivia",
  dedicated: "2000-07-09",
  area: 9800,
  imageUrl: "images/cochabamba-bolivia-temple.jpg",
  alt: "Cochabamba Bolivia Temple"
},
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978-10-30",
    area: 59246,
    imageUrl: "images/brazil-temple.jpg",
    alt: "São Paulo Brazil Temple"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19000,
    imageUrl: "images/south-africa-temple.jpg",
    alt: "Johannesburg South Africa Temple"
  },
  {
    templeName: "Auckland New Zealand Temple",
    location: "Auckland, New Zealand",
    dedicated: "2023-04-16",
    area: 45456,
    imageUrl: "images/new-zealand-temple.jpg",
    alt: "Auckland New Zealand Temple"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "images/paris-temple.jpg",
    alt: "Paris France Temple"
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Manila, Philippines",
    dedicated: "1984-09-25",
    area: 26683,
    imageUrl: "images/philippines-temple.jpg",
    alt: "Manila Philippines Temple"
  }
];

// ---------- Display ----------
const container = document.querySelector(".container");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    const figure = document.createElement("figure");

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p class="location">${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
    `;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.alt;
    img.loading = "lazy";

    figure.appendChild(caption);
    figure.appendChild(img);
    container.appendChild(figure);
  });
}

// ---------- Filter ----------
function filterTemples(type) {
  let result = temples;

  if (type === "old") {
    result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  } else if (type === "new") {
    result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  } else if (type === "large") {
    result = temples.filter(t => t.area > 90000);
  } else if (type === "small") {
    result = temples.filter(t => t.area < 10000);
  }

  displayTemples(result);
}

// ---------- Nav ----------
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    filterTemples(link.textContent.toLowerCase());
  });
});

// ---------- Init ----------
displayTemples(temples);
