import { Laptop, Wrench, Smartphone, Palette } from "lucide-react";

export const personalInfo = {
  name: "Obayomi Abdul-Hafeez",
  shortName: "Abdul-Hafeez",
  displayName: "Dev Obayomi",
  role: "Frontend Developer",
  tagline: "I build fast, modern web experiences",
  bio: `I'm a passionate Frontend Developer with 2+ years of experience crafting modern, responsive web applications. I specialize in React and Next.js, turning complex ideas into clean, performant digital experiences that users love.`,
  bioExtended: `When I'm not writing code, I'm constantly learning new technologies, contributing to projects, and exploring the intersection of design and engineering. I believe great software is built on clean code, thoughtful UX, and relentless attention to detail.`,
  location: "Nigeria",
  email: "abdulhafeezayomide@gmail.com",
  phone: "+234 906 960 1599",
  availability: "Available for freelance",
  social: {
    github: "https://github.com/obayomiayomide",
    linkedin: "https://linkedin.com/in/abdul-hafeez-obayomi-9b1096224/",
    twitter: "https://twitter.com/HafeezAyomide",
    fiverr: "https://fiverr.com/sellers/abdulhafeez_oba",
  },
};

export const skills = {
  frontend: [
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 92, icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 88, icon: "⚡" },
    { name: "TypeScript", level: 75, icon: "🔷" },
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "Tailwind CSS", level: 92, icon: "💨" },
    { name: "Framer Motion", level: 78, icon: "🎬" },
  ],
  tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 72 },
    { name: "npm / yarn", level: 90 },
    { name: "Vercel", level: 85 },
    { name: "Netlify", level: 82 },
  ],
  other: [
    "Responsive Design",
    "REST APIs",
    "Performance Optimization",
    "Cross-browser Compatibility",
    "SEO Best Practices",
    "Component Architecture",
    "Web Accessibility (a11y)",
    "Bootstrap",
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform", // 🔧 UPDATE
    description:
      "A fully responsive e-commerce web application with product filtering, cart management, and seamless checkout flow. Built with Next.js and Tailwind CSS for optimal performance.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://your-project-url.com", // 🔧 UPDATE
    githubUrl: "https://github.com/", // 🔧 UPDATE
    image: "/projects/project1.png", // 🔧 ADD YOUR SCREENSHOT
    featured: true,
    category: "Web App",
  },
  {
    id: 2,
    title: "SaaS Landing Page", // 🔧 UPDATE
    description:
      "A high-converting SaaS landing page with smooth animations, responsive layout, and optimized for speed and SEO. Achieved 95+ Lighthouse score.",
    tags: ["React", "Framer Motion", "CSS3", "JavaScript"],
    liveUrl: "https://your-project-url.com", // 🔧 UPDATE
    githubUrl: "https://github.com/", // 🔧 UPDATE
    image: "/projects/project2.png", // 🔧 ADD YOUR SCREENSHOT
    featured: true,
    category: "Landing Page",
  },
  {
    id: 3,
    title: "Portfolio Website", // 🔧 UPDATE
    description:
      "A sleek developer portfolio with dark theme, animated sections, and interactive elements. Built with Next.js and Framer Motion for a premium feel.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://your-project-url.com", // 🔧 UPDATE
    githubUrl: "https://github.com/", // 🔧 UPDATE
    image: "/projects/project3.png", // 🔧 ADD YOUR SCREENSHOT
    featured: true,
    category: "Portfolio",
  },
  {
    id: 4,
    title: "Restaurant Website", // 🔧 UPDATE
    description:
      "Modern restaurant website with menu showcase, reservation system, and location integration. Fully responsive with elegant animations.",
    tags: ["React", "CSS3", "JavaScript", "HTML5"],
    liveUrl: "https://your-project-url.com", // 🔧 UPDATE
    githubUrl: "https://github.com/", // 🔧 UPDATE
    image: "/projects/project4.png", // 🔧 ADD YOUR SCREENSHOT
    featured: false,
    category: "Business",
  },
  {
    id: 5,
    title: "Task Management App", // 🔧 UPDATE
    description:
      "Productivity app with drag-and-drop task management, priority levels, and real-time updates. Clean UI focused on usability and performance.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://your-project-url.com", // 🔧 UPDATE
    githubUrl: "https://github.com/", // 🔧 UPDATE
    image: "/projects/project5.png", // 🔧 ADD YOUR SCREENSHOT
    featured: false,
    category: "Web App",
  },
  {
    id: 6,
    title: "Blog Platform", // 🔧 UPDATE
    description:
      "Full-featured blog platform with markdown support, category filtering, and SEO optimization. Built for performance with static generation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    liveUrl: "https://your-project-url.com", // 🔧 UPDATE
    githubUrl: "https://github.com/", // 🔧 UPDATE
    image: "/projects/project6.png", // 🔧 ADD YOUR SCREENSHOT
    featured: false,
    category: "Web App",
  },
];

export const experience = [
  {
    id: 1,
    role: "Freelance Frontend Developer",
    company: "Self-Employed / Fiverr",
    period: "2022 — Present",
    duration: "2+ years",
    description:
      "Building responsive websites and web applications for clients across various industries. Delivering clean, performant code with a focus on user experience.",
    achievements: [
      "Built 10+ responsive websites for clients across various industries",
      "Maintained 5-star client satisfaction rating across all projects",
      "Reduced page load times by 40% through performance optimization techniques",
      "Collaborated with designers to implement pixel-perfect UI components",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    type: "freelance",
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Tektariq IT Solutions Ltd.",
    period: "2024",
    duration: "6 months",
    description:
      "Contributed to building and maintaining web interfaces for a growing startup. Worked closely with senior developers to deliver high-quality features.",
    achievements: [
      "Developed reusable React components used across the platform",
      "Improved mobile responsiveness of core product pages",
      "Participated in code reviews and agile sprint planning",
    ],
    tech: ["React", "CSS3", "JavaScript", "Git"],
    type: "internship",
  },

  {
    id: 3,
    role: "Frontend Engineer",
    company: "Tektariq IT Solutions Ltd.",
    period: "2025",
    duration: "1+ year",
    description:
      "Contributed to building and maintaining web interfaces for a growing startup. Worked closely with senior developers to deliver high-quality features.",
    achievements: [
      "Worked on a team to develop and maintain the company's main web application, improving user experience and performance.",
      "Implemented new features and optimized existing ones, resulting in a 30% increase in user engagement.",
      "Collaborated with designers and backend developers to ensure seamless integration and consistent UI/UX across the platform.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Typescript"],
    type: "full-time",
  },
];

export const services = [
  {
    icon: "🖥️",
    title: "Web Development",
    description:
      "Custom websites built from scratch with clean code, fast performance, and pixel-perfect design.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Cross-browser",
    ],
  },
  {
    icon: "⚛️",
    title: "React Applications",
    description:
      "Scalable single-page applications and complex UI built with React and modern state management.",
    features: [
      "Component Architecture",
      "State Management",
      "API Integration",
      "Performance",
    ],
  },
  {
    icon: "▲",
    title: "Next.js Development",
    description:
      "Full-stack web applications with server-side rendering, static generation, and API routes.",
    features: ["SSR & SSG", "API Routes", "Image Optimization", "SEO"],
  },
  {
    icon: "🎨",
    title: "UI/UX Implementation",
    description:
      "Translating Figma designs into pixel-perfect, interactive web interfaces with smooth animations.",
    features: [
      "Figma to Code",
      "Animations",
      "Micro-interactions",
      "Accessibility",
    ],
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Mobile-first websites that look and work perfectly across all screen sizes and devices.",
    features: [
      "Mobile First",
      "All Screen Sizes",
      "Touch Friendly",
      "Fast on Mobile",
    ],
  },
  {
    icon: "🔧",
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, performance optimization, and bug fixes for existing websites.",
    features: ["Bug Fixing", "Performance", "Updates", "Optimization"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Client Name", // 🔧 UPDATE
    role: "Business Owner",
    avatar: "👤",
    rating: 5,
    text: "Abdul-Hafeez delivered exactly what I needed. The website looks amazing, loads fast, and exceeded my expectations. Will definitely hire again!",
  },
  {
    id: 2,
    name: "Client Name", // 🔧 UPDATE
    role: "Startup Founder",
    avatar: "👤",
    rating: 5,
    text: "Exceptional work! The landing page he built for us has significantly improved our conversion rate. Clean code, great communication throughout.",
  },
  {
    id: 3,
    name: "Client Name", // 🔧 UPDATE
    role: "Freelancer",
    avatar: "👤",
    rating: 5,
    text: "Highly professional and skilled developer. Delivered the project on time and was very responsive to feedback. Strongly recommended!",
  },
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Technologies", value: "12+" },
];
