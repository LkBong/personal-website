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
    "Penultimate-year MEng Mechanical Engineering student at Imperial College London building across robotics, electronics, power systems, and climate tech. I interned at Imperial's [Electrochemical Science and Engineering Group](https://www.linkedin.com/company/ese-imperial) working on lithium-ion battery research, conducted climate finance research at the [Centre for Climate Finance & Investment](https://www.imperial.ac.uk/business-school/faculty-research/research-centres/centre-climate-finance-investment/), and completed engineering internships at the [Hong Kong Productivity Council](https://www.hkpc.org/en). Currently leading the power unit subsystem for a Mars Rover Swarm Robot and serving as Secretary of [Imperial Entrepreneurs](https://www.imperialentrepreneurs.com)",
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
    { href: "https://linkedin.com/in/joshua-holb", icon: Icons.linkedin, label: "LinkedIn" },
    { href: "https://x.com", icon: Icons.x, label: "X" },
    { href: "https://youtube.com", icon: Icons.youtube, label: "YouTube" },
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
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
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
      logoUrl: "/ccfi.jpg",
      start: "August 2025",
      end: "September 2025",
      description:
        "Authored research study based on interviews with C-suite executives and analysis of 30+ academic and institutional sources on technology developments in the voluntary carbon market; Findings were presented at at the Laidlaw Scholars Annual Conference. Evaluated blockchain tokenization protocols, digital MRV systems, and AI applications for carbon credit verification while analyzing adoption barriers including energy consumption, governance challenges, and market fragmentation risks. Developed policy recommendations for market standardisation, addressing voluntary-compliance market convergence through integrity frameworks and technology-driven quality differentiation.",
    },
    {
      company: "Electrochemical Science and Engineering Group, Imperial College London",
      href: "https://www.imperial.ac.uk",
      badges: [],
      location: "London, UK",
      title: "Battery Engineering Intern",
      logoUrl: "/ese.jpg",
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
        "Conducted CFD analysis using Ansys Fluent for a biscuit manufacturing line, optimising airflow efficiency; designed a pressure-assisted thawing system for Tyson Foods, improving defrosting time % and eliminating dead spots to ensure uniform temperature distribution. Supported tender evaluation and technical due diligence for the Food Angel automated central kitchen project designed to produce up to 10 million meals annually for community distribution in Hong Kong.",
    },
  ],
  education: [
    {
      school: "Imperial College London",
      href: "https://www.imperial.ac.uk",
      degree:
        "MEng Mechanical Engineering - Predicted First Class Honours | 2x Merit-based Scholarship (HKSES & Laidlaw Foundation)",
      logoUrl: "/imperial.svg",
      start: "2023",
      end: "2027",
    },
    {
      school: "HKCCCU Logos Academy",
      href: "https://logos.edu.hk/",
      degree: "International Baccalaureate Diploma (43/45)",
      logoUrl: "/ib.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Mars Rover Swarm Robot - Power Unit",
      href: "",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "Engineered a compact BLDC-driven power unit with four-quadrant control, integrating PCB and veroboard electronics for -40°C operation, bidirectional actuation, and IP68-rated enclosure.",
      technologies: ["BLDC Motor Control", "PCB Design", "KiCad", "Embedded C", "IP68"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Battery Pack Design - Imperial Racing Green",
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
        "Partnered with New Scientist and the LEGO Group to design a user-centric, ergonomic, and sustainable motorized rope bridge model (scaled down proportionally)",
      technologies: ["SOLIDWORKS", "FMEA", "Transmission Design", "Power Systems"],
      links: [],
      image: "/projects/ropebridge.png",
      video: "",
    },
    {
      title: "Nutribetics",
      href: "",
      dates: "2025",
      active: false,
      description:
        "AI-powered mobile app for Type 2 Diabetes dietary management, built at the Royal Society of Medicine 2-day digital healthcare hackathon. Features a multi-agent pipeline -- nutrition advisor, recipe selector, ingredient extractor, and a GPT-4o + Selenium GUI agent that autonomously navigates Sainsbury's to fill your shopping cart.",
      technologies: ["GPT-4o", "Selenium", "Python", "Flask", "Multi-Agent Systems", "Healthcare AI"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/VK2fOgdYDKo",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "NeuronML",
      href: "",
      dates: "Jan 2025",
      active: false,
      description:
        "Federated learning powered EEG data acquisition and biomarker accessibility platform built at the Entrepreneurs First London Neurotech Hackathon in London, UK - 1st Runner-up.",
      technologies: ["Federated Learning", "EEG", "Python", "Biomedical Signal Processing"],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/yteoJ_pJuIk",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "LiDAR for SLAM on 4WD",
      href: "https://docs.google.com/presentation/d/1YvfSqdTOKUW3f16jhvHcaAyw85-_XcRq/edit?usp=sharing&ouid=116791244327760298869&rtpof=true&sd=true",
      dates: "Jan 2023 - Mar 2023",
      active: false,
      description:
        "Assembly and tuning of TurtleBot with LiDAR sensors for simultaneous localization and mapping (SLAM) at HK Polytechnic University.",
      technologies: ["ROS", "LiDAR", "SLAM", "RGB-D Sensing", "Python"],
      links: [
        {
          type: "Slides",
          href: "https://docs.google.com/presentation/d/1YvfSqdTOKUW3f16jhvHcaAyw85-_XcRq/edit?usp=sharing&ouid=116791244327760298869&rtpof=true&sd=true",
          icon: <Icons.googleSlides className="size-3" />,
        }
      ], 
      image: "/projects/lidar.png",
      video: "",
    },
  ],
  /*
  hackathons: [
    {
      title: "EF London Neurotech Hackathon",
      dates: "January 2025",
      location: "London, UK",
      description:
        "Built NeuronML - a decentralised EEG data acquisition and biomarker accessibility platform powered by federated learning in 36 hours.",
      win: "1st Runner-up",
      image: "",
      links: [
        {
          title: "Demo on YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/yteoJ_pJuIk",
        },
      ],
    },
  ],
  */
  otherResponsibilities: [
    {
      company: "Imperial Entrepreneurs",
      href: "https://www.linkedin.com/company/imperial-entrepreneurs/",
      badges: [],
      location: "London, UK",
      title: "Partnerships Lead (and ex-Secretary)",
      logoUrl: "/orgs/icentre.png",
      start: "July 2025",
      end: "Present",
      description:
        "Supporting the student entrepreneurship ecosystem around Imperial through incubator, events, hackathons, with food as secondary incentives!",
    },
    {
      company: "HKSES Student Association",
      href: "https://www.linkedin.com/company/hong-kong-scholarship-for-excellence-scheme-scholars-association/",
      badges: [],
      location: "Hong Kong",
      title: "Secretary",
      logoUrl: "/orgs/sessa.png",
      start: "September 2024",
      end: "Present",
      description:
        "Executed 6 firm visits and career webinars with firms including HSBC and HKEX, driving engagement across a 600+ scholar community.",
    },
    {
      company: "Imperial e.quinox",
      href: "",
      badges: [],
      location: "London, UK / Rwanda",
      title: "Vice President",
      logoUrl: "/orgs/equinox.png",
      start: "October 2024",
      end: "June 2025",
      description:
        "Led a 4-member team to design and deploy a rainwater harvesting system in rural Rwanda, translating insights from 300+ community surveys into system requirements in collaboration with regional governments.",
    },
  ],
} as const;
