const poems = [
  { title: "Breathing Room", text: "You are allowed to rest here." },
  { title: "Still Here", text: "Survival is a quiet form of courage." },
  { title: "Soft Rain", text: "Even storms know when to be gentle." },
  { title: "Hidden Hope", text: "Hope does not shout, it waits." },
  { title: "Quiet Strength", text: "Soft hearts endure the longest." },
  { title: "Flicker", text: "A small light is still light." },
  { title: "Open Sky", text: "Breathe, nothing is chasing you here." },
  { title: "Gentle Waves", text: "Let emotions move without fighting them." },
  { title: "Stillness", text: "Silence can be a kind companion." },
  { title: "Heartstrings", text: "Some feelings live between words." },

  { title: "Fading Echo", text: "What hurts will not always echo." },
  { title: "Lonely Star", text: "You shine, even unseen." },
  { title: "Morning Mist", text: "Clarity comes slowly, and that is okay." },
  { title: "Quiet Flame", text: "Soft fires survive strong winds." },
  { title: "Broken Vase", text: "Cracks still hold meaning." },
  { title: "Silver Lining", text: "Not everything broken is ruined." },
  { title: "Empty Chair", text: "Absence teaches presence." },
  { title: "Gentle Breeze", text: "Peace arrives without announcing itself." },
  { title: "Still Waters", text: "Calm does not mean empty." },
  { title: "Shadows", text: "Darkness is not permanent." },

  { title: "Fallen Leaves", text: "Change is allowed to be quiet." },
  { title: "Distant Song", text: "Comfort can travel far." },
  { title: "Hushed Laughter", text: "Joy returns softly." },
  { title: "Twilight", text: "Endings can be gentle." },
  { title: "Morning Glow", text: "Light always finds its way back." },
  { title: "Hidden Garden", text: "Peace grows in unseen places." },
  { title: "Shattered Glass", text: "Fragments still reflect light." },
  { title: "Open Door", text: "You do not need permission to heal." },
  { title: "Gentle Rain", text: "Tears nourish growth." },
  { title: "Soft Footsteps", text: "Progress does not need noise." },

  { title: "Lonely Road", text: "Walking alone does not mean lost." },
  { title: "Rising Tide", text: "Change arrives in waves." },
  { title: "Quiet Horizon", text: "The future does not rush you." },
  { title: "Faint Light", text: "Even a glow is enough." },
  { title: "Fallen Star", text: "Not all endings are failures." },
  { title: "Glimmer", text: "Hope appears briefly, then stays." },
  { title: "Whispered Truth", text: "Your feelings are valid even when quiet." },
  { title: "Still Morning", text: "Today does not demand perfection." },
  { title: "Soft Echo", text: "Your voice matters." },
  { title: "Dawn", text: "You made it through the night." },

  { title: "Fading Footsteps", text: "Let the past rest." },
  { title: "Quiet Courage", text: "Staying is brave too." },
  { title: "Gentle Hands", text: "Treat yourself kindly." },
  { title: "Cloud Cover", text: "Not every day needs clarity." },
  { title: "Low Tide", text: "It is okay to feel empty sometimes." },
  { title: "Calm Storm", text: "Even chaos has rhythm." },
  { title: "Frosted Window", text: "Cold moments still teach warmth." },
  { title: "Rising Sun", text: "You are allowed to begin again." },
  { title: "Open Heart", text: "Vulnerability is not weakness." },
  { title: "Silent Song", text: "Some music is felt, not heard." },

  { title: "Fading Horizon", text: "Distance brings understanding." },
  { title: "Whispering Pines", text: "Nature listens without judgment." },
  { title: "Golden Threads", text: "Your story is still weaving." },
  { title: "Hidden Path", text: "Not knowing is part of becoming." },
  { title: "Quiet Shelter", text: "You are safe here." },
  { title: "Night Watch", text: "Rest, you have done enough." },
  { title: "Soft Landing", text: "It is okay to come down gently." },
  { title: "Unsaid Words", text: "Not everything needs expression." },
  { title: "Still Breathing", text: "That alone is enough today." },
  { title: "Homecoming", text: "You belong, even to yourself." }
];

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

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

const enterButton = document.getElementById("enter-btn");
if (enterButton) {
  enterButton.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
}

loadFeaturedPoem();
