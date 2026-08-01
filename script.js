// Marks that JS is running, so CSS can safely hide things it will animate in.
// Without this class everything shows instantly (e.g. for very old browsers).
document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Hide the headshot img and show the "SC" fallback if the photo file isn't there yet.
const headshot = document.getElementById("headshot");
headshot.addEventListener("error", () => headshot.setAttribute("data-missing", ""));
if (headshot.complete && headshot.naturalWidth === 0) {
  headshot.setAttribute("data-missing", "");
}

// Gentle fade-up as sections scroll into view.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".job, .card, .now-item, .contact-actions").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Stagger items that sit side by side, so they arrive one after another.
document.querySelectorAll(".now-strip, .community-grid").forEach((group) => {
  group.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = i * 100 + "ms";
  });
});

// Highlighter marks and squiggle underlines draw themselves in when scrolled to.
const drawObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("drawn");
        drawObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".hl, .squiggle").forEach((el) => drawObserver.observe(el));

// ----- Gelato easter egg -----
let scoops = 0;
let scoopCounter = null;

document.querySelectorAll(".egg").forEach((el) => {
  el.addEventListener("click", (e) => {
    scoops++;
    if (!reducedMotion) {
      const float = document.createElement("span");
      float.className = "scoop-float";
      float.textContent = "🍨";
      float.style.left = e.clientX - 11 + "px";
      float.style.top = e.clientY - 30 + "px";
      document.body.appendChild(float);
      setTimeout(() => float.remove(), 1000);
    }
    if (!scoopCounter) {
      scoopCounter = document.createElement("div");
      scoopCounter.id = "scoop-counter";
      document.body.appendChild(scoopCounter);
    }
    scoopCounter.textContent =
      scoops >= 10
        ? "🍨 × " + scoops + ", ok that's a sundae"
        : "🍨 × " + scoops + " scoop" + (scoops > 1 ? "s" : "");
  });
});
