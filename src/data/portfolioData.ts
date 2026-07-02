export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  responsibilities: string[];
  logo?: string; // Added optional logo property
}

export interface Education {
  id: string;
  title: string;
  location: string;
  subtitle: string;
  date: string;
  logo?: string; // Path to logo image
}

export interface Affiliation {
  id: string;
  name: string;
  status: string;
  date: string;
  logo?: string; // Optional logo/image path
}

export interface PortfolioLink {
  id: string;
  name: string;
  icon: string; // Emoji or Lucide icon name
  url: string;
  className?: string; // For specific styling if needed
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
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
  profileImage: "/ernie-joseph-cledera.jpg", // Replace with your profile image path, e/g., "/profile.jpg"
  introduction: `My name is <span class="highlight">Ernie Joseph Cledera</span>. I’m an Information Technology professional with a Computer Engineering and Virtual Assistance background, specializing in workflow automation, AI integration, and digital operations. With over 7 years of experience, I help businesses streamline processes, improve productivity, and implement technology-driven solutions that deliver measurable results.`,
  birthDate: '1998-04-09',
  email: "ernie@cledera.dev",
  phone: "+63 929 652 9698",
  location: "Philippines",
};

export const experienceData: Experience[] = [
  {
    id: "avatone",
    title: "Avatone Technologies Inc.",
    subtitle: "Community Manager",
    date: "2026 - Present",
    responsibilities: [
      "Manages the user community and social media presence for Avatone.",
      "Performs QA testing for the application to ensure quality and functionality.",
      "Provides virtual assistance and administrative support.",
    ],
    logo: "/avatone_technologies_logo.jpg",
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
    logo: "/mr-rooter-logo.png", // Example path for Mr. Rooter logo
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
    logo: "/concentrix-logo.png", // Example path for Concentrix logo
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
    logo: "/bell-canada-logo.png", // Example path for Bell Canada logo
  },
  {
    id: "ateneo-intern",
    title: "Ateneo de Naga University",
    subtitle: "Engineering Intern",
    date: "2016",
    responsibilities: [
      "Completed a 3-month Engineering Internship at Ateneo De Naga University, providing hardware and technical support throughout the university and conducted network design and troubleshooting, install different types of operating systems and attended seminars regarding cybersecurity.",
    ],
    logo: "/ateneo-logo.png", // Using existing Ateneo logo
  },
];

export const interestsData: string[] = [
  "🎮 Gaming",
  "🧰 PC Building / Modding",
  "🧠 Coding / Automation Projects",
  "📚 Reading",
  "📝 Journaling",
  "🎬 Watching Movies",
  "✈️ Traveling",
  "🎵 Playing Instruments",
  "🐟 Aquascaping",
];

export const softSkillsData: string[] = [
  "🧑‍🤝‍🧑 Leadership",
  "⚡ Multitasking",
  "💪 Work Ethic",
  "🎯 Decision-making",
  "🔍 Attention to detail",
  "🧩 Critical thinking",
  "🤝 Conflict resolution",
  "🛠 Problem-solving",
  "⏳ Time management",
  "🌱 Adaptability",
  "🗣 Communication",
  "🤝 Collaboration",
  "🎨 Creativity",
];

export const technicalSkillsData: string[] = [
  "💻 Programming (C++, Java, C#, Kotlin, Python)",
  "📱 Software & App Development",
  "🗄 Database Management",
  "🌐 Networking (Cisco)",
  "🔒 Cybersecurity",
  "🎨 UI/UX Design",
  "🌍 Web Development (HTML, CSS, JS)",
  "🤖 Artificial Intelligence",
  "☁️ Cloud Computing",
  "📊 Data Analysis",
  "📋 Project Management",
];

export const educationData: Education[] = [
  {
    id: "sti-college",
    title: "STI College Naga",
    location: "Naga City, Philippines",
    subtitle: "Bachelor of Science in Information Technology",
    date: "2022 - 2026",
    logo: "/sti-logo.png", // Replace with STI logo path, e.g., "/sti-logo.png"
  },
  {
    id: "ateneo-university",
    title: "Ateneo De Naga University",
    location: "Naga City, Philippines",
    subtitle: "Bachelor of Engineering Technology Major in Computer Engineering Technology",
    date: "2014 - 2018",
    logo: "/ateneo-logo.png", // Replace with Ateneo logo path, e.g., "/ateneo-logo.png"
  },
];

const unsortedAffiliationsData: Affiliation[] = [
  {
    id: "apo",
    name: "Alpha Phi Omega",
    status: "Member - Beta Kappa Chapter 18A",
    date: "2018",
    logo: "/apo-logo-placeholder.png"
  },
  {
    id: "icep",
    name: "Institute of Computer Engineers of the Philippines",
    status: "Student Member",
    date: "2015",
    logo: "/icpep-logo.png"
  },
  {
    id: "afs",
    name: "Ateneo Film Society",
    status: "Member - Batch 0",
    date: "2016",
    logo: "/afs-logo-placeholder.png"
  },
  {
    id: "bgc",
    name: "Bicolano Gaming Community",
    status: "Founder",
    date: "2020",
    logo: "/BGCOfficial Logo.png"
  },
];

export const affiliationsData: Affiliation[] = unsortedAffiliationsData.sort((a, b) => a.name.localeCompare(b.name));

export const softwareUsedData: { icon: string; name: string; className?: string }[] = [
  { icon: "VS", name: "Visual Studio", className: "bg-purple-700 text-white" },
  { icon: "VSC", name: "Visual Studio Code", className: "bg-blue-500 text-white" },
  { icon: "GPT", name: "ChatGPT", className: "bg-green-500 text-white" },
  { icon: "GH", name: "Github", className: "bg-gray-800 text-white" },
  { icon: "U", name: "Unity", className: "bg-gray-900 text-white" },
  { icon: "HS", name: "HubSpot", className: "bg-orange-500 text-white" },
  { icon: "ZD", name: "Zendesk", className: "bg-green-600 text-white" },
  { icon: "M365", name: "Microsoft 365", className: "bg-red-600 text-white" },
  { icon: "GS", name: "Google Suite", className: "bg-blue-600 text-white" },
  { icon: "GW", name: "Google Workspace", className: "bg-yellow-600 text-white" },
  { icon: "ST", name: "ServiceTitan", className: "bg-blue-800 text-white" },
  { icon: "NB", name: "Netbeans", className: "bg-blue-700 text-white" },
  { icon: "IDLE", name: "IDLE", className: "bg-orange-400 text-white" },
  { icon: "Z", name: "Zoom", className: "bg-blue-400 text-white" },
  { icon: "ZP", name: "Zapier", className: "bg-orange-700 text-white" },
  { icon: "A", name: "Asana", className: "bg-pink-500 text-white" },
  { icon: "M", name: "Monday", className: "bg-blue-500 text-white" },
  { icon: "S", name: "Slack", className: "bg-purple-500 text-white" },
  { icon: "O", name: "Outlook", className: "bg-blue-700 text-white" },
  { icon: "GHL", name: "GoHighLevel", className: "bg-red-700 text-white" },
  { icon: "SAP", name: "SAP", className: "bg-blue-800 text-white" },
  { icon: "C", name: "Cisco", className: "bg-blue-900 text-white" },
  { icon: "PT", name: "Packet Tracer", className: "bg-teal-600 text-white" },
  { icon: "PS", name: "Photoshop", className: "bg-blue-800 text-white" },
  { icon: "CNV", name: "Canva", className: "bg-purple-600 text-white" },
  { icon: "PR", name: "Premiere Pro", className: "bg-purple-900 text-white" },
  { icon: "AI", name: "Illustrator", className: "bg-orange-500 text-white" },
  { icon: "DW", name: "Dreamweaver", className: "bg-blue-700 text-white" },
  { icon: "CC", name: "CapCut", className: "bg-blue-500 text-white" },
  { icon: "NT", name: "Notion", className: "bg-gray-700 text-white" },
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
    description: "A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills and projects.",
    image: "/my-portfolio-website.jpg", // Updated path
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/ernie-cledera/ernie-cledera.github.io",
    liveLink: "/projects/portfolio-website", // Updated to new route
  },
  {
    id: 2,
    title: "E-CCC: A web-based enrollment and academic records management system for Calabanga Community College",
    description: "A comprehensive school management system designed for Calabanga Community College, handling student records, course management, and administrative tasks.",
    image: "/calabanga-sms.png", // Updated path
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Laravel", "Filament"],
    githubLink: "https://github.com/ernie-cledera/E-CCC", // Updated GitHub link
    liveLink: "/projects/e-ccc", // Updated to new route /projects/e-ccc
  },
  {
    id: 3,
    title: "Class Scheduler",
    description: "A web application to help the school manage and visualize class schedules and to check if there is a conflict in the schedule.",
    image: "/class-scheduler.png", // Updated path
    technologies: ["C#", "MySQL", "Visual Studio"],
    githubLink: "https://github.com/ernie-cledera/Class-Scheduler-v1",
    liveLink: "/projects/class-scheduler", // Updated to new route
  },
  {
    id: 4,
    title: "Simple Calculator",
    description: "A basic interactive calculator application built with React and TypeScript, demonstrating fundamental UI and state management.",
    image: "/Calculator.jpg", // AI-generated photo
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "/projects/simple-calculator", // Keep the internal link to the details page
  },
  {
    id: 5,
    title: "JumpQuest: The Curse of Gold Begins",
    description: "A 2D pixel art platformer game developed as a project for the Computer Graphics Programming & Game Development course.",
    image: "/JumpQuest.jpg", // Corrected path to root of public folder
    technologies: ["Unity", "C#", "Pixel Art", "Visual Studio Code"],
    liveLink: "/projects/jumpquest",
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
      { name: "Headset", value: "Corsair HS80 MAX" }, // Updated here
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
      { name: "Virtual Machine", value: "macOS 11 Big Sur" }, // Added new item
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
    title: "Connectivity", // New category added
    items: [
      { name: "Router", value: "TP - Link AX3000 Wi-Fi 6 Router" },
      { name: "Ethernet Cable", value: "Vention Cat8 SFTP 40Gbps" },
      { name: "Internet Connectivity", value: "PLDT 700 Mbps" },
      { name: "Back-up Internet Connectivity", value: "Globe 500 Mbps" },
    ],
  },
];

export const diplomaData = {
  title: "Diploma",
  subtitle: "Animation and Graphic Design",
  location: "Delhi, India",
  date: "2017-18",
};

export const graduationData = {
  title: "Graduation",
  subtitle: "Bachelor of fine Arts",
  location: "IGNOU Delhi, India",
  date: "2017-21",
};