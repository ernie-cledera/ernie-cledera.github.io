export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  responsibilities: string[];
  logo?: string;
}

export interface Education {
  id: string;
  title: string;
  location: string;
  subtitle: string;
  date: string;
  logo?: string;
}

export interface Affiliation {
  id: string;
  name: string;
  status: string;
  date: string;
  logo?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  role?: string;
  year?: string;
  highlights?: string[];
  achievements?: string[];
  githubLink?: string;
  liveLink?: string;
  externalLink?: string;
}

export interface WorkstationItem {
  name: string;
  value: string;
}

export interface WorkstationCategory {
  title: string;
  items: WorkstationItem[];
}

export const profileData = {
  name: "Ernie Joseph Cledera",
  firstName: "Ernie",
  profileImage: "/ernie-joseph-cledera.jpg",
  introduction: `My name is Ernie Joseph Cledera. I'm an Information Technology professional with a Computer Engineering and Virtual Assistance background, specializing in workflow automation, AI integration, and digital operations. With over 7 years of experience, I help businesses streamline processes, improve productivity, and implement technology-driven solutions that deliver measurable results.`,
  birthDate: "1998-04-09",
  email: "ernie@cledera.dev",
  phone: "+63 929 652 9698",
  location: "Philippines",
  roles: [
    "IT Specialist",
    "Web Developer",
    "Virtual Assistant",
    "Network Specialist",
    "Software Developer",
    "Automation Specialist",
  ],
  social: {
    github: "https://github.com/ernie-cledera",
    linkedin: "https://www.linkedin.com/in/ernie-cledera/",
    site: "https://cledera.dev",
  },
};

export const experienceData: Experience[] = [
  {
    id: "avatone",
    title: "Avatone Technologies Inc.",
    subtitle: "QA Tester / Community Manager",
    date: "2026 - Present",
    responsibilities: [
      "Manages the user community and social media presence for Avatone.",
      "Performs QA testing for the application to ensure quality and functionality.",
      "Provides virtual assistance and administrative support.",
    ],
    logo: "/avatone_technologies_logo.jpg",
  },
  {
    id: "ateneo-intern-2026",
    title: "Ateneo de Naga University (NOCS Networks)",
    subtitle: "Information Technology Intern",
    date: "2026",
    responsibilities: [
      "Completed a 486-hour internship supporting network operations, including system monitoring, basic network troubleshooting, and IT support tasks.",
      "Assisted in maintaining network infrastructure, documenting technical processes, and resolving user issues to ensure stable and efficient operations.",
    ],
    logo: "/ateneo-logo.png",
  },
  {
    id: "mr-rooter",
    title: "Mr. Rooter Plumbing",
    subtitle: "Senior Dispatcher",
    date: "2023 - 2026",
    responsibilities: [
      "Coordinates schedules, assigns tasks, and monitors workflows to ensure timely service delivery.",
      "Communicates effectively between clients, teams, and management while maintaining accuracy in records and prioritizing urgent requests with a consistent 90% booking rate.",
    ],
    logo: "/mr-rooter-logo.png",
  },
  {
    id: "concentrix",
    title: "Concentrix",
    subtitle: "Claims and Insurance Specialist",
    date: "2021 - 2022",
    responsibilities: [
      "Manages insurance claims, verifies coverage, and ensures compliance with policies and regulations.",
      "Provides clients with accurate information, resolves inquiries, and maintains detailed records to support smooth processing, resolving 95% of cases within first contact, improving satisfaction.",
    ],
    logo: "/concentrix-logo.png",
  },
  {
    id: "bell-canada",
    title: "Bell Canada",
    subtitle: "Technical Support Representative",
    date: "2019 - 2020",
    responsibilities: [
      "Manage customers' account records, walkthrough their technical concerns in internet, satellite TV, and mobile phone services, provide support with billing concerns, and establish trust by providing excellent customer service and resolving telephone inquiries in a timely manner.",
      "Best in first call resolution. Best in average hold time resolving inquiries within 140 seconds.",
    ],
    logo: "/bell-canada-logo.png",
  },
  {
    id: "ateneo-intern",
    title: "Ateneo de Naga University (NOCS Desktop)",
    subtitle: "Engineering Intern",
    date: "2016",
    responsibilities: [
      "Completed a 3-month Engineering Internship at Ateneo De Naga University, providing hardware and technical support throughout the university and conducted network design and troubleshooting, install different types of operating systems and attended seminars regarding cybersecurity.",
    ],
    logo: "/ateneo-logo.png",
  },
];

export const interestsData: string[] = [
  "Gaming",
  "PC Building / Modding",
  "Coding / Automation Projects",
  "Reading",
  "Journaling",
  "Watching Movies",
  "Traveling",
  "Playing Instruments",
  "Aquascaping",
];

export const softSkillsData: string[] = [
  "Leadership",
  "Multitasking",
  "Work Ethic",
  "Decision-making",
  "Attention to detail",
  "Critical thinking",
  "Conflict resolution",
  "Problem-solving",
  "Time management",
  "Adaptability",
  "Communication",
  "Collaboration",
  "Creativity",
];

export const technicalSkillsData: string[] = [
  "Programming (C++, Java, C#, Kotlin, Python)",
  "Software & App Development",
  "Database Management",
  "Networking (Cisco)",
  "Cybersecurity",
  "UI/UX Design",
  "Web Development (HTML, CSS, JS)",
  "Artificial Intelligence",
  "Cloud Computing",
  "Data Analysis",
  "Project Management",
];

export const educationData: Education[] = [
  {
    id: "sti-college",
    title: "STI College Naga",
    location: "Naga City, Philippines",
    subtitle: "Bachelor of Science in Information Technology",
    date: "2022 - 2026",
    logo: "/sti-logo.png",
  },
  {
    id: "ateneo-university",
    title: "Ateneo De Naga University",
    location: "Naga City, Philippines",
    subtitle: "Bachelor of Engineering Technology Major in Computer Engineering Technology",
    date: "2014 - 2018",
    logo: "/ateneo-logo.png",
  },
];

const unsortedAffiliationsData: Affiliation[] = [
  {
    id: "apo",
    name: "Alpha Phi Omega",
    status: "Member - Beta Kappa Chapter 18A",
    date: "2018",
    logo: "/apo-logo-placeholder.png",
  },
  {
    id: "icep",
    name: "Institute of Computer Engineers of the Philippines",
    status: "Student Member",
    date: "2015",
    logo: "/icpep-logo.png",
  },
  {
    id: "afs",
    name: "Ateneo Film Society",
    status: "Member - Batch 0",
    date: "2016",
    logo: "/afs-logo-placeholder.png",
  },
  {
    id: "bgc",
    name: "Bicolano Gaming Community",
    status: "Founder",
    date: "2020",
    logo: "/BGCOfficial Logo.png",
  },
];

export const affiliationsData: Affiliation[] = [...unsortedAffiliationsData].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const softwareUsedData: string[] = [
  "Visual Studio",
  "Visual Studio Code",
  "ChatGPT",
  "GitHub",
  "Unity",
  "HubSpot",
  "Zendesk",
  "Microsoft 365",
  "Google Suite",
  "Google Workspace",
  "ServiceTitan",
  "Netbeans",
  "IDLE",
  "Zoom",
  "Zapier",
  "Asana",
  "Monday",
  "Slack",
  "Outlook",
  "GoHighLevel",
  "SAP",
  "Cisco",
  "Packet Tracer",
  "Photoshop",
  "Canva",
  "Premiere Pro",
  "Illustrator",
  "Dreamweaver",
  "CapCut",
  "Notion",
];

export const languagesData: string[] = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "HTML5",
  "CSS3",
  "PHP",
  "C++",
  "Visual Basic",
  "C#",
  "Kotlin",
  "SQL",
  "Lua",
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills and projects.",
    image: "/my-portfolio-website.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    role: "Solo Developer",
    year: "2026",
    highlights: [
      "Developer-dashboard design with a dark/light theme and theme-aware branding.",
      "GSAP-powered card navigation and smooth scroll-reveal animations.",
      "Project modals with rich details, a typewriter role intro, and a live GitHub contribution graph.",
      "Fully responsive and deployed at cledera.dev.",
    ],
    githubLink: "https://github.com/ernie-cledera/ernie-cledera.github.io",
    liveLink: "https://cledera.dev",
  },
  {
    id: 2,
    title: "E-CCC: Enrollment & Academic Records System",
    description:
      "A comprehensive school management system designed for Calabanga Community College, handling student records, course management, and administrative tasks.",
    image: "/calabanga-sms.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Laravel", "Filament"],
    role: "Full-Stack Developer",
    highlights: [
      "Handles student records, course management, and enrollment workflows in one system.",
      "Built with Laravel + Filament on a MySQL backend.",
      "Role-based admin panel for school staff and administrators.",
      "Deployed for Calabanga Community College.",
    ],
    githubLink: "https://github.com/ernie-cledera/E-CCC",
    externalLink: "https://eccc.cledera.dev/",
  },
  {
    id: 3,
    title: "Class Scheduler",
    description:
      "A web application to help the school manage and visualize class schedules and to check if there is a conflict in the schedule.",
    image: "/class-scheduler.png",
    technologies: ["C#", "MySQL", "Visual Studio"],
    role: "Full-Stack Developer",
    highlights: [
      "Visualizes class schedules so staff can spot conflicts at a glance.",
      "Automatic detection and flagging of scheduling overlaps.",
      "Built with C# and MySQL in Visual Studio.",
    ],
    githubLink: "https://github.com/ernie-cledera/Class-Scheduler-v1",
  },
  {
    id: 4,
    title: "Simple Calculator",
    description:
      "A basic interactive calculator application built with React and TypeScript, demonstrating fundamental UI and state management.",
    image: "/Calculator.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    role: "Frontend Developer",
    highlights: [
      "Clean, accessible calculator UI with keyboard support.",
      "Demonstrates core React state and component patterns.",
    ],
  },
  {
    id: 5,
    title: "JumpQuest: The Curse of Gold Begins",
    description:
      "A 2D pixel art platformer game developed as a project for the Computer Graphics Programming & Game Development course.",
    image: "/JumpQuest.jpg",
    technologies: ["Unity", "C#", "Pixel Art", "Visual Studio Code"],
    role: "Game Developer",
    highlights: [
      "2D pixel-art platformer with hand-drawn sprites.",
      "Built in Unity with C# — levels, collision, and enemy behavior.",
      "Completed for the Computer Graphics Programming & Game Development course.",
    ],
    externalLink:
      "https://github.com/ernie-cledera/jumpquest-download/releases/download/v1.0.0/JumpQuest.zip",
  },
  {
    id: 6,
    title: "Gyozaraaap Naga RMS",
    description:
      "A modern, real-time Restaurant Management & Point-of-Sale (POS) system designed to streamline operations, track financials, and automate inventory management.",
    image: "/GyozaraaapRMS.jpg",
    technologies: ["Flutter", "Dart", "Riverpod", "Supabase", "PostgreSQL"],
    role: "Full-Stack Developer",
    highlights: [
      "Real-time POS, order, and table management for the restaurant floor.",
      "Automated inventory tracking and financial reporting.",
      "Flutter + Riverpod frontend with Supabase / PostgreSQL backend.",
      "Deployed at gyozaraaap.cledera.dev.",
    ],
    externalLink: "https://gyozaraaap.cledera.dev",
  },
];

export const workstationData: WorkstationCategory[] = [
  {
    title: "Specifications",
    items: [
      { name: "Processor", value: "Ryzen 7 5700x" },
      { name: "Cooler", value: "IDCooling Zoomflow 360x" },
      { name: "Motherboard", value: "MSI B450 Gaming Pro Carbon AC" },
      { name: "Chassis", value: "Gamemax HypeBK" },
      { name: "Chassis Fan", value: "Jungle Leopard Interstellar V2" },
      { name: "Memory", value: "Kingston Fury DDR4 RAM 16x2 3600" },
      { name: "GPU", value: "MSI RTX 2070 Super Gaming X Trio" },
      { name: "Main Storage", value: "ADATA XPG SX8200 Pro 1TB" },
      { name: "Secondary Storage", value: "WD HDD Blue 1TB" },
      { name: "Secondary Storage", value: "Seagate Barracuda 1TB" },
      { name: "Power Supply", value: "Segotep GM850W Modular Gold" },
    ],
  },
  {
    title: "Peripherals",
    items: [
      { name: "Mouse", value: "Attack Shark R11 Ultra 8k" },
      { name: "Keyboard", value: "Yunzi AL68" },
      { name: "Webcam", value: "Razer Kiyo Pro" },
      { name: "Controller", value: "Gulikit KingKong 2 Pro" },
      { name: "Microphone", value: "Fifine AM8" },
      { name: "Headset", value: "Corsair HS80 MAX" },
      { name: "Earbuds", value: "Salnotes 7hz Zero" },
      { name: "TWS Earbuds", value: "Moondrop Space Travel" },
      { name: "Speakers", value: "Logitech Z333" },
      { name: "Audio Interface", value: "Behringer UMC 404HD" },
    ],
  },
  {
    title: "Displays",
    items: [
      { name: "Main Display", value: "Xiaomi G34WQi Ultrawide Monitor" },
      { name: "Top Display", value: "Xiaomi A24i" },
      { name: "Side Display", value: "Xiaomi A24i" },
      { name: "External Display", value: "Skyworth 24X1Q" },
      { name: "Wireless Display", value: "Poco Pad" },
    ],
  },
  {
    title: "Operating Systems",
    items: [
      { name: "Main OS", value: "W11 version 24H2" },
      { name: "Virtual Machine", value: "Win 11 Lite" },
      { name: "Virtual Machine", value: "macOS 11 Big Sur" },
    ],
  },
  {
    title: "Accessories",
    items: [
      { name: "Mousepad", value: "MD/Alpha Mousepad 400x900" },
      { name: "Lightbar", value: "Xiaomi Mijia Lightbar" },
      { name: "Smart Speaker", value: "Google Home Mini" },
      { name: "LED Strips", value: "Cob LED Strip Light" },
      { name: "Mic Boom Arm", value: "Thronmax S8 Twins" },
      { name: "GPU Mount", value: "PHANTEKS Vertical GPU Bracket" },
      { name: "Cable Sleeves", value: "Visioncable Gray & Black Extension" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { name: "Router", value: "TP - Link AX3000 Wi-Fi 6 Router" },
      { name: "Ethernet Cable", value: "Vention Cat8 SFTP 40Gbps" },
      { name: "Internet Connectivity", value: "PLDT 700 Mbps" },
      { name: "Back-up Internet Connectivity", value: "Globe 500 Mbps" },
    ],
  },
];

export const workstationImages = ["/Workstation 2.jpg"];
