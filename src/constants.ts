import { Project, Experience, SkillGroup, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Durga Sahithi Nimmalapudi",
  title: "Power BI & Web Developer",
  summary: "Power BI and Web based developer with 2.3 years of experience delivering end-to-end data solutions across education and charity domains. Skilled in Power BI, Power Apps, Angular framework and Denodo environments.",
  email: "durga.sahithi2001@gmail.com",
  phone: "+91 9177 073 070",
  location: "Hyderabad, India",
  website: "https://www.durgasahithi.com/",
  socials: {
    linkedin: "https://www.linkedin.com/in/durga-sahithi-nimmalapudi-b97a6b25a/",
    github: "https://github.com/sahithi6094/",
    microsoftLearn: "https://learn.microsoft.com"
  }
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Data & Visualization",
    items: ["Power BI Desktop", "Power BI Service", "DAX", "SQL Server", "Denodo", "Dataverse"]
  },
  {
    category: "Power Platform",
    items: ["Power Apps", "Power Pages", "Power Automate"]
  },
  {
    category: "Web Development",
    items: ["Angular framework", "TypeScript", "JavaScript", "HTML", "CSS", "RESTful API", "Vibe Coding"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "WynBI Solutions Pvt Ltd",
    location: "Hyderabad, India",
    role: "Software Developer",
    period: "Feb 2024 - Current",
    highlights: [
      "Developed Dashboards and Software Applications using Power BI, Power Apps, Power Pages and Angular.",
      "Collaborated with cross-functional teams to define project requirements.",
      "Implemented testing procedures to identify bugs and improve software reliability.",
      "Documented technical specifications and user manuals for end-users.",
      "Participated in agile development meetings to discuss project progress.",
      "Collaborated closely with project managers and designers."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "6",
    title: "Education USA (EDUSA)",
    teamSize: 4,
    description: [
      "Developed web-based solutions using Microsoft Power Pages.",
      "Designed and developed interactive dashboards using Microsoft Power BI.",
      "Integrating functionalities with Microsoft Power Apps.",
      "Improved application functionality by developing interactive UI components."
    ]
  },
  {
    id: "5",
    title: "Test of English as a Foreign Language (TOEFL)",
    teamSize: 10,
    description: [
      "Developed and executed SQL queries aligned to business requirements.",
      "Created comprehensive source-to-target mapping documents.",
      "Built Power BI reports leveraging advanced DAX expressions (CALCULATE, FILTER)."
    ]
  },
  {
    id: "4",
    title: "Institute of International Education (IIE)",
    teamSize: 21,
    description: [
      "Validated source-to-target data mapping accuracy.",
      "Collaborated with the ETL team to confirm data integrity.",
      "Built dynamic Power BI dashboards to track business KPIs."
    ]
  },
  {
    id: "3",
    title: "Denodo",
    teamSize: 5,
    description: [
      "Integrated Denodo with Power BI by connecting business views.",
      "Designed and built interactive Power BI reports with real-time data visualizations.",
      "Implemented Row-Level Security (RLS) in Power BI."
    ]
  },
  {
    id: "2",
    title: "Right Spot (Student Tracking Application)",
    teamSize: 10,
    description: [
      "Developed a web application using Angular Framework.",
      "Connected to .Net Backend and SQL Server Database.",
      "Built Power BI dashboards with real-time student information."
    ]
  },
  {
    id: "1",
    title: "Young Men's Christian Association (YMCA)",
    teamSize: 2,
    description: [
      "Developed and customized applications using Microsoft Power Pages.",
      "Designed and implemented tab-based and multi-tab screen interfaces.",
      "Collaborated on building dynamic forms, workflows, and interactive UI components."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Microsoft Certified - Azure AI Fundamentals" },
  { name: "Microsoft Certified - Power Platform Fundamentals" },
  { name: "Microsoft Certified - Power Platform Developer Associate" },
  { name: "Denodo Platform 9 Certified - Developer Associate" }
];
