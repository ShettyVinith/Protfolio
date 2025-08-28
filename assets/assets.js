import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import check_icon from "./check-icon.png";
import check_black_icon from "./check-black-icon.png";
import bootstrap from "./bootstrap.png";
import tailwindcss from "./tailwindcss.png";
import nextjs from "./nextjs.png";
import react from "./react.png";
import javascript from "./javascript.png";
import html5 from "./html5.png";
import css3 from "./css3.png";
import nodejs from "./nodejs.png";
import expressjs from "./expressjs.png";
import php from "./php.png";
import mysql from "./mysql.png";
import cpp from "./cpp.png";
import java from "./java.png";
import python from "./python.png";
import github from "./github.png";
import github_dark from "./github-dark.png";

import html from "./html5.svg";
import css from "./css.svg";
import jss from "./jss.svg";
import react1 from "./react1.svg";
import reactbootstrap from "./reactbootstrap.svg";
import express from "./express.svg";
import mongodb1 from "./mongodb.svg";
import mysql1 from "./mysql.svg";
import postgresql from "./postgresql.svg";
import java1 from "./icons8-java-logo-50.png";
import git1 from "./git.svg";
import c from "./c.svg";
import bootstrap1 from "./icons8-bootstrap.svg";
import python1 from "./icons8-python.svg";
import figma1 from "./icons8-figma.svg";
import php1 from "./icons8-php.svg";
import tailwindcss1 from "./icons8-tailwind-css.svg";

export const assets = {
  html,
  css,
  jss,
  react1,
  reactbootstrap,
  express,
  mongodb1,
  mysql1,
  postgresql,
  java1,
  git1,
  c,
  bootstrap1,
  python1,
  figma1,
  php1,
  tailwindcss1,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  check_icon,
  check_black_icon,
  bootstrap,
  tailwindcss,
  nextjs,
  react,
  javascript,
  html5,
  css3,
  nodejs,
  expressjs,
  php,
  mysql,
  cpp,
  java,
  python,
  github,
  github_dark,
};

export const skillsLogoData = [
  { icon: assets.html, name: "HTML" },
  { icon: assets.css, name: "CSS" },
  { icon: assets.jss, name: "JavaScript" },
  { icon: assets.react1, name: "React.js" },
  { icon: assets.reactbootstrap, name: "React Bootstrap" },
  { icon: assets.express, name: "Express.js" },
  { icon: assets.mongodb1, name: "MongoDB" },
  { icon: assets.mysql1, name: "MySQL" },
  { icon: assets.postgresql, name: "PostgreSQL" },
  { icon: assets.java1, name: "Java" },
  { icon: assets.git1, name: "Git" },
  { icon: assets.c, name: "C++" },
  { icon: assets.bootstrap1, name: "Bootstrap" },
  { icon: assets.python1, name: "Python" },
  { icon: assets.figma1, name: "Figma" },
  { icon: assets.php1, name: "PHP" },
  { icon: assets.tailwindcss1, name: "Tailwind CSS" },
];

export const skillsData = [
  { icon: cpp, name: "C++" },
  { icon: java, name: "Java" },
  { icon: python, name: "Python" },
  { icon: html5, name: "HTML" },
  { icon: css3, name: "CSS" },
  { icon: javascript, name: "JavaScript" },
  { icon: nextjs, name: "Next.js" },
  { icon: react, name: "React.js" },
  { icon: nodejs, name: "Node.js" },
  { icon: expressjs, name: "Express.js" },
  { icon: bootstrap, name: "Bootstrap" },
  { icon: tailwindcss, name: "Tailwind CSS" },
  { icon: php, name: "PHP" },
  { icon: mysql, name: "MySQL" },
  { icon: mongodb, name: "MongoDB" },
];

// assets.js
export const workData = [
  {
    title: "Chat + Video Calling App",
    bgImage: "/work-1.png",
    overview:
      "A powerful language-learning focused chat and video calling platform with real-time communication, intuitive UI, and modern scalable architecture.",
    features: [
      "Real-time Chat – Instant messaging with typing indicators, emojis & reactions",
      "Video Calling – 1-on-1 and group calls with screen sharing & recording",
      "Friend System – Send, accept or decline friend requests",
      "Notifications – Live updates for messages and friend activities",
      "JWT Authentication & Protected Routes",
      "32 UI Themes – Rich and customizable UI",
      "Lightweight Global State Handling with Zustand",
      "Robust Express + MongoDB Backend with Error Handling",
      "Powered by GetStream.io (Chat & Video SDK)",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stream API",
    ],
    results:
      "Successfully deployed a full-fledged chat & video calling platform enabling seamless language exchange worldwide.",
    demo: "https://streamify-video-calling-realtime-chat-uw3x.onrender.com/",
    github: "https://github.com/ShettyVinith/Streamify",
    categories: ["Web"], // 🟢 Added
  },
  {
    title: "Food Delivery Web App",
    bgImage: "/work-2.png",
    overview:
      "A responsive and dynamic food delivery web app providing users with an interactive experience for browsing, selecting, and ordering food items.",
    features: [
      "Interactive React-based UI",
      "Global State Management using Context API",
      "Seamless navigation with React Router DOM",
      "Reusable modular components",
      "Efficient state and props handling",
    ],
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    results:
      "Delivered a smooth food ordering experience with reusable components and optimized React performance.",
    demo: "https://tomato-fzei.onrender.com/",
    github: "https://github.com/ShettyVinith/Food-Delivery-Web-App",
    categories: ["Web"], // 🟢 Added
  },
  {
    title: "Subscription Management System",
    bgImage: "/work-3.png",
    overview:
      "A backend project for managing real users and subscription lifecycle with a secure, scalable architecture.",
    features: [
      "JWT-based Authentication",
      "Role-based Access Control",
      "Subscription Lifecycle (create, update, cancel)",
      "Secure Middleware & API Design",
      "Workflow Automation with Upstash & Arcjet",
      "Email Notifications via Nodemailer",
      "Caching & Abuse Protection",
      "Production-ready backend structure",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Upstash Redis",
      "Arcjet",
      "Helmet",
      "Nodemailer",
    ],
    results:
      "Successfully built a scalable backend handling real subscription workflows securely with caching & abuse protection.",
    demo: "https://github.com/ShettyVinith/Subscription-Management-System",
    github: "https://github.com/ShettyVinith/Subscription-Management-System",
    categories: ["Web"], // 🟢 Added
  },
  {
    title: "Sales Management System",
    bgImage: "/work-4.png",
    overview:
      "A comprehensive web application for managing product inventory, sales data, and business reports, built with JSP, Servlets, and MySQL following MVC architecture.",
    features: [
      "CRUD operations for product records",
      "Category-based product management",
      "Inventory control & stock tracking",
      "Sales tracking per product",
      "Report Generation – Products by category, top N products, products above price",
      "Search by ID, name, or category",
      "Responsive UI with dashboards & tables",
      "PDF report downloads",
      "MVC Architecture & JDBC integration",
    ],
    technologies: [
      "Java (JSP, Servlets)",
      "MySQL",
      "JDBC",
      "Apache Tomcat",
      "HTML",
      "CSS",
    ],
    results:
      "Built a scalable enterprise-grade inventory and sales tracking system with clean MVC separation, PDF reports, and analytics.",
    demo: "https://github.com/ShettyVinith/Product-Management",
    github: "https://github.com/ShettyVinith/Product-Management",
    categories: ["Java", "Web"], // 🟢 Multiple categories
  },
  {
    title: "🌱 Crop Recommendation System",
    bgImage: "/work-2.png",
    overview: "A machine learning project that recommends the most suitable crop based on soil and environmental conditions.",
    features: [
      "Soil & climate data preprocessing",
      "Multiple ML models (Logistic Regression, Random Forest, SVM, etc.)",
      "Model evaluation & comparison",
      "Crop prediction with high accuracy"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    results: "Achieved high accuracy. Random Forest and Gradient Boosting performed the best. Predicts crops like Rice, Maize, Mango, Coffee, etc.",
    demo: "https://github.com/ShettyVinith/Crop_Recommendation_System.git", // 🔹 Replace with Streamlit/Flask app link if deployed
    github: "https://github.com/ShettyVinith/Crop_Recommendation_System.git", 
    categories: ["ML", "Agriculture", "Data Science"],
}
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full-Stack Development",
    description:
      "End-to-end development of scalable and reliable applications.",
    descriptionLong:
      "I build complete full-stack solutions using modern frontend frameworks and Java-based backend technologies. My focus is on creating efficient, secure, and maintainable applications that deliver seamless user experiences.",
    points: [
      "Frontend with React.js & Next.js",
      "Backend development with Java, JSP, Servlets",
      "Database integration using JDBC & MySQL",
      "REST API design and integration",
      "Scalable and secure application architecture",
    ],
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "AI & ML Solutions",
    description: "Designing intelligent applications powered by AI and ML.",
    descriptionLong:
      "I have worked on projects involving AI and Machine Learning, delivering solutions like an AI Resume Analyzer, AI Code Reviewer, and a Crop Recommendation Model. My goal is to integrate ML models into real-world applications for smarter decision-making.",
    points: [
      "AI-powered Resume Analyzer for insights",
      "AI Code Reviewer for cleaner, optimized code",
      "Crop Recommendation Model for agriculture",
      "Integration of ML models into web apps",
      "Hands-on with Python, ML libraries, and APIs",
    ],
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user experiences.",
    descriptionLong:
      "I focus on creating clean and user-friendly interfaces that blend aesthetics with functionality. My designs prioritize usability, consistency, and accessibility for better engagement.",
    points: [
      "Responsive and modern UI design",
      "Wireframes and interactive prototypes",
      "Design systems for consistency",
      "Accessibility and usability improvements",
      "Clean layouts with smooth interactions",
    ],
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Project Development",
    description: "Built and deployed multiple impactful projects.",
    descriptionLong:
      "With more than 5 projects completed, I have hands-on experience in turning ideas into real-world applications. Each project has helped me improve my problem-solving and development skills.",
    points: [
      "Practical experience with real-world projects",
      "Deployment and hosting on modern platforms",
      "Version control using Git & GitHub",
      "Collaboration and team-based development",
      "Continuous learning and improvement through projects",
    ],
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "Java, C++, JavaScript, React.Js, Next.Js, Node.Js, Express.Js, MongoDB, MySQL",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "B.E in Computer Science at Alva's Institute of Engineering and Technology, Mangalore",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description:
      "I have built and delivered 8+ projects showcasing my skills and expertise.",
  },
];

export const toolsData = [
  { light: assets.vscode },
  { light: assets.github, dark: assets.github_dark },
  { light: assets.git },
  { light: assets.figma },
  { light: assets.firebase },
];
