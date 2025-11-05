// ========== EMAILJS CONFIGURATION ==========
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

// ========== PROJECTS DATA ==========
const projects = [
  {
    id: 1,
    title: "Syarie Lawyer System",
    date: "August 2025 - Current",
    type: "Web Application",
    category: "web",
    icon: "fa-gavel",
    description:
      "Developing a comprehensive Syariah law management system to assist lawyers with case management, documentation, and client consultation tracking.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/yourusername/syarie-lawyer",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 2,
    title: "GlowGuide Mobile Application",
    date: "October 2024 - Current",
    type: "Mobile & Web Application",
    category: "mobile",
    icon: "fa-mobile-alt",
    description:
      "Developed a mobile application integrating both e-commerce features and online consultation booking for treatment services. Built a web-based admin panel using the Laravel framework for managing users, products, and bookings.",
    tech: ["Java", "Android Studio", "Laravel", "Firebase", "MySQL"],
    github: "https://github.com/yourusername/glowguide",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 3,
    title: "Rice Leaf Disease Detection Using CNN",
    date: "June 2025",
    type: "Machine Learning | Group Project",
    category: "ai",
    icon: "fa-brain",
    description:
      "Implemented deep convolutional neural network (CNN) models to classify and detect rice leaf diseases from image data. Applied image preprocessing, training, and evaluation to develop an automated disease detection system with high accuracy.",
    tech: ["Python", "TensorFlow", "CNN", "Image Processing"],
    github: "https://github.com/yourusername/rice-disease-detection",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 4,
    title: "Diabetes Prediction System",
    date: "May 2025",
    type: "Machine Learning | Group Project",
    category: "ai",
    icon: "fa-heartbeat",
    description:
      "Built a predictive model using classification algorithms like Random Forest, Logistic Regression, and K-Nearest Neighbors (KNN) on a diabetes dataset.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    github: "https://github.com/yourusername/diabetes-prediction",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 5,
    title: "Shortest Path Algorithm Analysis",
    date: "April 2025",
    type: "Algorithm Analysis | Group Project",
    category: "data",
    icon: "fa-route",
    description:
      "Analyzed and compared various shortest path algorithms such as Dijkstra's, Breadth First Search and Depth First Search for performance and efficiency.",
    tech: ["Python", "Algorithms", "Data Structures", "Graph Theory"],
    github: "https://github.com/yourusername/shortest-path-analysis",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 6,
    title: "Air Quality Analysis in India",
    date: "2024",
    type: "Data Analytics | Group Project",
    category: "data",
    icon: "fa-wind",
    description:
      "Used Power BI and DAX formulas to analyze and visualize air quality data. Applied various analytics methods to assess health implications.",
    tech: ["Power BI", "DAX", "Data Analytics", "Visualization"],
    github: "https://github.com/yourusername/air-quality-india",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 7,
    title: "E-KOOP Inventory System",
    date: "July 2024 - January 2025",
    type: "Web Application | Group Project",
    category: "web",
    icon: "fa-warehouse",
    description:
      "Developed a web-based system to track and manage inventory, including product details, stock levels, and reorder points.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/yourusername/ekoop-inventory",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 8,
    title: "SOHO & Campus Network Design",
    date: "June 2024",
    type: "Network Design | Group Project",
    category: "network",
    icon: "fa-network-wired",
    description:
      "Designed a secure and efficient network for small offices and developed a comprehensive campus-wide network for a college.",
    tech: ["Cisco Packet Tracer", "Network Design", "VLAN", "Security"],
    github: "https://github.com/yourusername/network-design",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 9,
    title: "Tic-Tac-Toe Game App",
    date: "2024",
    type: "Desktop Application | Group Project",
    category: "web",
    icon: "fa-gamepad",
    description:
      "Built an interactive Tic Tac Toe game using Java. Implemented game logic and GUI components.",
    tech: ["Java", "Swing", "GUI", "Game Development"],
    github: "https://github.com/yourusername/tic-tac-toe",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 10,
    title: "Server-Client Messaging in VM",
    date: "January 2024",
    type: "Systems Programming | Group Project",
    category: "network",
    icon: "fa-server",
    description:
      "Executed server-client messaging and backup operations in a virtual environment using Kali Linux and Ubuntu.",
    tech: ["Linux", "Shell Scripting", "Networking", "Virtual Machines"],
    github: "https://github.com/yourusername/server-client-vm",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 11,
    title: "Laundry Management System",
    date: "January 2024",
    type: "UI/UX Design | Group Project",
    category: "design",
    icon: "fa-tshirt",
    description:
      "Designed a prototype interface for a laundry service system using Canva.",
    tech: ["Canva", "UI/UX", "Prototyping", "Design"],
    github: "https://github.com/yourusername/laundry-system",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 12,
    title: "EzBook Application",
    date: "January 2024",
    type: "UI/UX Design | Group Project",
    category: "design",
    icon: "fa-calendar-check",
    description:
      "Created a user-centered prototype for a booking application using Figma.",
    tech: ["Figma", "UI/UX", "HCI", "Prototyping"],
    github: "https://github.com/yourusername/ezbook",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 13,
    title: "Employee Payroll System",
    date: "January 2024",
    type: "Desktop Application | Group Project",
    category: "web",
    icon: "fa-money-check-alt",
    description:
      "Developed a system to calculate and manage employee salaries using OOP principles.",
    tech: ["Java", "OOP", "Database", "Swing"],
    github: "https://github.com/yourusername/payroll-system",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 14,
    title: "H2OTrack – Smart Bottle Ring",
    date: "2024",
    type: "Product Design | Group Project",
    category: "design",
    icon: "fa-tint",
    description:
      "Designed an innovative smart bottle accessory prototype using Figma.",
    tech: ["Figma", "Product Design", "IoT Concept", "UI/UX"],
    github: "https://github.com/yourusername/h2otrack",
    screenshots: [
      "assets/images/dummy.png",
      "assets/images/dummy.png",
      "assets/images/dummy.png",
    ],
  },
  {
    id: 15,
    title: "Map Coloring using DFS",
    date: "December 2023",
    type: "Algorithm Implementation | Group Project",
    category: "data",
    icon: "fa-map",
    description:
      "Utilized Depth First Search (DFS) to solve the classic map coloring problem.",
    tech: ["Python", "Algorithms", "Graph Theory", "DFS"],
    github: "https://github.com/yourusername/map-coloring-dfs",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 16,
    title: "Network Setup in Virtual Machine",
    date: "October 2023",
    type: "System Configuration | Group Project",
    category: "network",
    icon: "fa-desktop",
    description:
      "Configured a virtual network environment using Oracle VirtualBox and Ubuntu OS.",
    tech: ["VirtualBox", "Ubuntu", "Networking", "System Admin"],
    github: "https://github.com/yourusername/vm-network-setup",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 17,
    title: "Bridal Management System",
    date: "June 2023",
    type: "Software Engineering | Group Project",
    category: "web",
    icon: "fa-ring",
    description:
      "Presented a structured approach to bridal service management system development.",
    tech: ["Software Engineering", "Documentation", "Planning", "UML"],
    github: "https://github.com/yourusername/bridal-management",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 18,
    title: "Online Teaching Effectiveness Study",
    date: "June 2023",
    type: "Data Analysis | Group Project",
    category: "data",
    icon: "fa-chart-bar",
    description:
      "Collected and analyzed data using SPSS to evaluate online teaching efficiency.",
    tech: ["SPSS", "Data Analysis", "Statistics", "Research"],
    github: "https://github.com/yourusername/online-teaching-study",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 19,
    title: "Algebra: Real Life Applications",
    date: "January 2023",
    type: "Mathematical Programming | Group Project",
    category: "data",
    icon: "fa-calculator",
    description:
      "Explored real-world applications of algebraic methods using C programming.",
    tech: ["C", "Mathematics", "Algorithms", "Problem Solving"],
    github: "https://github.com/yourusername/algebra-applications",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 20,
    title: "Car Parking Services",
    date: "January 2023",
    type: "Desktop Application | Group Project",
    category: "web",
    icon: "fa-parking",
    description:
      "Developed a C program to calculate parking hours and corresponding charges.",
    tech: ["C", "DEV C++", "Console Application", "Logic"],
    github: "https://github.com/yourusername/parking-services",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
];

// ========== RENDER PROJECTS ==========
let currentFilter = "all";

function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.onclick = () => openProjectModal(project.id);

    projectCard.innerHTML = `
            <div class="project-header">
                <i class="fas ${project.icon}"></i>
                <h3>${project.title}</h3>
            </div>
            <div class="project-body">
                <img src="${project.screenshots[0]}" alt="${
      project.title
    }" class="project-thumbnail">
                <p>${project.description.substring(0, 120)}...</p>
                <div class="project-date">
                    <i class="far fa-calendar"></i>
                    <span>${project.date}</span>
                </div>
                <div class="project-type">
                    <i class="fas fa-tag"></i>
                    <span>${project.type}</span>
                </div>
            </div>
        `;

    projectsGrid.appendChild(projectCard);
  });
}

// ========== PROJECT FILTERS ==========
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    currentFilter = filter;
    renderProjects(filter);
  });
});

// ========== PROJECT MODAL ==========
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById(
    "modalDate"
  ).innerHTML = `<i class="far fa-calendar"></i> ${project.date}`;
  document.getElementById(
    "modalType"
  ).innerHTML = `<i class="fas fa-tag"></i> ${project.type}`;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalGithub").href = project.github;

  const screenshotsDiv = document.getElementById("modalScreenshots");
  screenshotsDiv.innerHTML = "";
  project.screenshots.forEach((screenshot) => {
    const img = document.createElement("img");
    img.src = screenshot;
    img.alt = project.title;
    screenshotsDiv.appendChild(img);
  });

  const techDiv = document.getElementById("modalTech");
  techDiv.innerHTML = "";
  project.tech.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    techDiv.appendChild(span);
  });

  document.getElementById("projectModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// ========== CERTIFICATE MODAL ==========
function viewCertificate(certId) {
  const certImage = "assets/images/dummy.png";
  document.getElementById("certFullImage").src = certImage;
  document.getElementById("certificateModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// ========== CLOSE MODALS ==========
document.querySelectorAll(".modal-close").forEach((closeBtn) => {
  closeBtn.onclick = function () {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
    document.body.style.overflow = "auto";
  };
});

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  themeIcon.style.transform = "rotate(360deg)";
  setTimeout(() => {
    themeIcon.classList.replace(
      isDark ? "fa-moon" : "fa-sun",
      isDark ? "fa-sun" : "fa-moon"
    );
    themeIcon.style.transform = "rotate(0deg)";
  }, 150);

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ========== MOBILE MENU ==========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});

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

// ========== SCROLL ANIMATIONS ==========
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

// ========== SCROLL TO TOP ==========
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
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

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
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

// ========== MULTI-TEXT TYPING ANIMATION ==========
const tagline = document.querySelector(".tagline");
if (tagline) {
  const texts = ["System Developer", "Mobile App Builder", "Data Enthusiast"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function typeWriter() {
    const currentText = texts[textIndex];

    if (isPaused) {
      setTimeout(typeWriter, 2000);
      isPaused = false;
      return;
    }

    if (!isDeleting && charIndex < currentText.length) {
      tagline.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else if (isDeleting && charIndex > 0) {
      tagline.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      isPaused = true;
      isDeleting = true;
      setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, 500);
    }
  }

  setTimeout(typeWriter, 800);
}

// ========== TABS ==========
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");

    tabBtns.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});

// ========== ANIMATED COUNTER ==========
const animateCounter = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);

    if (end > 5) {
      element.textContent = value + "+";
    } else {
      element.textContent = value.toFixed(2);
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const statCards = document.querySelectorAll(".stat-card h3");
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetCount = parseFloat(entry.target.getAttribute("data-count"));
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

  const submitBtn = contactForm.querySelector(".btn-submit");
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    to_name: "Tuan Khalidah Syazwana",
  };

  // Replace with your EmailJS Service ID and Template ID
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(
      function (response) {
        formStatus.textContent =
          "✓ Message sent successfully! I will get back to you soon.";
        formStatus.className = "form-status success";
        contactForm.reset();
        setTimeout(() => {
          formStatus.style.display = "none";
        }, 5000);
      },
      function (error) {
        formStatus.textContent =
          "✗ Failed to send message. Please try again or email me directly.";
        formStatus.className = "form-status error";
        setTimeout(() => {
          formStatus.style.display = "none";
        }, 5000);
      }
    )
    .finally(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
});

// ========== PARTICLES BACKGROUND ==========
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = Math.random() * 3 + 1 + "px";
    particle.style.height = particle.style.width;
    particle.style.background = "var(--primary)";
    particle.style.borderRadius = "50%";
    particle.style.opacity = Math.random() * 0.3;
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `floatParticle ${
      Math.random() * 10 + 10
    }s linear infinite`;
    particlesContainer.appendChild(particle);
  }
}

// ========== CLOSE MENU ON OUTSIDE CLICK ==========
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("active")) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
  }
});

// ========== ESC KEY HANDLER ==========
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
    document.body.style.overflow = "auto";
  }
});

// ========== INITIALIZE ==========
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  createParticles();
});

// ========== CONSOLE SIGNATURE ==========
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
