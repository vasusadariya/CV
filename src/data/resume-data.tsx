import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { title } from "process";

export const RESUME_DATA = {
  name: "Vasu Sadariya",
  initials: "VS",
  location: "Sardar Vallabhbhai National Institute of Technology,Surat",
  locationLink: "https://maps.app.goo.gl/aZ6EGgXwbsDGN2Wh8",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail in crafting creative solutions with $Next...",
  summary:
    "As a Full Stack Engineer, I have successfully lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, Javascript, Next.js, Node.js, Prisma ORM and Postgresql. I have built various projects and i am opem to work immediately",
  avatarUrl: "/vasu.png",
  contact: {
    email: "sadariyavasu5@gmail.com",
    tel: "+916354544156",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vasusadariya",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vasu-sadariya-701630232/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Vasu__30705",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sardar Vallabhbhai National Institute of Technology,Surat",
      degree: "Btech in Electronics and Communication Engineering",
      start: "2023",
      end: "2027(Ongoing)",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Solidity",
    "Smart-Contract",
    "Hardhat",
    "React.js",
    "Node.js",
    "Prisma ORM",
    "Websockets",
    "Postgresql",
    "AWS",
    "Docker",
    "Kubernetes",
    "Cloudflare Workers and Pages",
  ],
  projects: [
    {
      title: "Open Source Contribution",
      techStack: [
        "Contribution",
        "Open-Source",
        "JavaScript",
        "First Contribution",
      ],
      description: "Solved the issue in Agora Blockchain Repo of the conditional re-rendring in JavaScript using React.js",
      logo: ConsultlyLogo,
      link: {
        label: "Agora-blockchain.com",
        href: "https://github.com/AOSSIE-Org/Agora-Blockchain/pull/94",
      },
    },
    {
      title: "Helper-Buddy",
      techStack: [
        "Main-Project",
        "TypeScript",
        "Next.js",
        "Next-auth",
        "PostgreSQL",
        "Prima-ORM",
        "Tailwind-CSS",
        "Webhook",
        "Razorpay",
        "Recharts",
      ],
      description: "HelperBuddy is a role-based service platform that connects users with service partners, featuring an admin dashboard with rich analytics, secure authentication, and a sleek, user-friendly UI.",
      logo: ConsultlyLogo,
      link: {
        label: "HelperBuddy.com",
        href: "https://helppperbuuuddy.vercel.app",
      },
    },
    {
      title: "Alumni-Website for NIT Surat",
      techStack: [
        "main-project",
        "TypeScript",
        "Next.js",
        "Next-Auth",
        "PostgreSQL",
        "Prisma ORM",
        "Tailwind-CSS",
      ],
      description: "Alumni website for NIT Surat where they can register and contribute to the college in terms of financial aid",
      logo: ConsultlyLogo,
      link: {
        label: "Alumni-svnit.com",
        href: "https://alumni-mindbend-git-vasu-vasusadariyas-projects.vercel.app",
      },
    },
    {
      title: "Student Chapter Website - NIT Surat",
      techStack: [
        "main-project",
        "TypeScript",
        "Next.js",
        "Next-Auth",
        "PostgreSQL",
        "Prisma ORM",
        "Tailwind-CSS",
      ],
      description: "Cutting Edge Visionary student chapter website for NIT Surat where they can signup and use the resources for various causes and initiatives and there is a dedicated section HORIZON for Magazine",
      logo: ConsultlyLogo,
      link: {
        label: "cev.com",
        href: "https://cev-website.vercel.app",
      },
    },
    {title: "Online Election",
      techStack: [
        "Hackthon-Project",
        "TypeScript",
        "Next.js",
        "Firebase",
        "MongoDB",
        "Tailwind-CSS",
        "Solidity",
        "Smart-Contract",
        "IPFS Storage",
      ],
      description: "An online voting system built for a hackathon with role-based authentication, using Firebase and MongoDB for auth and storage, and integrated with IPFS for decentralized document storage and retrieval via blockchain-based hashes.",
      logo: ConsultlyLogo,
      link: {
        label: "Dotslash.com",
        href: "https://github.com/vasusadariya/dot-slash-final",
      },
    },
    {
      title: "Real-Time-Chat App",
      techStack: [
        "Main-Project",
        "TypeScript",
        "Next.js",
        "Socket.io",
        "JWT",
        "PostgreSQL",
        "Prima-ORM",
        "Tailwind-CSS",
        "Express.js",
      ],
      description: "A platform to have chat with you loveones and strangers by creating room chat",
      logo: ConsultlyLogo,
      link: {
        label: "timepass.com",
        href: "https://github.com/vasusadariya/real-time-chat",
      },
    },
    {
      title: "MindMesh",
      techStack: [
        "Project", 
        "TypeScript", 
        "React.js", 
        "JWT",
        "PostgreSQL",
        "Prima-ORM",
        "Tailwind-CSS",
        "Express.js",
        "Cloudflare-Workers/Pages",
      ],
      description:
        "A full-stack blog posting platform where user come and post their mind's mesh",
      logo: MonitoLogo,
      link: {
        label: "mindmesh.com",
        href: "https://github.com/vasusadariya/MindMesh",
      },
    },
    {
      title: "Price-Converter",
      techStack: [
        "Web3-Project", 
        "RemixEthereum-IDE", 
        "Solidity",
        "Blockchain",
      ],
      description:
        "A tool to convert the price or any cryptocurrency.Convert any currency to curyptocurrency",
      logo: JarockiMeLogo,
      link: {
        label: "Price-converter.com",
        href: "https://github.com/vasusadariya/price-converter-smart-contract",
      },
    },
    {
      title: "Decentralized-Healthcare",
      techStack: [
        "Web3-Project", 
        "RemixEthereum-IDE", 
        "Solidity",
        "Blockchain",
        "ethers.js",
        "Hardhat",
        "smart-contract",
      ],
      description:
        "A platform to provide healthcare services to store the patient data in a decentralized way",
      logo: JarockiMeLogo,
      link: {
        label: "Decentralized-Healthcare.com",  
        href: "https://github.com/vasusadariya/Healthcare",
      },
    },
    {
      title: "To-Do App",
      techStack: [
        "Project", 
        "Javascript", 
        "React.js",
        "Tailwind-CSS",
        "Express.js",
        "MongoDB",
        "Cloudflare-Workers/Pages",
      ],
      description:
        "Minimalist To-do, habit trackers, planners and list of all the things to do",
      logo: Minimal,
      link: {
        label: "todo-app.com",
        href: "https://github.com/vasusadariya/To-do-app",
      },
    },
    {
      title: "4 wheel Omni-Drive Bot",
      techStack: [
        "Robotics-Project", 
        "HTML", 
        "CSS",
        "JavaScript",
        "WebSocket",
        "Arduino-IDE",
        "C-code-PS4",
        "ESP32-microcontroller",
        "PS4",
      ],
      description:
        "Developed PS4 and web-GUI controlled 4-wheel Omni drive robot using ESP32",
      logo: BarepapersLogo,
      link: {
        label: "omnidrive.com",
        href: "https://github.com/vasusadariya/Omni-drive",
      },
    },
    {
      title: "Memories",
      techStack: [
        "Side-Hustle", 
        "TypeScript", 
        "Next.js"
      ],
      description: "Memories dump platflorm for my siblings.",
      logo: YearProgressLogo,
      link: {
        label: "memories.com",
        href: "#",
      },
    },
    {
      title: "Portfolio",
      techStack: [
        "TypeScript",
        "Next.js",
      ],
      description:
        "Platform to portrait my love and passion for the work i do",
      logo: ParabolLogo,
      link: {
        label: "portfolio.com",
        href: "#",
      },
    },
  ],
} as const;