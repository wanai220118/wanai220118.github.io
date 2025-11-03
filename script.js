// Minimal JS: nav toggle, smooth scroll, active link on scroll, set year
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const yearSpan = document.getElementById("year");

  yearSpan.textContent = new Date().getFullYear();

  // Nav toggle for mobile
  navToggle.addEventListener("click", () => {
    if (nav.classList.contains("nav-mobile")) {
      nav.classList.remove("nav-mobile");
      navToggle.setAttribute("aria-label", "Open menu");
    } else {
      nav.classList.add("nav-mobile");
      navToggle.setAttribute("aria-label", "Close menu");
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // close mobile nav if open
        if (nav.classList.contains("nav-mobile")) {
          nav.classList.remove("nav-mobile");
        }
      }
    });
  });

  // IntersectionObserver to highlight nav links
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector('.nav a[href="#' + id + '"]');
        if (entry.isIntersecting) {
          document
            .querySelectorAll(".nav a")
            .forEach((n) => n.classList.remove("active"));
          if (link) link.classList.add("active");
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));

  // Simple keyboard accessibility: close nav on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav-mobile")) {
      nav.classList.remove("nav-mobile");
    }
  });
});
