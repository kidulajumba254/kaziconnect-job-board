
import { Job, Company } from "../types";

export const mockJobs: Job[] = [
  {
    id: "job1",
    title: "Frontend Developer",
    company: "Safaricom",
    companyId: "company1",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 120,000 - KSh 180,000",
    description: "We're looking for a passionate Frontend Developer to join our team and help build beautiful, responsive web applications using React and TypeScript.",
    requirements: [
      "3+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with modern CSS and UI frameworks",
      "Understanding of web accessibility standards",
      "Familiarity with version control systems"
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable components and libraries",
      "Optimize applications for maximum performance",
      "Collaborate with backend developers and designers",
      "Ensure the technical feasibility of UI/UX designs"
    ],
    postedDate: "2025-05-01",
    experienceLevel: "Mid",
    logo: "/logos/safaricom.svg",
    featured: true,
    remote: true
  },
  {
    id: "job2",
    title: "Backend Engineer",
    company: "Equity Bank",
    companyId: "company2",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 150,000 - KSh 200,000",
    description: "Join our backend team to design and implement scalable API services and database solutions for our growing fintech platform.",
    requirements: [
      "Experience with Node.js or Python",
      "Knowledge of SQL and NoSQL databases",
      "Familiarity with microservices architecture",
      "Understanding of CI/CD pipelines",
      "Problem-solving mindset"
    ],
    responsibilities: [
      "Design and develop backend services",
      "Optimize database performance",
      "Implement security and data protection measures",
      "Work with frontend developers to integrate user-facing elements",
      "Monitor and troubleshoot application performance"
    ],
    postedDate: "2025-05-03",
    experienceLevel: "Senior",
    logo: "/logos/equity.svg",
    featured: false,
    remote: false
  },
  {
    id: "job3",
    title: "UI/UX Designer",
    company: "Andela Kenya",
    companyId: "company3",
    location: "Nairobi, Kenya",
    type: "Contract",
    salary: "KSh 100,000 - KSh 140,000",
    description: "We're seeking a talented UI/UX Designer to create exceptional user experiences for our digital products.",
    requirements: [
      "Portfolio demonstrating UX research and UI design skills",
      "Proficiency in design tools (Figma, Sketch, etc.)",
      "Understanding of user-centered design principles",
      "Ability to create wireframes, prototypes, and user flows",
      "Knowledge of accessibility standards"
    ],
    responsibilities: [
      "Conduct user research and testing",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Collaborate with developers to implement designs",
      "Establish design guidelines and standards",
      "Iterate designs based on user feedback"
    ],
    postedDate: "2025-05-05",
    experienceLevel: "Mid",
    logo: "/logos/andela.svg",
    remote: true
  },
  {
    id: "job4",
    title: "DevOps Engineer",
    company: "KCB Group",
    companyId: "company4",
    location: "Mombasa, Kenya",
    type: "Full-time",
    salary: "KSh 170,000 - KSh 220,000",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: [
      "Experience with AWS, Azure, or GCP",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Familiarity with Infrastructure as Code",
      "Understanding of CI/CD practices",
      "Scripting skills (Bash, Python)"
    ],
    responsibilities: [
      "Automate deployment and scaling processes",
      "Manage cloud infrastructure",
      "Implement monitoring and alerting systems",
      "Optimize system performance and reliability",
      "Collaborate with development teams to streamline operations"
    ],
    postedDate: "2025-05-07",
    experienceLevel: "Senior",
    logo: "/logos/kcb.svg",
    remote: true
  },
  {
    id: "job5",
    title: "Data Scientist",
    company: "Twiga Foods",
    companyId: "company5",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 130,000 - KSh 180,000",
    description: "Join our data science team to extract insights and build predictive models from large datasets.",
    requirements: [
      "Strong background in statistics and machine learning",
      "Experience with Python and data science libraries",
      "Knowledge of SQL and data visualization tools",
      "Familiarity with big data technologies",
      "Ability to communicate complex findings clearly"
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Analyze complex datasets to extract insights",
      "Create data visualizations and reports",
      "Collaborate with product and engineering teams",
      "Stay updated on latest data science techniques"
    ],
    postedDate: "2025-05-08",
    experienceLevel: "Mid",
    logo: "/logos/twiga.svg",
    remote: false
  },
  {
    id: "job6",
    title: "Product Manager",
    company: "Safaricom",
    companyId: "company1",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 160,000 - KSh 220,000",
    description: "Lead the development of innovative products from conception to launch.",
    requirements: [
      "Experience in product management or related field",
      "Strong understanding of software development lifecycle",
      "Excellent communication and leadership skills",
      "Analytical mindset with ability to make data-driven decisions",
      "Knowledge of agile methodologies"
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competition",
      "Measure and optimize product performance"
    ],
    postedDate: "2025-05-10",
    experienceLevel: "Senior",
    logo: "/logos/safaricom.svg",
    featured: true,
    remote: false
  }
];

export const mockCompanies: Company[] = [
  {
    id: "company1",
    name: "Safaricom",
    logo: "/logos/safaricom.svg",
    description: "Safaricom is Kenya's leading telecommunications company, offering mobile and fixed voice services, SMS, data, and financial services. As one of East Africa's most innovative companies, we're committed to transforming lives through technology and connectivity.",
    website: "https://www.safaricom.co.ke",
    location: "Nairobi, Kenya",
    size: "5000+ employees",
    industry: "Telecommunications",
    founded: "1997",
    jobCount: 12
  },
  {
    id: "company2",
    name: "Equity Bank",
    logo: "/logos/equity.svg",
    description: "Equity Bank is a financial services company with headquarters in Nairobi, Kenya. The company's focus is on providing financial inclusion and services to underserved populations across East Africa.",
    website: "https://equitygroupholdings.com",
    location: "Nairobi, Kenya",
    size: "1000-5000 employees",
    industry: "Financial Services",
    founded: "1984",
    jobCount: 8
  },
  {
    id: "company3",
    name: "Andela Kenya",
    logo: "/logos/andela.svg",
    description: "Andela is a global talent network that connects companies with vetted, remote engineers in emerging markets. Andela helps companies build distributed engineering teams quickly and cost-effectively.",
    website: "https://andela.com",
    location: "Nairobi, Kenya",
    size: "100-500 employees",
    industry: "Software Development",
    founded: "2014",
    jobCount: 5
  },
  {
    id: "company4",
    name: "KCB Group",
    logo: "/logos/kcb.svg",
    description: "KCB Group is East Africa's largest commercial bank, established in 1896 in Kenya. The bank has grown to become a leading financial institution with operations across the region, offering a wide range of banking and financial services.",
    website: "https://kcbgroup.com",
    location: "Nairobi, Kenya",
    size: "1000-5000 employees",
    industry: "Banking",
    founded: "1896",
    jobCount: 10
  },
  {
    id: "company5",
    name: "Twiga Foods",
    logo: "/logos/twiga.svg",
    description: "Twiga Foods is a Kenyan agricultural technology company that connects farmers and food producers with small and medium-sized vendors through a B2B e-commerce platform, improving food supply chains across Africa.",
    website: "https://twiga.com",
    location: "Nairobi, Kenya",
    size: "100-500 employees",
    industry: "AgriTech",
    founded: "2014",
    jobCount: 7
  }
];
