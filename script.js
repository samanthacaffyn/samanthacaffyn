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
