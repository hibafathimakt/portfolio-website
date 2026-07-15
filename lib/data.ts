export const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Python Developer",
  "Software Engineer",
];

export const skillGroups = [
  {
    label: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Redux Toolkit (RTK)",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    items: [
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "CRUD Operations",
      "AJAX",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    label: "AI / ML",
    items: [
      "PyTorch",
      "YOLOv8",
      "MediaPipe",
      "OpenCV",
      "Scikit-learn",
      "TensorFlow",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  query: string;
};

export const projects: Project[] = [
  {
    id: "cctv-system",
    title: "AI-Based CCTV Multi-Detection System",
    description:
      "A full-stack AI-powered surveillance platform that detects falls, theft, abuse, and emergency incidents in real time using computer vision, live monitoring, and secure backend services.",
    stack: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "YOLOv8",
      "MediaPipe",
      "PyTorch",
      "OpenCV",
      "React Native",
    ],
    github: "https://github.com/Hibafathimakt/ai-cctv-threat-detection",
    query:
      "SELECT incident_type, COUNT(*) FROM incidents GROUP BY incident_type;",
  },

  {
    id: "disease-predictor",
    title: "Disease Predictor with Chatbot Integration",
    description:
      "A healthcare platform that predicts diseases from symptoms, performs mental health assessments, generates reports, and provides AI chatbot assistance through a secure full-stack application.",
    stack: [
      "FastAPI",
      "React",
      "SQLAlchemy",
      "Scikit-learn",
      "JWT",
      "OCR",
    ],
    github: "https://github.com/hibafathimatkt/early-disease-predictor-system",
    query:
      "SELECT prediction, confidence FROM disease_predictions ORDER BY confidence DESC;",
  },

  {
    id: "call-rejector",
    title: "Auto Call Rejector with Smart Response",
    description:
      "An Android application that automatically blocks unwanted calls from blacklisted numbers and sends intelligent responses with a modern and user-friendly interface.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design",
    ],
    github: "https://github.com/shahinakt/Auto_call_rejector_with_smart_response.git",
    query:
      "SELECT phone_number FROM blacklist WHERE status = 'blocked';",
  },

  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "A responsive portfolio website showcasing projects, skills, and achievements with smooth animations, dark mode, SEO optimization, and a modern user experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
    ],
    github: "https://github.com/hibafathimakt/portfolio-website",
    demo: "https://hibafathimakt.github.io/portfolio-website/",
    query:
      "SELECT project, tech_stack FROM portfolio ORDER BY featured DESC;",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Calicut University",
    university: "Calicut University, Kerala",
    year: "2023 – 2026",
    cgpa: "5.9 / 10",
  },
];

export const certifications = [
  {
    title: "Full Stack JavaScript Development",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
  {
    title: "Generative AI Career Essentials",
    issuer: "Microsoft & LinkedIn Learning",
    year: "2026",
  },
  {
    title: "Cloud Architecture: Advanced Concepts",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
];

export const contactLinks = {
  github: "https://github.com/hibafathimakt",
  linkedin: "https://www.linkedin.com/in/hiba-fathima-kt-7740a3342/",
  email: "hibakt96@gmail.com",
  location: "Palakkad, Kerala, India",
};
