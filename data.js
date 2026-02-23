// ================================================================
//  DATA.JS — YOUR PORTFOLIO CONTENT
//  ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT!
//  Add projects, skills, education entries here.
// ================================================================

const DATA = {

  // ── Personal Info ────────────────────────────────────────────
  name:       "Priyabrata Behera",
  nameAccent: "brata",          // part of name shown in accent color
  tagline:    "Available for opportunities",
  badge:      "B.Tech · ECE · CGPA 8.2",
  photo:      "photo.jpg",      // place your photo in the same folder
  bio:        "An enthusiastic Java & Spring Boot developer passionate about building scalable backend systems and turning ideas into practical, working solutions.",

  // ── Contact ──────────────────────────────────────────────────
  // ✏️ Add/remove items. icon can be any emoji.
  // type: "link" opens in new tab, "email" opens mail app, "text" is non-clickable
  contact: [
    { icon: "✉️", label: "Email",    value: "priyabrata1038@gmail.com", href: "mailto:priyabrata1038@gmail.com", type: "email" },
    { icon: "📍", label: "Location", value: "Paradeep Garh, Jagatsinghpur, Odisha", type: "text" },
    // ✏️ Uncomment and fill in to add LinkedIn:
    // { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "https://linkedin.com/in/yourprofile", type: "link" },
    // ✏️ Uncomment and fill in to add GitHub:
    // { icon: "🐙", label: "GitHub",   value: "github.com/yourusername", href: "https://github.com/yourusername", type: "link" },
  ],

  // ── Skills ───────────────────────────────────────────────────
  // ✏️ To add a new skill category: copy one object, add to the array
  skills: [
    {
      icon: "☕",
      category: "Programming",
      tags: ["Java", "JavaScript"]
    },
    {
      icon: "🌐",
      category: "Web Technologies",
      tags: ["HTML5", "CSS3"]
    },
    {
      icon: "⚙️",
      category: "Frameworks",
      tags: ["Spring Boot", "Spring MVC", "Hibernate", "Spring"]
    },
    {
      icon: "🗄️",
      category: "Databases",
      tags: ["SQL", "MySQL"]
    },
    {
      icon: "🛠️",
      category: "Tools & Platforms",
      tags: ["VS Code", "Eclipse", "Postman", "Windows"]
    },
    {
      icon: "🔗",
      category: "API Development",
      tags: ["RESTful APIs", "CRUD", "HTTP", "JSON"]
    },
    // ✏️ ADD NEW SKILL CATEGORY HERE — copy the block above
  ],

  // ── Projects ─────────────────────────────────────────────────
  // ✏️ To add a new project: copy one object, add to the array
  projects: [
    {
      title:  "Supply Chain Management System",
      date:   "September 2025",
      desc:   "A robust backend RESTful API system built with Spring Boot to efficiently manage an end-to-end supply chain — handling customers, orders, products, and suppliers with full CRUD operations and automated tracking.",
      points: [
        "Developed a RESTful API featuring Customers, Orders, Products, and Suppliers entities with complete CRUD operations",
        "Implemented automated timestamp generation for order dates using Hibernate @CreationTimestamp",
        "Designed and tested 40+ JSON payloads (10 per entity) in Postman, validating relationships and edge cases",
        "Applied REST API best practices — versioning, HTTP status codes, and input validation",
        "Resolved data integrity issues with DAOs, exception handling, and custom ResponseStructure"
      ],
      tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST API", "Postman"],
      // link: "https://github.com/yourusername/project"  // ✏️ uncomment to add a GitHub link
    },
    // ✏️ ADD NEW PROJECT HERE — copy the block above
  ],

  // ── Education ────────────────────────────────────────────────
  // ✏️ To add a new entry: copy one object, add to the array
  education: [
    {
      period: "DEC 2020 → APR 2024",
      degree: "Bachelor of Technology — Electronic & Telecommunication",
      school: "Parala Maharaja Engineering College, Berhampur, Odisha",
      score:  "CGPA: 8.2"
    },
    {
      period: "MAY 2018 → MAR 2020",
      degree: "Higher Secondary Education (Class XII)",
      school: "Swami Vivekananda Memorial H S School, Jagatsinghpur, Odisha",
      score:  "69.3%"
    },
    {
      period: "MAR 2016 → MAY 2018",
      degree: "Matriculation (Class X)",
      school: "Sri Maa Nodal Vidyapitha, Paradeep Garh, Odisha",
      score:  "75%"
    },
    // ✏️ ADD NEW EDUCATION HERE — copy the block above
  ]

};
