import user_image from "./user-image.png";
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

export const assets = {
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

// export const workData = [
//   {
//     title: "Frontend project",
//     description: "Web Design",
//     bgImage: "/work-1.png",
//     details: [
//       "Developed using React and Tailwind CSS",
//       "Responsive layout for all screen sizes",
//       "Used reusable components and clean code structure",
//       "Integrated animations with Framer Motion",
//     ],
//     demo: "https://example-frontend-demo.com",
//     github: "https://github.com/username/frontend-project",
//   },
//   {
//     title: "Geo based app",
//     description: "Mobile App",
//     bgImage: "/work-2.png",
//     details: [
//       "Built with React Native and Expo",
//       "Implemented location tracking and map integration",
//       "Used Firebase for backend and authentication",
//       "Offline-first functionality with local storage",
//     ],
//     demo: "https://example-geo-app.com",
//     github: "https://github.com/username/geo-app",
//   },
//   {
//     title: "Photography site",
//     description: "Web Design",
//     bgImage: "/work-3.png",
//     details: [
//       "Clean gallery layout with grid system",
//       "High-res image optimization and lazy loading",
//       "Built with Next.js and styled-components",
//       "SEO optimized and fast loading",
//     ],
//     demo: "https://example-photography.com",
//     github: "https://github.com/username/photography-site",
//   },
//   {
//     title: "UI/UX designing",
//     description: "UI/UX Design",
//     bgImage: "/work-4.png",
//     details: [
//       "Designed in Figma with prototyping",
//       "User research and wireframing",
//       "Mobile-first design principles followed",
//       "Delivered responsive mockups to dev team",
//     ],
//     demo: "https://example-uiux.com",
//     github: "https://github.com/username/uiux-design",
//   },
// ];

export const workData = [
  {
    title: "Sentiment Analysis Project",
    bgImage: "/work-1.png",
    overview:
      "A sophisticated sentiment analysis system that uses natural language processing to analyze and classify customer reviews and feedback into positive, negative, and neutral sentiments.",
    features: [
      "Real-time sentiment analysis of text inputs",
      "Multi-language support with 95% accuracy",
      "Emotion intensity scoring",
      "Detailed sentiment breakdown and visualization",
      "Batch processing capabilities",
    ],
    technologies: ["Python", "NLTK", "Scikit-learn", "TensorFlow", "Flask"],
    results:
      "The project achieved 92% accuracy in sentiment classification, processing over 10,000 customer reviews per day. It helped businesses improve their customer service response time by 60% and increased satisfaction rates by 35%.",
    demo: "https://example-sentiment-demo.com",
    github: "https://github.com/username/sentiment-analysis",
  },
  {
    title: "Customer segmen System",
    bgImage: "/work-2.png",
    overview:
      "An ML-powered system that segments customers based on purchasing behavior and demographics, enabling targeted marketing strategies.",
    features: [
      "Automated clustering of customer data",
      "Integration with CRM systems",
      "Supports K-Means, DBSCAN, and Hierarchical models",
      "Interactive dashboard for insights",
      "Scalable for millions of records",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Flask"],
    results:
      "Enabled businesses to launch personalized campaigns, which improved conversion rates by 40% and boosted average order value by 25%.",
    demo: "https://example-customer-demo.com",
    github: "https://github.com/username/customer-segmentation",
  },
  {
    title: "E-commerce Frontend",
    bgImage: "/work-3.png",
    overview:
      "A modern e-commerce website frontend designed with performance, responsiveness, and user experience in mind.",
    features: [
      "Built with reusable React and Next.js components",
      "Optimized for Core Web Vitals",
      "Integrated animations with Framer Motion",
      "Dark mode and accessibility features",
      "SEO optimized with Next.js",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    results:
      "Improved load time by 45% and reduced bounce rate by 20%, leading to a 30% increase in conversions.",
    demo: "https://example-ecommerce.com",
    github: "https://github.com/username/ecommerce-frontend",
  },
  {
    title: "Geo-based Mobile App",
    bgImage: "/work-4.png",
    overview:
      "A cross-platform mobile app that integrates location tracking and map-based features for real-time interaction.",
    features: [
      "Location tracking with Google Maps API",
      "Offline-first with local storage support",
      "Firebase authentication and real-time sync",
      "Push notifications for nearby events",
      "Responsive design for iOS & Android",
    ],
    technologies: ["React Native", "Expo", "Firebase", "Mapbox"],
    results:
      "Successfully deployed to 5,000+ users, achieving 4.6/5 average rating on app stores. Increased local business engagement by 50%.",
    demo: "https://example-geo-app.com",
    github: "https://github.com/username/geo-mobile-app",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    descriptionLong:
      "I specialize in crafting clean, responsive websites that perform beautifully across all devices. I turn ideas into polished online experiences.",
    points: [
      "Responsive design with HTML, CSS, and JavaScript",
      "SEO-friendly structure and accessibility",
      "Performance optimization techniques",
      "Integration with backend APIs and CMSs",
      "Cross-browser and mobile compatibility",
    ],
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    descriptionLong:
      "I create high-quality, performant mobile applications using React Native and Flutter. My apps are designed for scalability, modern UI, and smooth user interactions.",
    points: [
      "Cross-platform apps using React Native",
      "Clean architecture and modular code",
      "Real-time features using Firebase",
      "UI animations and gestures",
      "Offline capabilities and performance tuning",
    ],
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    descriptionLong:
      "Great design starts with understanding users. I design intuitive, delightful interfaces focused on usability, consistency, and brand alignment.",
    points: [
      "Wireframes and interactive prototypes",
      "User research and persona creation",
      "Consistent design systems and guidelines",
      "High-fidelity UI mockups",
      "Accessibility and usability audits",
    ],
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    descriptionLong:
      "From logos to posters, I deliver clean and impactful visual assets. My designs are strategically crafted to communicate messages effectively and memorably.",
    points: [
      "Logo and brand identity design",
      "Marketing materials (posters, flyers, banners)",
      "Social media visuals",
      "Infographics and presentations",
      "Consistent brand styling across platforms",
    ],
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  { light: assets.vscode },
  { light: assets.github, dark: assets.github_dark },
  { light: assets.git },
  { light: assets.figma },
  { light: assets.firebase },
];
