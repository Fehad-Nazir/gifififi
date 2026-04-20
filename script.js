const pageContent = {
  recipientName: "Jasrah",
  letterParagraphOne:
    "If I could gather every soft and lovely thing in the world and place it in your hands, I still do not think it would fully express how grateful I am for you. You have this rare way of making life feel gentler, safer, and brighter all at once. In your presence, even silence feels meaningful.",
  letterParagraphTwo:
    "On your birthday, I do not just celebrate the day you were born. I celebrate your kindness, your laughter, your resilience, your dreams, and the beautiful heart that makes you unmistakably you. Loving you feels like finding warmth on a cold evening, like light spilling through curtains, like coming home.",
  letterParagraphThree:
    "I hope this year holds gentle mornings, brave new beginnings, deep joy, and all the little miracles your heart has been quietly waiting for. And in every chapter ahead, I hope you remember this with certainty: you are deeply, dearly, and endlessly loved.",
  closingHeading: "May this year hold as much tenderness as you give the world.",
  closingMessage:
    "May your days be lit with peace, your nights softened by rest, and your heart continually reminded of how cherished you are. Happy birthday, beautiful."
};

function fillContent() {
  Object.entries(pageContent).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupBackgroundMusic() {
  const audioElement = document.getElementById("bgAudio");
  const introCard = document.getElementById("introCard");
  const introOverlay = document.getElementById("introOverlay");

  if (!audioElement || !introCard || !introOverlay) {
    return;
  }

  audioElement.volume = 0.45;

  const openExperience = async () => {
    try {
      await audioElement.play();
    } catch (_error) {
      // The opening click should satisfy autoplay rules in most browsers.
    }

    document.body.classList.remove("intro-active");
    document.body.classList.add("site-revealed");
    introCard.disabled = true;

    window.setTimeout(() => {
      introOverlay.setAttribute("hidden", "");
    }, 720);
  };

  introCard.addEventListener("click", openExperience, { once: true });
}

fillContent();
setupRevealAnimations();
setupBackgroundMusic();
