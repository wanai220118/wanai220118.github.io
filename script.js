// ========== EMAILJS CONFIGURATION ==========
emailjs.init("YOUR_USER_ID");

// ========== PROJECTS DATA ==========
const projects = [
  {
    id: 1,
    title: "Syarie Lawyer System",
    date: "August 2025 - Current",
    type: "Web Application",
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
    icon: "fa-mobile-alt",
    description:
      "Developed a mobile application integrating both e-commerce features and online consultation booking for treatment services. Built a web-based admin panel using the Laravel framework for managing users, products, and bookings. Currently developing the mobile app using Java in Android Studio, focusing on a user-friendly interface and real-time data sync.",
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
    icon: "fa-heartbeat",
    description:
      "Built a predictive model using classification algorithms like Random Forest, Logistic Regression, and K-Nearest Neighbors (KNN) on a diabetes dataset. Applied data preprocessing, feature selection, and model evaluation techniques to improve prediction accuracy.",
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
    icon: "fa-route",
    description:
      "Analyzed and compared various shortest path algorithms such as Dijkstra's, Breadth First Search and Depth First Search for performance and efficiency. Evaluated algorithmic complexity and accuracy across different graph structures and datasets.",
    tech: ["Python", "Algorithms", "Data Structures", "Graph Theory"],
    github: "https://github.com/yourusername/shortest-path-analysis",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 6,
    title: "Air Quality Analysis in India",
    date: "2024",
    type: "Data Analytics | Group Project",
    icon: "fa-wind",
    description:
      "Used Power BI and DAX formulas to analyze and visualize air quality data. Applied various analytics methods (descriptive to prescriptive) to assess health implications.",
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
    icon: "fa-warehouse",
    description:
      "Developed a web-based system to track and manage inventory, including product details, stock levels, and reorder points, for efficient inventory control. Utilized a relational database to store and manage data, ensuring accurate records and seamless updates for products, suppliers, and transactions.",
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
    icon: "fa-network-wired",
    description:
      "Designed a secure and efficient network for small offices or home offices, including a guest network for visitors to ensure security and privacy for internal resources. Developed a comprehensive campus-wide network for a college, focusing on scalability, security, and connectivity to support academic, administrative, and guest services across the campus.",
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
    icon: "fa-gamepad",
    description:
      "Built an interactive Tic Tac Toe game using Java in Visual Studio Code. Implemented game logic and GUI components for a functional user experience.",
    tech: ["Java", "Swing", "GUI", "Game Development"],
    github: "https://github.com/yourusername/tic-tac-toe",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 10,
    title: "Server-Client Messaging in VM",
    date: "January 2024",
    type: "Systems Programming | Group Project",
    icon: "fa-server",
    description:
      "Executed server-client messaging and backup operations in a virtual environment using Kali Linux and Ubuntu. Demonstrated basic scripting and communication protocols within virtual machines.",
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
    icon: "fa-tshirt",
    description:
      "Designed a prototype interface for a laundry service system using Canva. Focused on user requirements gathering and system visualization.",
    tech: ["Canva", "UI/UX", "Prototyping", "Design"],
    github: "https://github.com/yourusername/laundry-system",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 12,
    title: "EzBook Application",
    date: "January 2024",
    type: "UI/UX Design | Group Project",
    icon: "fa-calendar-check",
    description:
      "Created a user-centered prototype for a booking application using Figma. Applied HCI principles to enhance interface usability and design.",
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
    icon: "fa-money-check-alt",
    description:
      "Developed a system to calculate and manage employee salaries, including deductions, bonuses, and tax calculations. Utilized OOP principles like classes, inheritance, and polymorphism to create a modular, scalable, and maintainable payroll system for handling employee data and payroll functions.",
    tech: ["Java", "OOP", "Database", "Swing"],
    github: "https://github.com/yourusername/payroll-system",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 14,
    title: "H2OTrack – Smart Bottle Ring",
    date: "2024",
    type: "Product Design | Group Project",
    icon: "fa-tint",
    description:
      "Designed an innovative smart bottle accessory prototype using Figma. Focused on sustainable hydration tracking through a resizable tech ring.",
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
    icon: "fa-map",
    description:
      "Utilized Depth First Search (DFS) to traverse and color the regions of a map (represented as a graph) such that no two adjacent regions share the same color. Demonstrated concepts from graph theory, particularly node adjacency and traversal algorithms, to solve the classic map coloring problem effectively.",
    tech: ["Python", "Algorithms", "Graph Theory", "DFS"],
    github: "https://github.com/yourusername/map-coloring-dfs",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 16,
    title: "Network Setup in Virtual Machine",
    date: "October 2023",
    type: "System Configuration | Group Project",
    icon: "fa-network-wired",
    description:
      "Configured a virtual network environment using Oracle VirtualBox and Ubuntu OS. Applied key concepts of OS structure and demonstrated essential skills in virtual machine operations.",
    tech: ["VirtualBox", "Ubuntu", "Networking", "System Admin"],
    github: "https://github.com/yourusername/vm-network-setup",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 17,
    title: "Bridal Management System",
    date: "June 2023",
    type: "Software Engineering | Group Project",
    icon: "fa-ring",
    description:
      "Presented a structured approach to bridal service management system development without implementation. Gained experience in applying theoretical software engineering principles to real-world project planning and documentation.",
    tech: ["Software Engineering", "Documentation", "Planning", "UML"],
    github: "https://github.com/yourusername/bridal-management",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 18,
    title: "Online Teaching Effectiveness Study",
    date: "June 2023",
    type: "Data Analysis | Group Project",
    icon: "fa-chart-bar",
    description:
      "Collected primary data via questionnaires to evaluate online teaching efficiency. Analyzed the data using SPSS software to draw meaningful conclusions.",
    tech: ["SPSS", "Data Analysis", "Statistics", "Research"],
    github: "https://github.com/yourusername/online-teaching-study",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 19,
    title: "Algebra: Real Life Applications",
    date: "January 2023",
    type: "Mathematical Programming | Group Project",
    icon: "fa-calculator",
    description:
      "Explored real-world applications of algebraic methods. Implemented solutions using C programming to demonstrate mathematical models in practical scenarios. Strengthened analytical thinking by connecting mathematical concepts to real-life economic and business problems.",
    tech: ["C", "Mathematics", "Algorithms", "Problem Solving"],
    github: "https://github.com/yourusername/algebra-applications",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
  {
    id: 20,
    title: "Car Parking Services",
    date: "January 2023",
    type: "Desktop Application | Group Project",
    icon: "fa-parking",
    description:
      "Developed a C program using DEV C++ to calculate parking hours and corresponding charges. Designed and tested the application to ensure accurate output based on user input.",
    tech: ["C", "DEV C++", "Console Application", "Logic"],
    github: "https://github.com/yourusername/parking-services",
    screenshots: ["assets/images/dummy.png", "assets/images/dummy.png"],
  },
];

// ========== RENDER PROJECTS ==========
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  projects.forEach((project) => {
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

  // Screenshots
  const screenshotsDiv = document.getElementById("modalScreenshots");
  screenshotsDiv.innerHTML = "";
  project.screenshots.forEach((screenshot) => {
    const img = document.createElement("img");
    img.src = screenshot;
    img.alt = project.title;
    screenshotsDiv.appendChild(img);
  });

  // Technologies
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
  // In real implementation, you would have different images for each certificate
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

// ========== TYPING ANIMATION ==========
const tagline = document.querySelector(".tagline");
if (tagline) {
  const text = "System Developer";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
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
    element.textContent = value + (end > 5 ? "+" : "");
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

// ========== CONTACT FORM ==========
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

// ========== ESC KEY ==========
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
  renderProjects();
});

console.log(
  "%c👋 Hello there!",
  "font-size: 20px; font-weight: bold; color: #6366f1;"
);
console.log(
  "%cThanks for checking out my portfolio!",
  "font-size: 14px; color: #ec4899;"
);
