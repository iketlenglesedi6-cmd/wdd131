// ============================
// Scripts for Home Page
// ============================

// List of poems (add all  poems here)
const poems = [
  { title: "Breathing Room", text: "You are allowed to rest here." },
  { title: "Still Here", text: "Survival is a quiet form of courage." },
  { title: "Soft Rain", text: "Even storms know when to be gentle." },
  { title: "Hidden Hope", text: "Hope does not shout, it waits." },
  { title: "Quiet Strength", text: "Soft hearts endure the longest." },
  // ... add the rest 
];

// Get the day of the year (1–365/366)
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Load today's featured poem
function loadFeaturedPoem() {
  const dayIndex = getDayOfYear() % poems.length;
  const poem = poems[dayIndex];

  const titleEl = document.getElementById("featured-poem-title");
  const textEl = document.getElementById("featured-poem-text");

  if (titleEl && textEl) {
    titleEl.textContent = poem.title;
    textEl.textContent = poem.text;
  }
}

// ============================
// Audio handling
// ============================

const music = document.getElementById("background-music");
const body = document.body;

// Start music softly on page load (some browsers require interaction)
function playMusic() {
  music.volume = 0.2;
  music.play().catch(() => {
    console.log("Audio will play after user interaction.");
  });
}

// Smooth fade out function
function fadeOutAudio(audio, duration = 3000) {
  const fadeSteps = 50; // more steps = smoother fade
  const fadeAmount = audio.volume / fadeSteps;
  let i = 0;

  const fadeInterval = setInterval(() => {
    if (i < fadeSteps) {
      audio.volume -= fadeAmount;
      i++;
    } else {
      audio.pause();
      audio.volume = 0.2; // reset for next time
      clearInterval(fadeInterval);
    }
  }, duration / fadeSteps);
}

// ============================
// Event: Enter button
// ============================

const enterButton = document.getElementById("enter-btn");

enterButton.addEventListener("click", () => {
  // Add page fade-out class
  body.classList.add("fade-out");

  // Start music fade
  fadeOutAudio(music, 3000); // 3 seconds fade

  // Navigate to About page after 3 seconds (matches fade duration)
  setTimeout(() => {
    window.location.href = "about.html";
  }, 3000);
});

// ============================
// Initialize
// ============================

// Load featured poem immediately
loadFeaturedPoem();

// Play music after DOM content is loaded
window.addEventListener("DOMContentLoaded", playMusic);

// ============================
// Poems Page Scripts
// ============================

// Modal handling
const readButtons = document.querySelectorAll('.read-more-btn');
const modals = document.querySelectorAll('.modal');
const hearts = document.querySelectorAll('.heart');

// Open modal
readButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const poemId = btn.dataset.poem;
    const modal = document.getElementById(poemId);
    if(modal) {
      modal.style.display = 'block';
    }
  });
});

// Close modal
modals.forEach(modal => {
  modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

// Close modal on clicking outside content
window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Heart like toggle
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('liked');
  });
});
