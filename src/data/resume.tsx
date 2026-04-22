import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Joshua Ho",
  initials: "JH",
  url: "https://linkedin.com/in/joshua-holb",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/London",
  description:
    "Mechanical Engineering student at Imperial College London. Building deployable deep-tech systems across robotics, power systems, and climate tech.",
  summary:
    "Penultimate-year MEng Mechanical Engineering student at Imperial College London building across robotics, electronics, power systems, and climate tech. I interned at Imperial's [Electrochemical Engineering Group](https://www.linkedin.com/company/ese-imperial) working on lithium-ion battery research, conducted climate finance research at the [Centre for Climate Finance & Investment](https://www.imperial.ac.uk/business-school/faculty-research/research-centres/centre-climate-finance-investment/), and completed engineering internships at the [Hong Kong Productivity Council](https://www.hkpc.org/en). Currently leading the power unit subsystem for a Mars Rover Swarm Robot and serving as Secretary of [Imperial Entrepreneurs](https://www.imperialentrepreneurs.com). I am interested in early-stage startup environments and deep-tech.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "C", icon: Csharp },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "joshuahlb12@gmail.com",
    tel: "+852 9846 8610",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LKBong",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/joshua-holb",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Centre for Climate Finance & Investment",
      href: "https://www.imperial.ac.uk/centre-climate-finance-investment",
      badges: [],
      location: "London, UK",
      title: "Researcher",
      logoUrl: "/ccfi.png",
      start: "August 2025",
      end: "September 2025",
      description:
        "Authored a 42-page research study based on interviews with C-suite executives and analysis of 30+ academic and institutional sources on technology developments in the $4B+ voluntary carbon market; presented findings at the Laidlaw Scholars Annual Conference. Evaluated blockchain tokenization protocols, digital MRV systems, and AI applications for carbon credit verification while analyzing adoption barriers including energy consumption, governance challenges, and market fragmentation risks. Developed policy recommendations for market standardisation, addressing voluntary-compliance market convergence through integrity frameworks and technology-driven quality differentiation.",
    },
    {
      company: "Electrochemical Engineering Group, Imperial College London",
      href: "https://www.imperial.ac.uk",
      badges: [],
      location: "London, UK",
      title: "Battery Engineering Intern",
      logoUrl: "/imperial.png",
      start: "June 2025",
      end: "July 2025",
      description:
        "Optimised lithium-ion battery reference potential test runtime by refining modelling relaxation times, increasing experimental throughput by 80%. Performed micro-computed tomography on 20+ lithium-ion cell configurations to evaluate internal structural behaviour and support design decisions. Extended dynamic EIS methods on cyclers without native EIS support by developing a Python-based data processing pipeline and benchmarking results against BioLogic instrumentation for plating detection.",
    },
    {
      company: "Hong Kong Productivity Council (HKPC)",
      href: "https://www.hkpc.org",
      badges: [],
      location: "Hong Kong",
      title: "Mechanical Engineering Intern",
      logoUrl: "/hkpc.png",
      start: "July 2024",
      end: "August 2024",
      description:
        "Conducted CFD analysis using Ansys Fluent for a biscuit manufacturing line, optimising airflow efficiency. Designed a pressure-assisted thawing system for Tyson Foods, improving defrosting time by up to 280% and eliminating dead spots to ensure uniform temperature distribution. Supported tender evaluation and technical due diligence for a large-scale automated central kitchen project designed to produce up to 10 million meals annually for community distribution in Hong Kong.",
    },
  ],
  education: [
    {
      school: "Imperial College London",
      href: "https://www.imperial.ac.uk",
      degree:
        "MEng Mechanical Engineering — Predicted First Class Honours | 2x Merit-based Scholarship (HKSES & Laidlaw Foundation)",
      logoUrl: "/imperial.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "HKCCCU Logos Academy",
      href: "https://www.logosacademy.edu.hk",
      degree: "International Baccalaureate Diploma (43/45)",
      logoUrl: "/logos.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Mars Rover Swarm Robot — Power Unit",
      href: "",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "Engineered a compact BLDC-driven power unit with four-quadrant control, integrating PCB and veroboard electronics for -40°C operation, bidirectional actuation, and IP68-rated enclosure. Optimized component manufacturability by applying tolerance stack-ups, material selection, and machining constraints. Led a subsystem team of 4, defining interface specifications and managing client-facing engineering reviews.",
      technologies: ["BLDC Motor Control", "PCB Design", "KiCad", "Embedded C", "IP68"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Battery Pack Design — Imperial Racing Green",
      href: "",
      dates: "Oct 2023 - May 2025",
      active: false,
      description:
        "Designed and integrated a 2P5S Li-ion battery pack contributing to 434.4 km/kWh efficiency and 2nd place in Carbon Footprint Reduction at Shell Eco-Marathon 2025. Engineered and fabricated a modular transport table work surface for team vehicle maintenance.",
      technologies: ["Li-ion Battery Design", "SOLIDWORKS", "Shell Eco-Marathon 2025"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Motorized Rope Bridge Tensioner",
      href: "",
      dates: "Oct 2024 - May 2025",
      active: false,
      description:
        "Partnered with New Scientist and the LEGO Group to design a user-centric, ergonomic, and sustainable motorized rope bridge. Led transmission system design and selection, covering power source sizing, material specification, and FMEA including shaft failure assessment and mitigation strategies.",
      technologies: ["SOLIDWORKS", "FMEA", "Transmission Design", "Power Systems"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Migraine Relief Headband",
      href: "",
      dates: "Jan 2025 - Feb 2025",
      active: false,
      description:
        "Developed conceptual design for an acupressure-based migraine relief headband for biomedical sciences researchers at Brunel University, as external engineering design consultants. Led power supply system design, ensuring reliable and user-safe operation.",
      technologies: ["Product Design", "Biomedical Engineering", "Power Systems"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "NeuronML",
      href: "",
      dates: "Jan 2025",
      active: false,
      description:
        "Built a decentralised EEG data acquisition and biomarker accessibility platform powered by federated learning in 36 hours at the Entrepreneurs First London Neurotech Hackathon. Awarded 1st runner-up.",
      technologies: ["Federated Learning", "EEG", "Python", "Biomedical Signal Processing"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Self-Navigating Vehicle",
      href: "",
      dates: "Jan 2023 - Mar 2023",
      active: false,
      description:
        "Assembled a four-wheel autonomous navigation platform using RGB-D sensors, LiDAR, and SLAM algorithms implemented in ROS at HK Polytechnic University. Tuned sensor fusion and navigation parameters to improve localization accuracy and stability for indoor deployment in a simulated restaurant environment.",
      technologies: ["ROS", "LiDAR", "SLAM", "RGB-D Sensing", "Python"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "EF London Neurotech Hackathon",
      dates: "January 2025",
      location: "London, UK",
      description:
        "Built NeuronML — a decentralised EEG data acquisition and biomarker accessibility platform powered by federated learning in 36 hours.",
      win: "1st Runner-up",
      image: "",
      links: [],
    },
    {
      title: "Secretary — Imperial Entrepreneurs",
      dates: "Jul 2025 - Present",
      location: "London, UK",
      description:
        "Scaled London's hardware and deep tech ecosystem by delivering 46 events in 5 months, partnering with organisations including Google, Entrepreneur First, and EWOR, engaging 1000+ members and supporting the IdeaForge incubator programme.",
      image: "",
      links: [],
    },
    {
      title: "Secretary — HKSES Student Association",
      dates: "Sep 2024 - Present",
      location: "Hong Kong",
      description:
        "Executed 6 firm visits and career webinars with firms including HSBC and HKEX, driving engagement across a 600+ scholar community.",
      image: "",
      links: [],
    },
    {
      title: "Vice President — Imperial e.quinox",
      dates: "Oct 2024 - Jun 2025",
      location: "London, UK / Rwanda",
      description:
        "Led a 4-member team to design and deploy a rainwater harvesting system in rural Rwanda, translating insights from 300+ community surveys into system requirements in collaboration with regional governments.",
      image: "",
      links: [],
    },
  ],
} as const;
