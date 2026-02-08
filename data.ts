import { ResumeData } from './types';

export const resumeDataDe: ResumeData = {
  id: 'de',
  name: "Dipl.-Info. Beibei Cao",
  title: "Leitender Softwarearchitekt",
  profile: "Leitender Softwarearchitekt mit über zehn Jahren Erfahrung in der Automobil-Embedded-Softwareentwicklung und im plattform- und zonenbasierten Architekturdesign. Umfangreiche Erfahrung in der Definition skalierbarer Softwarearchitekturen, Engineering-Standards und Entwicklungsprozesse über mehrere agile Teams hinweg. Fundierte Kenntnisse in AUTOSAR, sicherheitskritischen Systemen sowie Multicore/MultiMicro System Softwareentwicklung, ergänzt durch aktuelle Schwerpunkte im Einsatz von KI zur Effizienzsteigerung industrieller Softwareentwicklungsprozesse.",
  contact: {
    birthDate: "12. Juni 1986",
    nationality: "Chinesisch",
    phone: "0176 47088631",
    email: "beibei.cao@outlook.com"
  },
  experience: [
    {
      id: "exp1",
      role: "Leitender Softwarearchitekt",
      context: "Zone Platform",
      period: "Jan. 2023 – Heute",
      description: [],
      subSections: [
        {
          title: "Architekturverantwortung",
          items: [
            "Entwurf von High-Level-Architekturen und Softwarekonzeption",
            "Sicherstellung von Effizienz, Skalierbarkeit und Stabilität der Plattformsoftware",
            "Standardisierung und Förderung der Wiederverwendbarkeit über verschiedene Plattformvarianten hinweg",
            "Leitung der High-Level-Visualisierung für die Plattformsoftware"
          ]
        },
        {
          title: "Release-Train-Architecture und Governance",
          items: [
            "Architecture Governance für mehrere Scrum-Teams",
            "Arbeitspaketverteilung und -verfolgung in agilen Entwicklungsprozessen"
          ]
        },
        {
          title: "Engineering-Standards und Prozesse",
          items: [
            "Definition von Engineering-Standards und Best Practices",
            "Gestaltung und Optimierung von Entwicklungsworkflows",
            "Unterstützung bei ASPICE-Assessments"
          ]
        },
        {
          title: "Strategie",
          items: [
            "Evaluierung und Auswahl zukunftsweisender Technologien",
            "Ausgestaltung der langfristigen Plattformstrategie"
          ]
        },
        {
          title: "Business-Unterstützung für RFQ- und Angebotsprozesse",
          items: [
            "Durchführung von Machbarkeitsanalysen",
            "Erstellung von Aufwandsschätzungen",
            "Definition technischer Rahmenbedingungen und der Entwicklungsumgebung"
          ]
        },
        {
          title: "Applied AI Engineering",
          items: [
            "Entwicklung von KI-Add-ons für die Automotive Toolchain",
            "Initiierung und Implementierung KI-gestützter Entwicklungs- und Analyseprozesse"
          ]
        }
      ]
    },
    {
      id: "exp2",
      role: "Softwarearchitekt",
      period: "Okt. 2019 – Dez. 2022",
      description: [
        "Architekturdesign für hochperformante Embedded-Plattformprojekte, mit Schwerpunkt auf Multicore- und Multipartitionssystemen",
        "Auslegung von Power-Management-Konzepten für Multi-Mikrocontroller-Systeme",
        "Durchführung von Sicherheitsanalysen sowie architektonische Beiträge zu sicherheitsrelevanten Designentscheidungen",
        "Enge Zusammenarbeit mit Integrations- und Entwicklungsteams zur konsistenten Umsetzung architektonischer Vorgaben"
      ]
    },
    {
      id: "exp3",
      role: "Lead Software Integration Engineer",
      period: "Sep. 2013 – Sep. 2019",
      description: [
        "Verantwortung für die Integration von AUTOSAR-Basissoftware in Serienprojekten",
        "Mitarbeit in Schlüsselprojekten wie Power Closure (Convertible Roof Control) und Central Gateway",
        "Umfassende Erfahrung mit AUTOSAR-Standardsoftware sowie komplexen Kommunikations-Stacks (u. a. Ethernet, Diagnostic over IP, Service Discovery)",
        "Arbeit an Multi-Mikrocontroller- und Multicore-Systemen im Serienumfeld"
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "Karlsruher Institut für Technologie (KIT)",
      degree: "Diplom für Informatik",
      period: "Okt. 2007 – Jan. 2013",
      details: [
        "Schwerpunkte: Computergrafik, Robotik und Automation",
        "Diplomarbeitsthema: Marker basierte Objektverfolgung für die Mensch-Roboter Kooperation (Note 1.0)",
        "Notendurchschnitt: 2,1"
      ]
    },
    {
      id: "edu2",
      institution: "Sun Yat-Sen Universität, China",
      degree: "Bachelor für Informatik",
      period: "Sep. 2002 – Jul. 2006",
      details: [
        "Notendurchschnitt: 2,7"
      ]
    }
  ],
  coreCompetencies: [
    "Software- und Plattformarchitektur (Zonal)",
    "AUTOSAR (Classic), Embedded Systems",
    "Release Train & Multi-Team-Architekturen",
    "Sicherheitskritische Systeme",
    "RFQ- und Angebotsunterstützung",
    "Applied AI zur Steigerung der Engineering-Effizienz"
  ],
  skills: [
    {
      category: "C (C++)",
      skills: ["sehr gut. Hauptarbeitssprache"]
    },
    {
      category: "Python",
      skills: ["sehr gut. Hauptarbeitssprache für script and AI Integration"]
    },
    {
      category: "Java",
      skills: ["sehr gut. Hauptsprache von Cessar CT, Tresos Studio"]
    },
    {
      category: "Weitere",
      skills: ["PCAL", "Matlab", "SQL", "TypeScript", "Xpath"]
    }
  ],
  tools: [
    { category: "Architecture", tools: ["Rhapsody", "Enterprise Architecture", "Plantuml"] },
    { category: "AI", tools: ["Vibe Coding", "AI Agent (Claude Code/Gemini CLI)", "Working Flow (Dify, N8N)"] },
    { category: "IDE", tools: ["Tresos Studio", "VSCode"] },
    { category: "Debug/Test", tools: ["CANoe", "iSystem Debugger"] },
    { category: "Requirement", tools: ["DOORs"] }
  ],
  languages: [
    { language: "Deutsch", proficiency: "Verhandlungssicher" },
    { language: "Englisch", proficiency: "Verhandlungssicher" },
    { language: "Chinesisch", proficiency: "Muttersprache" },
    { language: "Kantonesisch", proficiency: "Fließend" }
  ],
  interests: ["Tennis", "Klavier", "Inline Skating", "Fotografie"],
  ui: {
    profile: "Profil",
    experience: "Berufserfahrung",
    education: "Studium",
    skillsAndTools: "Fähigkeiten & Tools",
    programmingLanguages: "Programmiersprachen",
    devTools: "Entwicklung Tools",
    coreCompetencies: "Kernkompetenzen",
    languages: "Sprachen",
    interests: "Interessen",
    copyright: "Alle Rechte vorbehalten."
  }
};

export const resumeDataEn: ResumeData = {
  id: 'en',
  name: "Dipl.-Info. Beibei Cao",
  title: "Lead Software Architect",
  profile: "Lead Software Architect with over ten years of experience in automotive embedded software development and platform and zonal architecture design. Extensive experience in defining scalable software architectures, engineering standards, and development processes across multiple agile teams. Deep knowledge in AUTOSAR, safety-critical systems, and multi-core/multi-micro system software development, complemented by a current focus on applying AI to increase efficiency in industrial software development processes.",
  contact: {
    birthDate: "June 12, 1986",
    nationality: "Chinese",
    phone: "0176 47088631",
    email: "beibei.cao@outlook.com"
  },
  experience: [
    {
      id: "exp1",
      role: "Lead Software Architect",
      context: "Zonal Platform",
      period: "Jan 2023 – Present",
      description: [],
      subSections: [
        {
          title: "Architecture Responsibility",
          items: [
            "Design of high-level architectures and software concepts",
            "Ensuring efficiency, scalability, and stability of platform software",
            "Standardization and promotion of reusability across different platform variants",
            "Leading high-level visualization for platform software"
          ]
        },
        {
          title: "Release Train Architecture and Governance",
          items: [
            "Architecture governance for multiple Scrum teams",
            "Work package distribution and tracking in agile development processes"
          ]
        },
        {
          title: "Engineering Standards and Processes",
          items: [
            "Definition of engineering standards and best practices",
            "Design and optimization of development workflows",
            "Support during ASPICE assessments"
          ]
        },
        {
          title: "Strategy",
          items: [
            "Evaluation and selection of future-oriented technologies",
            "Shaping the long-term platform strategy"
          ]
        },
        {
          title: "Business Support for RFQ and Quote Processes",
          items: [
            "Conducting feasibility analyses",
            "Creation of effort estimates",
            "Definition of technical conditions and development environments"
          ]
        },
        {
          title: "Applied AI Engineering",
          items: [
            "Development of AI add-ons for the automotive toolchain",
            "Initiation and implementation of AI-supported development and analysis processes"
          ]
        }
      ]
    },
    {
      id: "exp2",
      role: "Software Architect",
      period: "Oct 2019 – Dec 2022",
      description: [
        "Architecture design for high-performance embedded platform projects, focusing on multi-core and multi-partition systems",
        "Design of power management concepts for multi-microcontroller systems",
        "Conducting safety analyses and architectural contributions to safety-relevant design decisions",
        "Close collaboration with integration and development teams for consistent implementation of architectural specifications"
      ]
    },
    {
      id: "exp3",
      role: "Lead Software Integration Engineer",
      period: "Sep 2013 – Sep 2019",
      description: [
        "Responsibility for the integration of AUTOSAR basic software in series projects",
        "Participation in key projects such as Power Closure (Convertible Roof Control) and Central Gateway",
        "Extensive experience with AUTOSAR standard software and complex communication stacks (e.g., Ethernet, Diagnostic over IP, Service Discovery)",
        "Work on multi-microcontroller and multi-core systems in a series environment"
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "Karlsruhe Institute of Technology (KIT)",
      degree: "Diploma in Computer Science",
      period: "Oct 2007 – Jan 2013",
      details: [
        "Focus: Computer Graphics, Robotics, and Automation",
        "Thesis: Marker-based object tracking for human-robot cooperation (Grade 1.0)",
        "Average Grade: 2.1"
      ]
    },
    {
      id: "edu2",
      institution: "Sun Yat-Sen University, China",
      degree: "Bachelor of Computer Science",
      period: "Sep 2002 – Jul 2006",
      details: [
        "Average Grade: 2.7"
      ]
    }
  ],
  coreCompetencies: [
    "Software and Platform Architecture (Zonal)",
    "AUTOSAR (Classic), Embedded Systems",
    "Release Train & Multi-Team Architectures",
    "Safety-Critical Systems",
    "RFQ and Proposal Support",
    "Applied AI to Increase Engineering Efficiency"
  ],
  skills: [
    {
      category: "C (C++)",
      skills: ["Very good. Main working language"]
    },
    {
      category: "Python",
      skills: ["Very good. Main language for scripts and AI integration"]
    },
    {
      category: "Java",
      skills: ["Very good. Main language of Cessar CT, Tresos Studio"]
    },
    {
      category: "Others",
      skills: ["PCAL", "Matlab", "SQL", "TypeScript", "Xpath"]
    }
  ],
  tools: [
    { category: "Architecture", tools: ["Rhapsody", "Enterprise Architecture", "Plantuml"] },
    { category: "AI", tools: ["Vibe Coding", "AI Agent (Claude Code/Gemini CLI)", "Working Flow (Dify, N8N)"] },
    { category: "IDE", tools: ["Tresos Studio", "VSCode"] },
    { category: "Debug/Test", tools: ["CANoe", "iSystem Debugger"] },
    { category: "Requirement", tools: ["DOORs"] }
  ],
  languages: [
    { language: "German", proficiency: "Business Fluent" },
    { language: "English", proficiency: "Business Fluent" },
    { language: "Chinese", proficiency: "Native" },
    { language: "Cantonese", proficiency: "Fluent" }
  ],
  interests: ["Tennis", "Piano", "Inline Skating", "Photography"],
  ui: {
    profile: "Profile",
    experience: "Professional Experience",
    education: "Education",
    skillsAndTools: "Skills & Tools",
    programmingLanguages: "Programming Languages",
    devTools: "Development Tools",
    coreCompetencies: "Core Competencies",
    languages: "Languages",
    interests: "Interests",
    copyright: "All rights reserved."
  }
};