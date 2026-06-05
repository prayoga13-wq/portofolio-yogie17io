const words = [
  "Web Developer",
  "Frontend Developer",
  "IT Student",
  "Networking Enthusiast"
];

const typingText = document.getElementById("typingText");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.slice(0, charIndex);
  typingText.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex += 1;
    setTimeout(typeLoop, 85);
    return;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1300);
    return;
  }

  if (isDeleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeLoop, 45);
    return;
  }

  isDeleting = false;
  wordIndex = (wordIndex + 1) % words.length;
  setTimeout(typeLoop, 240);
}

typeLoop();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Terima kasih, pesan Anda sudah siap dikirim.");
});
