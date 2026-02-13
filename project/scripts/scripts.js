// ============================
// Shared Page Initialization
// ============================
document.addEventListener("DOMContentLoaded", () => {
  initHomePage();
  initPoemsPage();
  initSubmissionsPage();
  initContactPage();
});

// ============================
// Home Page
// ============================
function initHomePage() {
  const homeTitle = document.getElementById("featured-poem-title");
  const homeText = document.getElementById("featured-poem-text");
  const enterButton = document.getElementById("enter-btn");
  const music = document.getElementById("background-music");
  const body = document.body;

  if (!homeTitle || !homeText || !enterButton) return;

  const homePoems = [
    { title: "Breathing Room", text: "You are allowed to rest here." },
    { title: "Still Here", text: "Survival is a quiet form of courage." },
    { title: "Soft Rain", text: "Even storms know when to be gentle." },
    { title: "Hidden Hope", text: "Hope does not shout, it waits." },
    { title: "Quiet Strength", text: "Soft hearts endure the longest." },
    { title: "Gentle Mending", text: "The heart remembers how to breathe." },
    { title: "Guided Steps", text: "Hands unseen still guide my way." },
    { title: "Tiny Steps", text: "Growth lives in quiet choices." },
    { title: "Warmth", text: "Love drifts like sunlight in a quiet room." },
    { title: "Empty Rooms", text: "Silence can become a teacher." },
    { title: "Mirror of Thoughts", text: "Reflection is still a form of truth." },
    { title: "Faithful Heart", text: "Even in doubt, faith holds me softly." },
    { title: "Roots and Wings", text: "I anchor and soar in the same breath." },
    { title: "Gentle Bonds", text: "Love can be patient and quiet." },
    { title: "Solitary Light", text: "Even in isolation, warmth remains." },
    { title: "Turning Pages", text: "Each line of my story brought me here." },
    { title: "Sunlit Corners", text: "Small warmth can carry a heavy day." },
    { title: "Morning Letters", text: "I rebuild myself one kind word at a time." },
    { title: "Paper Wings", text: "Some mistakes can still learn to fly." },
    { title: "Threads of God", text: "I am held, even when my hands shake." },
    { title: "Sunset Confessions", text: "Love speaks in quiet light." },
    { title: "Quiet Bloom", text: "Hope rises in slow, green ways." },
    { title: "Little Lights", text: "Maybe a flicker is enough for today." },
    { title: "Patchwork", text: "A heart can be stitched back together." },
    { title: "Half Smiles", text: "Sometimes half is still enough." }
  ];

  function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function loadFeaturedPoem() {
    const dayIndex = getDayOfYear() % homePoems.length;
    const poem = homePoems[dayIndex];
    homeTitle.textContent = poem.title;
    homeText.textContent = poem.text;
  }

  function playMusic() {
    if (!music) return;
    music.volume = 0.2;
    music.play().catch(() => {
      // Browser may block autoplay until interaction.
    });
  }

  function fadeOutAudio(audio, duration) {
    if (!audio) return;

    const fadeSteps = 50;
    const fadeAmount = audio.volume / fadeSteps;
    let i = 0;

    const fadeInterval = setInterval(() => {
      if (i < fadeSteps) {
        audio.volume = Math.max(0, audio.volume - fadeAmount);
        i += 1;
      } else {
        audio.pause();
        audio.volume = 0.2;
        clearInterval(fadeInterval);
      }
    }, duration / fadeSteps);
  }

  enterButton.addEventListener("click", () => {
    body.classList.add("fade-out");
    fadeOutAudio(music, 2200);
    setTimeout(() => {
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
      window.location.href = "about.html";
    }, 2400);
  });

  loadFeaturedPoem();
  playMusic();
}

// ============================
// Poems Page
// ============================
function initPoemsPage() {
  const grid = document.getElementById("poems-grid");
  const quoteEl = document.getElementById("motivational-quote");
  const modal = document.getElementById("poem-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDate = document.getElementById("modal-date");
  const modalText = document.getElementById("modal-text");
  const modalQuote = document.getElementById("modal-quote");
  const modalHeart = document.getElementById("modal-heart");
  const closeModalBtn = document.getElementById("close-modal");

  if (!grid || !quoteEl || !modal || !modalTitle || !modalDate || !modalText || !modalQuote || !modalHeart || !closeModalBtn) return;

  const quotes = {
    healing: "Take a gentle pause, you deserve it.",
    faith: "Trust in what you cannot see.",
    growth: "Every step shapes your becoming.",
    love: "Warmth begins with the heart.",
    loneliness: "Solitude is a quiet teacher.",
    reflection: "Look within with kindness.",
    joy: "Happiness lives in small moments."
  };

  const libraryPoems = [
    { title: "Gentle Mending", date: "2022-03-15", mood: "healing", fullText: `Slowly, slowly, the heart remembers how to breathe.\nTiny cracks filled with light,\nsoft as whispered prayers,\nas time hums its healing song.` },
    { title: "Quiet Recovery", date: "2022-06-02", mood: "healing", fullText: `I sit with my own silence,\nlet it wrap me in warmth.\nPain becomes a soft echo,\nfading into morning light.` },
    { title: "New Leaves", date: "2023-01-22", mood: "healing", fullText: `Winter is behind me,\nbuds unfurl with tender courage.\nMy soul stretches toward the sun,\nlearning patience in growth.` },
    { title: "Healing Rain", date: "2023-04-18", mood: "healing", fullText: `Raindrops fall\nlike gentle forgiveness,\neach one washing away yesterday's weight.` },
    { title: "Soft Light", date: "2023-07-09", mood: "healing", fullText: `Morning spills\nthrough half-open curtains.\nI breathe slowly, letting the warmth\nseep into bones and memories alike.` },
    { title: "Gentle Hands", date: "2023-09-30", mood: "healing", fullText: `Healing is a patient friend,\npressing soft palms on my wounds,\nasking only that I rest.` },
    { title: "Quiet Strength", date: "2024-02-14", mood: "healing", fullText: `Strength does not roar.\nIt whispers in the shadows,\nlifts me when I am tired\nwithout asking for applause.` },
    { title: "Broken, Not Lost", date: "2024-05-21", mood: "healing", fullText: `Pieces of myself scattered\nacross days and nights.\nEach fragment\nfinds its way back\ninto a softer, fuller me.` },
    { title: "Gentle Pause", date: "2025-03-05", mood: "healing", fullText: `I stop.\nJust stop.\nAnd let the quiet remind me\nthat healing lives in stillness.` },
    { title: "Soft Horizons", date: "2025-11-17", mood: "healing", fullText: `The sun leans low,\npainting edges with gold.\nTomorrow whispers a new beginning.` },

    { title: "Guided Steps", date: "2022-01-10", mood: "faith", fullText: `My feet stumble,\nyet hands unseen\nguide me along stones and streams,\nwhispering, "I am with you."` },
    { title: "Light in Shadows", date: "2022-08-05", mood: "faith", fullText: `Even in darkness,\nYour glow reaches me,\nsoft and unrelenting.` },
    { title: "Unshaken", date: "2023-02-11", mood: "faith", fullText: `Storms howl,\nyet my heart rests.\nI am anchored\nby the unseen hand.` },
    { title: "Gentle Trust", date: "2023-06-25", mood: "faith", fullText: `I release my grasp,\nlet faith cradle what I cannot see,\nand suddenly, peace.` },
    { title: "Whispered Prayer", date: "2023-12-09", mood: "faith", fullText: `One quiet word,\nsent into the universe.\nIt circles back\ncarrying warmth and hope.` },
    { title: "Steadfast", date: "2024-03-18", mood: "faith", fullText: `The ground shakes,\nyet my roots dig deeper,\nnourished by belief.` },
    { title: "Morning Devotion", date: "2024-07-21", mood: "faith", fullText: `I lift my eyes,\ninhale sunlight,\nand feel the pulse of grace\nthrough my veins.` },
    { title: "Faithful Heart", date: "2025-01-12", mood: "faith", fullText: `Even when I falter,\nfaith holds me softly,\nlike a blanket I cannot see but know.` },
    { title: "Quiet Communion", date: "2025-08-04", mood: "faith", fullText: `Sitting alone,\nI feel the presence\nmore vividly\nthan any spoken word.` },
    { title: "Eternal Whisper", date: "2026-01-30", mood: "faith", fullText: `Time may fray,\nlife may twist,\nyet Your voice remains,\nunbroken, patient, true.` },

    { title: "Tiny Steps", date: "2022-05-03", mood: "growth", fullText: `Growth is in the slow moments,\nin the choices unseen,\nin the courage to rise again.` },
    { title: "Upward", date: "2022-11-15", mood: "growth", fullText: `Every fall becomes a springboard,\nevery tear a watering stone.\nI grow taller\nthan yesterday.` },
    { title: "Becoming", date: "2023-03-28", mood: "growth", fullText: `Not all change is loud.\nSome growth\nwhispers in soft shades\nof courage and patience.` },
    { title: "Inner Garden", date: "2023-09-02", mood: "growth", fullText: `I tend the weeds,\nwater the blossoms,\nand watch myself bloom quietly.` },
    { title: "Courage Sprouts", date: "2024-02-07", mood: "growth", fullText: `Tiny seeds of bravery\nbreak through soil\nto meet the sun\nwithout asking permission.` },
    { title: "Ripening", date: "2024-06-14", mood: "growth", fullText: `I am not the fruit of yesterday,\nnor the leaf of tomorrow.\nI am now,\nquietly ripening.` },
    { title: "Evolving Light", date: "2024-09-20", mood: "growth", fullText: `Shadows shrink\nas I embrace my edges,\nmy growth,\nmy imperfect glow.` },
    { title: "Patience in Motion", date: "2025-03-16", mood: "growth", fullText: `Steps forward,\nsteps back.\nGrowth is a dance,\nnot a race.` },
    { title: "Roots and Wings", date: "2025-07-09", mood: "growth", fullText: `I anchor,\nI soar.\nI learn the balance\nbetween earth and sky.` },
    { title: "Becoming Me", date: "2026-02-01", mood: "growth", fullText: `Every stumble, every fall,\nevery quiet success\nwrites the story of who I am\nslowly, intentionally.` },

    { title: "Warmth", date: "2022-04-14", mood: "love", fullText: `Love drifts gently,\nlike sunlight in a quiet room.\nI breathe it in\nand let it fill every corner.` },
    { title: "Open Heart", date: "2022-09-07", mood: "love", fullText: `Vulnerable, tender, raw-\nthat is how I love.\nUnafraid of falling,\nbecause the heart remembers\nits own rhythm.` },
    { title: "Silent Affection", date: "2023-01-19", mood: "love", fullText: `Words are heavy,\ngestures are light.\nLove lives in small spaces,\nunnoticed yet true.` },
    { title: "Embrace", date: "2023-05-25", mood: "love", fullText: `Arms wrap softly\naround a day,\na moment,\na soul\nthat needs holding.` },
    { title: "Tender Flame", date: "2023-10-30", mood: "love", fullText: `Love is not fire that consumes,\nbut warmth that lingers\neven after dusk.` },
    { title: "Shared Silence", date: "2024-03-11", mood: "love", fullText: `I sit beside you\nand nothing needs saying.\nThe heart speaks\nin quiet rhythms.` },
    { title: "Light Between Us", date: "2024-06-28", mood: "love", fullText: `Love glows\nin glances,\nin laughter,\nin the soft brush of hands.` },
    { title: "Kindred", date: "2024-11-15", mood: "love", fullText: `Two souls recognize each other\nlike old trees nodding in wind,\nand the world is softer.` },
    { title: "Gentle Bonds", date: "2025-02-22", mood: "love", fullText: `Love is patient,\nquiet,\na safe harbor in a restless sea.` },
    { title: "Eternal Warmth", date: "2026-01-05", mood: "love", fullText: `Time passes,\nseasons shift,\nyet the glow remains-\nsteady, tender, true.` },

    { title: "Empty Rooms", date: "2022-07-12", mood: "loneliness", fullText: `Silence echoes\nthrough hallways of thought,\nbut I am learning\nto sit with it,\nnot run.` },
    { title: "Quiet Companion", date: "2022-10-03", mood: "loneliness", fullText: `Loneliness is not absence,\nbut space\nwhere I meet myself fully.` },
    { title: "Hollow, Not Broken", date: "2023-02-05", mood: "loneliness", fullText: `I feel hollow,\nyet the cracks\nlet light through,\nsoft and unexpected.` },
    { title: "Night Talks", date: "2023-08-10", mood: "loneliness", fullText: `Stars whisper\nwhat I cannot say\nand the dark becomes gentle.` },
    { title: "Silent Rain", date: "2023-12-23", mood: "loneliness", fullText: `Raindrops fall on the windowpane,\nand for a moment,\nI am not alone in my solitude.` },
    { title: "Soft Shadows", date: "2024-04-01", mood: "loneliness", fullText: `Shadows stretch long,\nyet they comfort\nin the stillness of quiet rooms.` },
    { title: "Inner Echo", date: "2024-09-05", mood: "loneliness", fullText: `Every thought repeats,\nsoftly,\nuntil I recognize\nmy own voice.` },
    { title: "Alone, Not Afraid", date: "2025-01-18", mood: "loneliness", fullText: `I sit in the quiet,\nlearn its shape,\nand slowly,\nit becomes a friend.` },
    { title: "Solitary Light", date: "2025-08-22", mood: "loneliness", fullText: `Even in isolation,\nthe soul remembers warmth,\nfinds small sparks\nin forgotten corners.` },
    { title: "Gentle Stillness", date: "2026-02-06", mood: "loneliness", fullText: `I do not fear empty spaces.\nI breathe slowly,\nlet quiet become companion.` },

    { title: "Mirror of Thoughts", date: "2022-03-30", mood: "reflection", fullText: `I look back,\ntracing every scar,\nevery smile.\nThe reflection is mine.` },
    { title: "Quiet Questions", date: "2022-09-17", mood: "reflection", fullText: `I ask myself softly,\nWhat have I learned?\nThe answers come\nlike gentle ripples.` },
    { title: "Paused Moments", date: "2023-04-12", mood: "reflection", fullText: `Life unfolds slowly,\nin the spaces between breaths\nand the thoughts we barely notice.` },
    { title: "Looking Back", date: "2023-11-04", mood: "reflection", fullText: `Memories sit like leaves\nin my hands.\nI hold them,\nstudy their edges,\nlet them go.` },
    { title: "Inner Compass", date: "2024-05-09", mood: "reflection", fullText: `I pause,\nfeel the small stirrings of truth,\nand let it guide me\ngently forward.` },
    { title: "Lessons in Silence", date: "2024-08-21", mood: "reflection", fullText: `Silence teaches me\npatience,\nreflection,\nthe weight of small truths.` },
    { title: "Turning Pages", date: "2025-01-28", mood: "reflection", fullText: `I read my own story\nlike an old book,\nknowing each line\nhas brought me here.` },
    { title: "Thoughtful Shadows", date: "2025-07-15", mood: "reflection", fullText: `Shadows remind me\nof what was,\nof what lingers,\nof what may yet bloom.` },
    { title: "Gentle Understanding", date: "2025-11-29", mood: "reflection", fullText: `I study my own heart,\nlearn its rhythms,\nits longings.` },
    { title: "Flickers", date: "2022-03-14", mood: "reflection", fullText: `Sometimes I stare at the ceiling\nand wonder if my thoughts are too loud\nor if the world just refuses to listen.\nI let the flickers of my mind float,\nsoft, quiet, almost ashamed\nof being so alive in my own skin.` },

    { title: "Sacred Pause", date: "2023-07-09", mood: "faith", fullText: `I kneel not for ritual, but because\nmy heart refuses to hold its weight alone.\nGod, if you're listening,\nlet my silences speak louder than my fears.\nLet me believe without doubt\nand stumble with grace when I fail.` },
    { title: "Empty Room, Full Heart", date: "2024-01-21", mood: "loneliness", fullText: `The echoes of my footsteps\npaint pictures on bare walls.\nI whisper your name,\nnot expecting a reply,\njust needing to hear it\ncarved into the quiet.` },
    { title: "Morning Sketch", date: "2023-10-05", mood: "growth", fullText: `I draw myself anew each dawn,\na line here, a shadow there,\ntracing mistakes like constellations\nthat teach me how to fall\nand still rise into something soft,\nsomething my soul recognizes.` },
    { title: "Tender Bruises", date: "2025-05-17", mood: "healing", fullText: `I carry my scars like letters\nI never meant to send.\nSome days they sting,\nother days they hum a lullaby\nreminding me that even brokenness\ncan hold its own quiet beauty.` },
    { title: "Sunlit Corners", date: "2022-06-02", mood: "healing", fullText: `I found a corner today\nwhere sunlight falls just right,\nand I laughed at the way dust danced in it.\nIt reminded me\nthat even when the world feels heavy,\nsmall warmth can live in quiet corners,\nand sometimes that's enough\nto make me smile without reason.` },
    { title: "Overflow", date: "2023-09-18", mood: "love", fullText: `My heart spilled over today\nlike a cup I couldn't hold,\nand in that overflow I found you -\nnot in a moment, not in a touch,\nbut in a laugh shared\nand the way the world seemed brighter\nbecause we existed in it together.` },
    { title: "God in the Little Things", date: "2024-12-11", mood: "faith", fullText: `I see Him in the morning breeze,\nin the way leaves tremble without reason,\nin the quiet prayer\nthat slips between my teeth\nas I sip tea that isn't bitter\nbut reminds me that life,\neven ordinary life,\nis a sacred gift.` },
    { title: "Dancing With Shadows", date: "2025-08-23", mood: "reflection", fullText: `I twirl alone in my room,\nlaughing at shadows that mimic me.\nThey are clumsy partners,\nbut they listen better than anyone else\nand leave me dizzy,\nbut happy,\nand sometimes dizzy is enough\nto feel alive.` },
    { title: "Cat Whispers", date: "2022-11-05", mood: "joy", fullText: `The little paws tap-tap-tap on my chest,\na whisper that says: "exist, you're enough."\nI giggle as they curl into my ribs,\nand for a moment the world outside\ncan shriek all it wants,\nbut in this soft fur,\nI find a cathedral of calm,\nand laughter that lingers.` },
    { title: "Quiet Bloom", date: "2023-03-14", mood: "growth", fullText: `I planted seeds I barely believed in,\nwatched them sleep under soil,\nand today I saw a green tip\nstretch toward the sun,\nlike hope finally learning my name.` },
    { title: "Letter to the Stars", date: "2022-10-21", mood: "reflection", fullText: `I whispered to the stars tonight,\ntelling them secrets no one else would hear.\nThey twinkled back in silence,\nbut in that quiet I felt understood,\nlike they'd been waiting for me all along.` },
    { title: "Faith in Motion", date: "2024-02-18", mood: "faith", fullText: `I stumbled through doubt,\nmy feet heavy with questions,\nbut even there,\nGod's light tickled the edges of my shadow,\nreminding me\nI was never alone in the fall.` },
    { title: "Golden Afternoon", date: "2025-05-07", mood: "joy", fullText: `Sun drips through the window\nlike honey on the floor,\nand I dance barefoot\nbecause today,\nI feel like the music of the universe\nis playing just for me.` },
    { title: "Lonely Roads", date: "2022-08-09", mood: "loneliness", fullText: `I walked the street alone,\nechoes of my footsteps\nmy only companions.\nYet even in the hollow,\nI could hear my own heartbeat\nand it reminded me\nI am still here,\nstill alive,\nstill learning to love my solitude.` },
    { title: "Morning Letters", date: "2023-11-30", mood: "healing", fullText: `I write to myself each morning,\ntiny letters of kindness,\nfolded into invisible envelopes,\nto remind me that even when life breaks me,\nI can piece myself together\none word at a time.` },
    { title: "Coffee-Free Dreams", date: "2024-06-02", mood: "joy", fullText: `No bitter sip, no wakeful buzz,\njust dreams that stretch long and soft,\nand in the morning glow,\nI laugh at how simple happiness\ncan taste like sunlight.` },
    { title: "Silent Conversations", date: "2025-01-15", mood: "reflection", fullText: `We spoke without words,\nour eyes writing volumes,\nhands tracing stories\nI would never dare say aloud.\nSilence has never felt so full.` },
    { title: "Faithful Steps", date: "2022-12-25", mood: "faith", fullText: `Each step feels heavy,\nbut I pray with every footfall.\nThe road is long,\nbut grace moves under me\nlike water beneath a stone.` },
    { title: "Sunset Hugs", date: "2023-09-12", mood: "love", fullText: `The sky folds into pinks and golds,\nand I wrap the day around me\nlike a warm hug.\nI think of you,\nand suddenly the horizon\nfeels like it belongs to us.` },

    { title: "A Room for Every Feeling", date: "2023-04-22", mood: "reflection", fullText: `Some days I feel like I am a house,\nrooms stacked and spilling over,\neach one echoing a different sound.\n\nThere's the small kitchen of laughter,\nwhere sunlight drifts across the counter\nand I sip tea I don't drink.\n\nThe library of doubts\nhas dust settling thick on shelves\nand books I've never opened.\n\nThe bedroom of dreams\nsmells faintly of rain and possibility,\npillows soft enough to hold my tired mind.\n\nAnd sometimes, I wander through\nthe hallways of memories,\ntrying to see which door\nI should open next.\n\nI've learned that each room is sacred,\neven the one that hurts,\neven the one I hide from others.\nBecause when I lock a door,\nit's not to forget,\nit's to remember gently,\nso nothing inside me breaks\nthe fragile architecture of hope.` },
    { title: "Letters I Never Sent", date: "2024-11-05", mood: "healing", fullText: `I have boxes of letters\nfolded carefully,\nwaiting for someone\nwho may never read them.\n\nEach word trembles,\neach sentence carries the weight\nof nights I couldn't sleep,\nof tears I swallowed,\nof words I swallowed,\nof feelings I wrapped in paper\nbecause the world wasn't ready\nfor my honesty.\n\nI write to remember\nthat I am allowed to feel,\nallowed to exist\nbeyond what others demand.\n\nSome letters are short,\nlike whispers-\n"I forgive myself today."\n\nSome are long,\nepic journeys through my own mind,\ndetailing the seasons of loneliness,\njoy, anger, and faith,\nall tangled together like roots\nunder a forest floor.\n\nAnd though no one sees these letters,\nI send them into the air anyway,\nletting them float into nothingness,\nbecause in that act\nI find release,\nI find solace,\nI find pieces of me\nI didn't know were missing.` },
    { title: "The Window I Watch From", date: "2025-06-18", mood: "loneliness", fullText: `I sit by the window,\nwatching the world move\nwhile I remain,\nsilent and small,\na single breath\namong many.\n\nPeople laugh,\nhands entwined,\ndogs chase balls,\nsunlight glances off windows\nI'll never enter.\n\nAnd yet, this window\nis not only a frame\nof what I cannot touch,\nit's a lens into my own heart,\nwhere quiet moments bloom\nand thoughts become more vivid\nthan any crowded street.\n\nI trace shapes on the glass,\nimagining conversations,\nsmiles,\nhandshakes,\nconnections that may never exist.\n\nBut sometimes,\nthe wind catches the curtains\nand I am reminded\nthat life is not static,\nthat even this small room\nholds air that shifts,\nopportunity that waits.\n\nI may be here,\nsilent,\nbut I am also moving\nin ways the eye cannot see.` },
    { title: "Threads of God", date: "2024-03-02", mood: "faith", fullText: `I feel God in the quiet moments,\nin the pause between heartbeats,\nin the way the sunlight\nsplashes gold on my walls\nand warms me without warning.\n\nFaith is not always thunder or song,\nsometimes it's a whisper,\na thread tying me to something unseen\nthat reminds me I am not alone,\nthat even when my hands shake,\neven when my thoughts scatter like leaves,\nI am held,\nI am guided,\nI am enough.\n\nI pray without words,\nletting the rhythm of my breath\nbe the language of trust,\nletting tears fall\nlike rain washing the dust off my mind.\n\nSometimes I doubt,\nsometimes I wander,\nbut the threads are still there,\nstronger than my fears,\nsoft as the memory of laughter,\nsteady as the sunrise\nthat greets me every morning\nwhether I notice it or not.` },
    { title: "Sunset Confessions", date: "2025-09-03", mood: "love", fullText: `I love you in ways\nthat don't always make sense,\nthat don't always follow rhyme or reason.\n\nI love you in the quiet,\nwhen the world is fading,\nand only the orange glow\nof a setting sun\nreminds me\nthat light can still touch the edges of my soul.\n\nI love you in the loud moments,\nwhen laughter erupts\nand the room shakes\nwith the weight of happiness.\n\nI love you in notes I leave\nscattered across your mind,\nin glances\nthat are secret messages\nonly we understand.\n\nAnd if I could,\nI'd write a thousand sunsets\nto fold into your hands,\nso you'd know the depth of what\nI cannot always say\nout loud.` }
  ];

  function openModal(poem) {
    modalTitle.textContent = poem.title;
    modalDate.textContent = poem.date;
    modalText.textContent = poem.fullText;
    modalQuote.textContent = quotes[poem.mood] || "";
    modalHeart.classList.remove("liked");
    modal.style.display = "flex";
  }

  function interleaveByMood(poems) {
    const moodOrder = ["healing", "faith", "growth", "love", "loneliness", "reflection", "joy"];
    const byMood = {};
    moodOrder.forEach((mood) => {
      byMood[mood] = poems.filter((poem) => poem.mood === mood);
    });

    const mixed = [];
    let added = true;

    while (added) {
      added = false;
      moodOrder.forEach((mood) => {
        if (byMood[mood].length > 0) {
          mixed.push(byMood[mood].shift());
          added = true;
        }
      });
    }

    return mixed;
  }

  function renderPoems(filter) {
    const currentFilter = filter || "all";
    const filtered = currentFilter === "all"
      ? interleaveByMood(libraryPoems)
      : libraryPoems.filter((poem) => poem.mood === currentFilter);

    grid.innerHTML = "";

    filtered.forEach((poem, i) => {
      const card = document.createElement("div");
      card.className = `poem-card ${i % 2 === 0 ? "left" : "right"}`;
      card.innerHTML = `
        <h3>${poem.title}</h3>
        <p>${poem.fullText.split("\n")[0]}</p>
        <p class="mood">${poem.mood.charAt(0).toUpperCase() + poem.mood.slice(1)} | ${poem.date}</p>
        <button class="read-more">Read More</button>
      `;

      const readBtn = card.querySelector(".read-more");
      readBtn.addEventListener("click", () => openModal(poem));
      grid.appendChild(card);
    });

    quoteEl.textContent = currentFilter === "all"
      ? "Every feeling has its space."
      : (quotes[currentFilter] || "Every feeling has its space.");
  }

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  modalHeart.addEventListener("click", () => {
    modalHeart.classList.toggle("liked");
  });

  document.querySelectorAll(".poem-moods button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".poem-moods button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPoems(btn.dataset.mood);
    });
  });

  renderPoems("all");
}

// ============================
// Submissions Page
// ============================
function initSubmissionsPage() {
  const form = document.getElementById("submission-form");
  const moodSelect = document.getElementById("submission-mood");
  const moodQuote = document.getElementById("submission-mood-quote");
  const grid = document.getElementById("submissions-grid");
  const modal = document.getElementById("submission-modal");
  const closeModal = document.getElementById("submission-close-modal");
  const modalMeta = document.getElementById("submission-modal-meta");
  const modalTitle = document.getElementById("submission-modal-title");
  const modalDate = document.getElementById("submission-modal-date");
  const modalText = document.getElementById("submission-modal-text");
  const modalHeart = document.getElementById("submission-modal-heart");

  if (!form || !moodSelect || !moodQuote || !grid || !modal || !closeModal || !modalMeta || !modalTitle || !modalDate || !modalText || !modalHeart) return;

  const moodQuotes = {
    healing: "Even small steps are part of the journey.",
    faith: "Trust can be quiet and still be strong.",
    growth: "Growth can be uneven and still be real.",
    love: "Soft hearts make brave homes.",
    loneliness: "You are not less whole in quiet spaces.",
    reflection: "Gentle honesty is a kind of healing."
  };

  const moodIcons = {
    healing: "H",
    faith: "F",
    growth: "G",
    love: "L",
    loneliness: "Lo",
    reflection: "R"
  };

  const seedSubmissions = [
    { name: "Amira", country: "Egypt", date: "2026-02-12", mood: "healing", title: "Pieces of Me", text: `I am picking up the pieces today,\nthey're jagged,\nsome bleed a little,\nbut I think they'll fit\nsomehow. Maybe tomorrow\nI'll glue them better.` },
    { name: "Tendai", country: "Zimbabwe", date: "2026-01-30", mood: "reflection", title: "Half-Remembered", text: `I remember the street,\nbut not the smell,\nor was it yesterday?\nThe wind carries someone else's laugh,\nbut my shadow keeps following me.` },
    { name: "Kofi", country: "Ghana", date: "2026-02-01", mood: "growth", title: "Uneven Steps", text: `I tried walking straight,\nbut my feet wanted sideways,\nso sideways I went,\nand learned something\nI didn't know about balance.` },
    { name: "Chipo", country: "Zimbabwe", date: "2026-02-09", mood: "faith", title: "Maybe Today", text: `I whispered a prayer under my breath,\nhalf because I believed,\nhalf because I was scared,\nand for a moment,\nthe sky didn't answer,\nbut I felt okay anyway.` },
    { name: "Nia", country: "Kenya", date: "2026-01-25", mood: "love", title: "Morning Coffee", text: `Not literally coffee,\njust the smell of you in my head,\nand the way my heart skips\neven when I'm alone,\nand it's too early\nfor all these feelings.` },
    { name: "Malik", country: "Nigeria", date: "2026-02-05", mood: "loneliness", title: "Empty Corridor", text: `The corridor echoes,\nmy own footsteps first,\nthen maybe someone else,\nor maybe nothing,\nand I like it, sort of,\nexcept sometimes it hurts.` },
    { name: "Aisha", country: "Somalia", date: "2026-01-18", mood: "healing", title: "Band-Aids and Tea", text: `I put band-aids on invisible cuts,\nsip tea that's too hot,\nstare at the ceiling,\nand think,\nmaybe tomorrow I'll feel\nmore like myself.` },
    { name: "Thabo", country: "South Africa", date: "2026-02-10", mood: "growth", title: "Cracks", text: `I've got cracks,\nand yes, I can feel them,\nbut water goes in,\nand sometimes something grows,\nand I wonder if I'll ever be smooth.` },
    { name: "Ayana", country: "Ethiopia", date: "2026-01-02", mood: "reflection", title: "Old Songs", text: `I play old songs,\nsing badly along,\nand laugh at the mistakes,\nbecause the mistakes are mine\nand mine only.` },
    { name: "Sipho", country: "South Africa", date: "2026-01-20", mood: "healing", title: "Quiet Corners", text: `There is a corner in my room\nwhere no one looks,\nI hide there sometimes,\nnot because I'm sad,\nbut because it feels\nlike a hug I can control.` },
    { name: "Nandi", country: "Zimbabwe", date: "2026-01-28", mood: "faith", title: "Little Lights", text: `I lit a candle,\nwatched it flicker,\ntried to hope,\nand the candle swayed,\nand I thought, maybe that's enough.` },
    { name: "Kojo", country: "Ghana", date: "2026-02-07", mood: "love", title: "The Text", text: `I wrote something stupid,\nsent it anyway,\nand now I wait,\nnot for a reply,\nbut just to see\nif the world notices.` },
    { name: "Amara", country: "Nigeria", date: "2026-01-15", mood: "reflection", title: "Muddy Shoes", text: `Walked in mud,\ntried to clean shoes,\nbut the mud stayed.\nMaybe it's a lesson\nor maybe it's just shoes.` },
    { name: "Thandi", country: "South Africa", date: "2026-02-11", mood: "healing", title: "Patchwork", text: `I sewed words together,\nsome tore, some stuck,\nand slowly,\nI realized\nmy heart could be patched too.` },
    { name: "Zuri", country: "Tanzania", date: "2026-01-23", mood: "growth", title: "Tiny Wins", text: `Made my bed,\ndid the dishes,\nwalked outside,\nand I felt\na little bigger than yesterday.` },
    { name: "Imani", country: "Kenya", date: "2026-01-31", mood: "loneliness", title: "Echo Chamber", text: `I talk to walls,\nsometimes they answer,\nsometimes they don't,\nand I like both ways.` },
    { name: "Adebayo", country: "Nigeria", date: "2026-02-03", mood: "faith", title: "Waiting Room", text: `I sit,\nhands clasped,\nheart pounding,\nwaiting for the unseen\nto make a sound\nI might understand.` },
    { name: "Sifa", country: "Uganda", date: "2026-02-08", mood: "reflection", title: "Coffee Stains", text: `Coffee spilled,\nI scribbled over it,\nwords messy,\nbut somehow\nthe paper looks happier.` },
    { name: "Kwame", country: "Ghana", date: "2026-02-06", mood: "healing", title: "Paper Wings", text: `Tried folding my mistakes\ninto paper airplanes,\nthrew them into the sky,\nand some actually flew\ninstead of crashing.` },
    { name: "Malaika", country: "Kenya", date: "2026-02-04", mood: "love", title: "Half Smiles", text: `We laughed,\nbut only half the room heard,\nonly half the world noticed,\nand somehow that was enough.` }
  ];

  const storageKey = "safeSpaceSubmissions";
  let userSubmissions = [];

  try {
    const saved = localStorage.getItem(storageKey);
    const parsed = saved ? JSON.parse(saved) : [];
    userSubmissions = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    userSubmissions = [];
  }

  const submissions = [...userSubmissions, ...seedSubmissions];

  function toInitials(name) {
    return (name || "Anonymous")
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0].toUpperCase())
      .slice(0, 2)
      .join("");
  }

  function firstLines(text, maxLines = 4) {
    return text.split("\n").slice(0, maxLines).join("\n");
  }

  function openSubmissionModal(item) {
    modalMeta.textContent = `${toInitials(item.name)} | ${item.name} | ${item.country} | ${moodIcons[item.mood]} ${item.mood}`;
    modalTitle.textContent = item.title;
    modalDate.textContent = item.date;
    modalText.textContent = item.text;
    modalHeart.classList.remove("liked");
    modal.style.display = "flex";
  }

  function renderSubmissions() {
    grid.innerHTML = "";

    submissions.forEach((item, i) => {
      const card = document.createElement("article");
      card.className = `submission-card ${i % 2 === 0 ? "left" : "right"}`;
      card.innerHTML = `
        <p class="submission-meta">${toInitials(item.name)} | ${item.name} | ${item.country}</p>
        <p class="submission-meta">${moodIcons[item.mood]} ${item.mood} | ${item.date}</p>
        <h3 class="submission-title">${item.title}</h3>
        <p class="submission-snippet">${firstLines(item.text, 5)}</p>
      `;
      card.addEventListener("click", () => openSubmissionModal(item));
      grid.appendChild(card);
    });
  }

  moodSelect.addEventListener("change", () => {
    moodQuote.textContent = moodQuotes[moodSelect.value] || "Choose a mood and let your words settle in.";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newSubmission = {
      name: document.getElementById("submission-name").value.trim() || "Anonymous",
      country: document.getElementById("submission-country").value.trim(),
      mood: moodSelect.value,
      title: document.getElementById("submission-title").value.trim(),
      text: document.getElementById("submission-text").value.trim(),
      date: new Date().toISOString().slice(0, 10)
    };

    userSubmissions.unshift(newSubmission);
    submissions.unshift(newSubmission);
    localStorage.setItem(storageKey, JSON.stringify(userSubmissions));
    renderSubmissions();
    form.reset();
    moodQuote.textContent = "Thank you for sharing. Your words now live in this library.";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.style.display = "none";
  });

  modalHeart.addEventListener("click", () => {
    modalHeart.classList.toggle("liked");
  });

  renderSubmissions();
}

// ============================
// Contact Page
// ============================
function initContactPage() {
  const contactForms = document.querySelectorAll(".contact-form");
  const confirmation = document.getElementById("contact-confirmation");
  const confirmationText = document.getElementById("contact-confirmation-text");
  const closeBtn = document.getElementById("contact-confirmation-close");

  if (!contactForms.length || !confirmation || !confirmationText || !closeBtn) return;

  function hideConfirmation() {
    confirmation.classList.remove("show");
    confirmation.setAttribute("aria-hidden", "true");
  }

  function showConfirmation(message) {
    confirmationText.textContent = message || "Your words have arrived safely.";
    confirmation.classList.add("show");
    confirmation.setAttribute("aria-hidden", "false");
  }

  contactForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const poeticMessage = form.dataset.confirm || "Your words have arrived safely.";
      showConfirmation(poeticMessage);
      form.reset();
    });
  });

  closeBtn.addEventListener("click", hideConfirmation);

  confirmation.addEventListener("click", (event) => {
    if (event.target === confirmation) hideConfirmation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideConfirmation();
  });
}
