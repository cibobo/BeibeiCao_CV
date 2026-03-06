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
  profile: "Lead Software Architect with over ten years of experience in automotive embedded software development, integration and architecture design. Extensive experience in defining scalable software architectures, engineering standards, and development processes across multiple agile teams, and translate system concepts into production-ready platform components while supporting quotation and stakeholder alignment. Deep knowledge in AUTOSAR, safety-critical systems, and multi-core/multi-micro system software development, complemented by a current focus on applying AI to increase efficiency in industrial software development processes.",
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

export const resumeDataZh: ResumeData = {
  id: 'zh',
  name: "曹北北（工程学硕士）",
  title: "首席软件架构师",
  profile: "作为域控制平台的首席架构师，拥有超过十年汽车嵌入式软件开发，集成以及设计经验。在指导和定义跨多个敏捷团队的可扩展软件架构、工程标准和开发流程方面积累了丰富的经验。深入掌握AUTOSAR、功能安全系统以及多核/多控制器系统软件开发，并致力于将人工智能应用于工业软件开发流程以提升效率。",
  contact: {
    birthDate: "1986年6月12日",
    nationality: "中国",
    phone: "0176 47088631",
    email: "beibei.cao@outlook.com"
  },
  experience: [
    {
      id: "exp1",
      role: "首席软件架构师",
      context: "域控制平台",
      period: "2023年1月 – 至今",
      description: [],
      subSections: [
        {
          title: "架构职责",
          items: [
            "设计高层架构和软件概念",
            "确保平台软件的效率、可扩展性和稳定性",
            "跨不同平台变体的标准化与可复用性推广",
            "主导平台软件的高层可视化工作"
          ]
        },
        {
          title: "发布列车架构与治理",
          items: [
            "多个Scrum团队的架构治理",
            "敏捷开发流程中的工作包分配与跟踪"
          ]
        },
        {
          title: "工程标准与流程",
          items: [
            "定义工程标准和最佳实践",
            "设计和优化开发工作流",
            "支持ASPICE评估"
          ]
        },
        {
          title: "战略",
          items: [
            "评估和选择前瞻性技术",
            "制定长期平台战略"
          ]
        },
        {
          title: "RFQ与报价流程的业务支持",
          items: [
            "开展可行性分析",
            "制作工作量估算",
            "定义技术条件和开发环境"
          ]
        },
        {
          title: "应用AI工程",
          items: [
            "开发汽车工具链的AI插件",
            "发起并实施AI辅助开发和分析流程"
          ]
        }
      ]
    },
    {
      id: "exp2",
      role: "软件架构师",
      period: "2019年10月 – 2022年12月",
      description: [
        "为高性能嵌入式平台项目进行架构设计，重点关注多核和多分区系统",
        "为多微控制器系统设计电源管理概念",
        "开展安全分析及对安全相关设计决策的架构贡献",
        "与集成和开发团队密切合作，确保架构规范的一致落实"
      ]
    },
    {
      id: "exp3",
      role: "首席软件集成工程师",
      period: "2013年9月 – 2019年9月",
      description: [
        "负责量产项目中AUTOSAR基础软件的集成",
        "参与关键项目，如电动车篷控制（Power Closure）和中央网关（Central Gateway）",
        "拥有丰富的AUTOSAR标准软件及复杂通信协议栈经验（如以太网、IP诊断、服务发现）",
        "在量产环境中从事多微控制器和多核系统的开发工作"
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "卡尔斯鲁厄理工学院（KIT）",
      degree: "计算机科学工程学硕士",
      period: "2007年10月 – 2013年1月",
      details: [
        "研究方向：计算机图形学、机器人学与自动化",
        "硕士论文：基于标记的人机协作目标跟踪（成绩：1.0）",
        "平均成绩：2.1"
      ]
    },
    {
      id: "edu2",
      institution: "中山大学，中国",
      degree: "计算数学理学学士",
      period: "2002年9月 – 2006年7月",
      details: [
        "平均成绩：2.7"
      ]
    }
  ],
  coreCompetencies: [
    "软件与平台架构（区域化）",
    "AUTOSAR（Classic），嵌入式系统",
    "发布列车与多团队架构",
    "安全关键系统",
    "RFQ与方案支持",
    "应用AI提升工程效率"
  ],
  skills: [
    {
      category: "C (C++)",
      skills: ["精通，主要工作语言"]
    },
    {
      category: "Python",
      skills: ["精通，脚本与AI集成的主要语言"]
    },
    {
      category: "Java",
      skills: ["精通，Cessar CT与Tresos Studio的主要语言"]
    },
    {
      category: "其他",
      skills: ["PCAL", "Matlab", "SQL", "TypeScript", "Xpath"]
    }
  ],
  tools: [
    { category: "架构", tools: ["Rhapsody", "Enterprise Architecture", "Plantuml"] },
    { category: "AI", tools: ["Vibe Coding", "AI Agent (Claude Code/Gemini CLI)", "工作流 (Dify, N8N)"] },
    { category: "IDE", tools: ["Tresos Studio", "VSCode"] },
    { category: "调试/测试", tools: ["CANoe", "iSystem Debugger"] },
    { category: "需求管理", tools: ["DOORs"] }
  ],
  languages: [
    { language: "德语", proficiency: "商务专业水平" },
    { language: "英语", proficiency: "商务专业水平" },
    { language: "普通话", proficiency: "母语" },
    { language: "粤语", proficiency: "流利" }
  ],
  interests: ["网球", "钢琴", "溜冰", "摄影"],
  ui: {
    profile: "个人简介",
    experience: "工作经历",
    education: "教育背景",
    skillsAndTools: "技能与工具",
    programmingLanguages: "编程语言",
    devTools: "开发工具",
    coreCompetencies: "核心能力",
    languages: "语言能力",
    interests: "兴趣爱好",
    copyright: "保留所有权利。"
  }
};