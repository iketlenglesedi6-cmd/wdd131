const poems = [
  { title: 'Breathing Room', text: 'You are allowed to rest here.' },
  { title: 'Quiet', text: 'Not everything needs to be said to be real.' },
  { title: 'Still Here', text: 'Survival is a form of courage.' },
  { title: 'Soft Rain', text: 'Even storms bring calm in their own way.' },
  { title: 'Light', text: 'Small sparks can brighten the darkest night.' },
  { title: 'Gentle Waves', text: 'Emotions ebb and flow; let them move.' },
  { title: 'Open Sky', text: 'Breathe deeply and release the weight you carry.' },
  { title: 'New Dawn', text: 'Every day is a fresh chance to heal.' },
  { title: 'Stillness', text: 'In quiet moments, we find clarity.' },
  { title: 'Heartstrings', text: 'Words connect us in ways silence cannot.' },
  { title: 'Fading Echo', text: 'Sadness lingers, but light is always near.' },
  { title: 'Hidden Hope', text: 'Even behind the tears, tomorrow waits.' },
  { title: 'Shadows', text: 'Darkness passes; the sun always returns.' },
  { title: 'Quiet Strength', text: 'Soft courage grows in still hearts.' },
  { title: 'Flicker', text: 'A tiny light can guide the lost.' },
  { title: 'Fallen Petals', text: 'Even beauty has its moment of rest.' },
  { title: 'Glimmer', text: 'Hope appears in unexpected ways.' },
  { title: 'Whispered Truth', text: 'The heart speaks even when silence is loud.' },
  { title: 'Morning Mist', text: 'A new day washes over the past.' },
  { title: 'Lonely Road', text: 'You walk alone, yet the path has purpose.' },
  { title: 'Rising Tide', text: 'Every wave brings change and renewal.' },
  { title: 'Soft Echo', text: 'Your voice matters, even if faint.' },
  { title: 'Empty Chair', text: 'Loss teaches us to cherish the present.' },
  { title: 'Quiet Horizon', text: 'The future waits beyond the shadows.' },
  { title: 'Faint Light', text: 'Even the smallest glow defeats darkness.' },
  { title: 'Fallen Star', text: 'Moments of despair can reveal hidden beauty.' },
  { title: 'Gentle Breeze', text: 'Peace arrives quietly, without notice.' },
  { title: 'Broken Vase', text: 'Fractures still hold reflections of beauty.' },
  { title: 'Silver Lining', text: 'Every cloud carries a hint of hope.' },
  { title: 'Fading Footsteps', text: 'Let go and move forward softly.' },
  { title: 'Distant Song', text: 'Even far away, comfort can be heard.' },
  { title: 'Hushed Laughter', text: 'Joy returns in subtle, quiet ways.' },
  { title: 'Still Waters', text: 'Calm beneath the surface holds strength.' },
  { title: 'Fallen Leaves', text: 'Change is natural, and it can be beautiful.' },
  { title: 'Twilight', text: 'The end of day invites reflection and rest.' },
  { title: 'Morning Glow', text: 'Light returns after every long night.' },
  { title: 'Hidden Garden', text: 'Peace exists in secret corners of the heart.' },
  { title: 'Quiet Flame', text: 'Small fires endure when storms pass.' },
  { title: 'Shattered Glass', text: 'Fragments can create new reflections.' },
  { title: 'Open Door', text: 'Opportunities appear when you least expect them.' },
  { title: 'Gentle Rain', text: 'Tears water the soul’s growth.' },
  { title: 'Soft Footsteps', text: 'Even small progress moves you forward.' },
  { title: 'Lonely Star', text: 'You shine, even when alone.' },
  { title: 'Silent Song', text: 'Music lives in hearts, not just ears.' },
  { title: 'Fading Horizon', text: 'Distance teaches perspective and hope.' },
  { title: 'Whispering Pines', text: 'Nature comforts when words fail.' },
  { title: 'Golden Threads', text: 'Every experience weaves into something meaningful.' },
  { title: 'Hidden Path', text: 'Sometimes the unknown leads to beauty.' },
  { title: 'Calm Storm', text: 'Even chaos has a rhythm to it.' },
  { title: 'Frosted Window', text: 'Cold can reveal clarity and reflection.' },
  { title: 'Rising Sun', text: 'Light always returns, bright and patient.' },
  { title: 'Open Heart', text: 'Vulnerability carries quiet strength.' }
];

function enterSite() {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function loadFeaturedPoem() {
  const dayNum = getDayOfYear();
  const index = dayNum % poems.length; // rotate daily
  document.getElementById('featured-poem-title').textContent = poems[index].title;
  document.getElementById('featured-poem-text').textContent = poems[index].text;
}

// Load poem on page load
loadFeaturedPoem();
