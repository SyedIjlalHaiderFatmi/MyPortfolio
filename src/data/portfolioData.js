// ============================================================
// portfolioData.js — Centralized configuration for Syed Ijlal Haider Fatmi's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Syed Ijlal Haider Fatmi",
  firstName: "Syed Ijlal",
  brandName: "Syed Ijlal",
  title: "Cyber Security Enthusiast & Ethical Hacker",
  location: "Muzaffarabad, Azad Kashmir, Pakistan",
  phone: "+92 349-6339564",
  emails: {
    primary: "syedijlalhaiderfatmi@gmail.com",
    secondary: "syedijlalhaiderfatmi@gmail.com",
  },
  summary:
    "Passionate 3rd-year Computer Science student at University of Azad Jammu and Kashmir (UAJK) with strong foundations in Python, Cyber Security, Ethical Hacking, Penetration Testing, and Computer Networking. Proven leadership experience as Strategic and Event Manager for CSSC-UAJK.",
  resumeUrl: "/Syed_Ijlal_Haider_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/SyedIjlalHaiderFatmi",
  linkedin: "https://www.linkedin.com/in/syed-ijlal-haider-fatmi-453096346",
  instagram: "https://instagram.com/syedijlalhaiderfatmi05",
};

export const heroContent = {
  greeting: "Hi, I'm Syed Ijlal Haider",
  titleHighlight: "Cyber Security Enthusiast & Ethical Hacker",
  subtitle:
    "I analyze network vulnerabilities, write custom Python security tools, and perform penetration testing to safeguard digital infrastructure.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:syedijlalhaiderfatmi@gmail.com?subject=Inquiry – Cyber Security Portfolio&body=Hello Syed Ijlal,%0D%0A%0D%0AI came across your portfolio and would like to discuss a security opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Syed_Ijlal_Haider_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Syed Ijlal Haider Fatmi</span>, a 3rd-year Computer Science student (CGPA 3.7) at University of Azad Jammu and Kashmir (UAJK). Dedicated to ethical hacking, network analysis, Python tool automation, and proactive security research.`,
  techStack: ["Cyber Security", "Python", "Computer Networks"],
};

export const skillsContent = {
  badge: "Security Methodology",
  heading: "Here's how I assess and secure digital infrastructure",
  description:
    "I follow a structured, rigorous cybersecurity workflow to identify vulnerabilities, analyze risks, and implement robust security controls.",
  cards: [
    {
      number: "01",
      title: "Reconnaissance",
      text: "Gathering target intelligence, scanning network interfaces, and identifying active services, open ports, and potential attack vectors.",
    },
    {
      number: "02",
      title: "Vulnerability Analysis",
      text: "Evaluating security posture using Burp Suite, Nmap, and custom Python scripts to discover misconfigurations and security flaws.",
    },
    {
      number: "03",
      title: "Exploitation & Testing",
      text: "Performing controlled penetration testing and proof-of-concept exploits to validate security vulnerabilities safely.",
    },
    {
      number: "04",
      title: "Remediation & Defense",
      text: "Formulating detailed mitigation strategies, patching security loopholes, configuring firewalls, and documenting security audits.",
    },
  ],
  endText: "Secured & Audited!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Cyber Security & Hacking",
      skills: [
        { name: "Ethical Hacking", level: 92 },
        { name: "Penetration Testing", level: 88 },
        { name: "Kali Linux & Linux Systems", level: 90 },
        { name: "Burp Suite & Web Security", level: 86 },
        { name: "Vulnerability Assessment", level: 85 }
      ]
    },
    {
      title: "Programming & Automation",
      skills: [
        { name: "Python Scripting", level: 92 },
        { name: "C++ Programming", level: 85 },
        { name: "Machine Learning (Security)", level: 78 },
        { name: "Log Analysis & Scripting", level: 88 }
      ]
    },
    {
      title: "Networking & Security Operations",
      skills: [
        { name: "Computer Networks & Protocols", level: 90 },
        { name: "Packet Inspection & Wireshark", level: 88 },
        { name: "Firewalls & Routing", level: 84 },
        { name: "Network Management", level: 85 }
      ]
    },
    {
      title: "Security Tools & Environment",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Nmap & Network Scanners", level: 88 },
        { name: "Socket Programming", level: 85 },
        { name: "VS Code & Terminal", level: 95 }
      ]
    },
    {
      title: "Computer Science Foundations",
      skills: [
        { name: "Data Structures & Algorithms", level: 86 },
        { name: "Object Oriented Programming (OOP)", level: 88 },
        { name: "Operating Systems (Linux/Unix)", level: 90 },
        { name: "System Auditing", level: 84 }
      ]
    }
  ]
};

// Content Creation / Research Demos Data
export const contentCreation = {
  badge: "Cyber Demos & Research",
  heading: "Security Demonstrations & Technical Labs",
  description: "Beyond theoretical concepts, I build live security proofs-of-concept, demonstrate packet sniffing, and share insights on ethical hacking.",
  categories: [
    {
      title: "Packet Sniffing Demos",
      description: "Demonstrating real-time packet capture, socket parsing, and protocol disassembly using custom Python tools.",
      stats: "Network Audits",
      icon: "🌐"
    },
    {
      title: "Keystroke Logging Labs",
      description: "Analyzing local input hook mechanisms to educate and demonstrate risk mitigation against spyware.",
      stats: "Security Labs",
      icon: "⌨️"
    },
    {
      title: "AI Fraud Anomaly Scans",
      description: "Testing machine learning classifiers against simulated transaction data to highlight fraud patterns.",
      stats: "ML Security",
      icon: "🛡️"
    },
    {
      title: "Security Workshops & Engagement",
      description: "Conducting interactive campus workshops and sharing cybersecurity fundamentals with student communities.",
      stats: "CSSC UAJK",
      icon: "🎓"
    }
  ]
};

// Leadership Data
export const leadershipList = [
  {
    title: "Strategic and Event Manager – Cybersecurity Students Club (CSSC)",
    description: "Leading event strategies, organizing cybersecurity awareness workshops, and managing student technical events at University of Azad Jammu and Kashmir (UAJK).",
    role: "Strategic & Event Manager",
    badge: "Leadership"
  },
  {
    title: "Cybersecurity Internee – Arch Technologies",
    description: "Completed an intensive 8-week Cybersecurity Internship & Training Program focusing on penetration testing, security auditing, threat analysis, and network security.",
    role: "Cybersecurity Internee",
    badge: "Internship"
  },
  {
    title: "Research and Strategy Advisor – The Eagnibals",
    description: "Advising on technical strategy, research methodologies, and innovative security initiatives within student-led project teams.",
    role: "Research & Strategy Advisor",
    badge: "Advisory"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "Arch Technologies, Islamabad",
    role: "Cybersecurity Internee",
    duration: "Jan 2026 - Feb 2026 (8 Weeks)",
    skills: ["Ethical Hacking", "Penetration Testing", "Threat Analysis", "Network Security Assessment", "Security Operations"],
    tech: ["Linux", "Kali Linux", "Burp Suite", "Python", "Wireshark"]
  },
  {
    organization: "Cybersecurity Students Club (CSSC) - UAJK",
    role: "Strategic and Event Manager",
    duration: "March 2026 - Present",
    skills: ["Event Strategy", "Team Leadership", "Workshop Hosting", "Community Engagement"],
    tech: ["Security Labs", "Networking", "Public Speaking", "Event Management"]
  },
  {
    organization: "The Eagnibals",
    role: "Research & Strategy Advisor",
    duration: "2025 - Present",
    skills: ["Strategic Planning", "Technical Research", "Security Auditing", "Problem Solving"],
    tech: ["Security Research", "Python", "Documentation"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Strategic Management", icon: "👑", desc: "Organizing events, coordinating student teams, and managing club initiatives seamlessly." },
  { name: "Analytical Thinking", icon: "🔍", desc: "Deconstructing complex network traffic and identifying security vulnerabilities systematically." },
  { name: "Public Speaking", icon: "🎤", desc: "Delivering articulate presentations, technical workshops, and engaging event hosting." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with cross-functional technical teams, researchers, and club members." },
  { name: "Problem Solving", icon: "🧩", desc: "Writing modular Python scripts to solve intricate network and security challenges." },
  { name: "Adaptability", icon: "🌟", desc: "Fast learner eager to master new penetration testing tools and emerging security frameworks." },
  { name: "Ethical Mindset", icon: "🛡️", desc: "Committed to responsible disclosure, security ethics, and defensive system hardening." },
  { name: "Continuous Learning", icon: "⚡", desc: "Persistently pursuing industry certifications and hands-on lab experiments." }
];

// Projects Data
export const projects = [
  {
    id: "network-sniffer",
    number: "01",
    badge: "🚀 Featured Security Tool",
    title: "Network Sniffer",
    description:
      "A custom low-level packet inspection and network monitoring tool built in Python. Captures live IP packets, parses TCP/UDP/ICMP headers, and performs real-time traffic analysis to identify anomalous network activity and protocol behaviors.",
    techTags: [
      "Python",
      "Socket Programming",
      "Computer Networks",
      "Packet Analysis",
      "Wireshark",
      "Linux"
    ],
    links: {
      github: "https://github.com/SyedIjlalHaiderFatmi/Network-Sniffer",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "fraud-detection",
    number: "02",
    badge: null,
    title: "AI Fraud Detection System",
    description:
      "An intelligent security application that scans financial transaction systems for fraudulent activity. Leverages Machine Learning classification algorithms to identify anomalous payment patterns and prevent card management system exploits.",
    techTags: ["Python", "Machine Learning", "Data Science", "Security Analytics", "Scikit-Learn", "Pandas"],
    links: {
      github: "https://github.com/SyedIjlalHaiderFatmi/Fraud-Detection",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "key-logging",
    number: "03",
    badge: null,
    title: "Key Logging Security Lab",
    description:
      "A Python-based keystroke monitoring and security research application developed to understand local input hooks, keystroke interception vectors, and effective defense strategies against spyware.",
    techTags: ["Python", "System Security", "Keystroke Logging", "OS Hooks", "Security Research"],
    links: {
      github: "https://github.com/SyedIjlalHaiderFatmi/Key--Logging",
      demo: null,
    },
    isFlagship: false,
  },
];

// Certifications Data
export const certificates = {
  featured: [
    {
      name: "Ethical Hacking",
      issuer: "EC-Council",
      icon: "🛡️",
    },
    {
      name: "Cyber Security (CEH, CHFI)",
      issuer: "NAVTTC",
      icon: "🔑",
    },
    {
      name: "Cybersecurity Internship & Training",
      issuer: "Arch Technologies",
      icon: "💼",
    },
    {
      name: "Offensive Security with AI",
      issuer: "Red Team Leaders",
      icon: "🤖",
    },
    {
      name: "Foundations of Cybersecurity",
      issuer: "Google / Coursera",
      icon: "🎓",
    },
    {
      name: "English for IT 2",
      issuer: "Cisco Networking Academy",
      icon: "🌐",
    },
    {
      name: "Cybersecurity in Healthcare",
      issuer: "Professional Cert",
      icon: "🏥",
    },
    {
      name: "Web Development for Beginners",
      issuer: "Professional Cert",
      icon: "💻",
    },
    {
      name: "Burp Suite: In Depth Survival Guide",
      issuer: "Udemy",
      icon: "🎯",
    },
  ],
  viewAllUrl: "https://github.com/SyedIjlalHaiderFatmi",
};

export const education = {
  degree: "BS Computer Science (CGPA: 3.7)",
  institution: "University of Azad Jammu and Kashmir (UAJK)",
  cgpa: "3.7 / 4.0",
  graduation: "Present (3rd Year / 6th Semester)",
  field: "Computer Science & Cyber Security Focus",
};

export const footerContent = {
  taglines: [
    "Cyber Security & Ethical Hacking",
    "Python · Penetration Testing · Networking",
    "Security Research & System Defense",
  ],
  credential: "BS Computer Science (CGPA 3.7) · UAJK",
  copyright: `© ${new Date().getFullYear()} Syed Ijlal Haider Fatmi | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
