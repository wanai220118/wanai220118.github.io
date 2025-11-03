// ========== EMAILJS CONFIGURATION ==========
// Initialize EmailJS with your User ID
// Replace 'YOUR_USER_ID' with your actual EmailJS User ID
// Get it from: https://dashboard.emailjs.com/admin/account
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  // Update icon with rotation animation
  themeIcon.style.transform = "rotate(360deg)";
  setTimeout(() => {
    themeIcon.classList.replace(
      isDark ? "fa-moon" : "fa-sun",
      isDark ? "fa-sun" : "fa-moon"
    );
    themeIcon.style.transform = "rotate(0deg)";
  }, 150);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Skip if it's just "#" (like the resume button)
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// ========== SCROLL ANIMATIONS - INTERSECTION OBSERVER ==========
const fadeElements = document.querySelectorAll(".fade-in");

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

fadeElements.forEach((element) => {
  observer.observe(element);
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  // Show/hide scroll to top button
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========== ACTIVE NAVIGATION LINK ON SCROLL ==========
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// ========== TYPING ANIMATION FOR TAGLINE ==========
const tagline = document.querySelector(".tagline");
if (tagline) {
  const text = "System Developer";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      // Add blinking cursor effect
      tagline.style.borderRight = "2px solid var(--primary)";
      setInterval(() => {
        tagline.style.borderRight =
          tagline.style.borderRight === "2px solid transparent"
            ? "2px solid var(--primary)"
            : "2px solid transparent";
      }, 500);
    }
  }

  // Start typing effect after a short delay
  setTimeout(typeWriter, 800);
}

// ========== TABS FUNCTIONALITY ==========
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");

    // Remove active class from all buttons and panes
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Add active class to clicked button and corresponding pane
    btn.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});

// ========== ANIMATED COUNTER FOR STATS ==========
const animateCounter = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value + "+";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Observe stat cards for animation
const statCards = document.querySelectorAll(".stat-card h3");
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetCount = parseInt(entry.target.getAttribute("data-count"));
        if (!isNaN(targetCount)) {
          animateCounter(entry.target, 0, targetCount, 2000);
          statObserver.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.5 }
);

statCards.forEach((card) => {
  statObserver.observe(card);
});

// ========== CONTACT FORM WITH EMAILJS ==========
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Disable submit button and show loading
  const submitBtn = contactForm.querySelector(".btn-submit");
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  // EmailJS parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_name: "Tuan Khalidah Syazwana",
  };

  // Send email using EmailJS
  // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
  // Get them from: https://dashboard.emailjs.com/admin
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);

        // Show success message
        formStatus.textContent =
          "✓ Message sent successfully! I will get back to you soon.";
        formStatus.className = "form-status success";

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = "none";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);

        // Show error message
        formStatus.textContent =
          "✗ Failed to send message. Please try again or email me directly.";
        formStatus.className = "form-status error";

        // Hide error message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = "none";
        }, 5000);
      }
    )
    .finally(() => {
      // Re-enable submit button
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
});

// ========== CLOSE MOBILE MENU ON OUTSIDE CLICK ==========
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("active")) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
  }
});

// ========== CLOSE MOBILE MENU ON ESCAPE KEY ==========
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  }
});

// ========== ADD PARALLAX EFFECT TO HERO SECTION ==========
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled / 600;
  }
});

// ========== SMOOTH REVEAL ON PAGE LOAD ==========
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// ========== CONSOLE MESSAGE ==========
console.log(
  "%c👋 Hello there!",
  "font-size: 20px; font-weight: bold; color: #6366f1;"
);
console.log(
  "%cThanks for checking out my portfolio!",
  "font-size: 14px; color: #ec4899;"
);
console.log(
  "%cFeel free to reach out if you'd like to collaborate!",
  "font-size: 12px; color: #64748b;"
);
