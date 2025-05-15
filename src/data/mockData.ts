
import { Job, Company } from "../types";

export const mockJobs: Job[] = [
  {
    id: "job1",
    title: "Frontend Developer",
    company: "TechCorp",
    companyId: "company1",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$100,000 - $130,000",
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
    logo: "/placeholder.svg",
    featured: true,
    remote: true
  },
  {
    id: "job2",
    title: "Backend Engineer",
    company: "DataSys",
    companyId: "company2",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Join our backend team to design and implement scalable API services and database solutions for our growing platform.",
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
    logo: "/placeholder.svg",
    featured: false,
    remote: false
  },
  {
    id: "job3",
    title: "UI/UX Designer",
    company: "CreativeMinds",
    companyId: "company3",
    location: "Austin, TX",
    type: "Contract",
    salary: "$90,000 - $110,000",
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
    logo: "/placeholder.svg",
    remote: true
  },
  {
    id: "job4",
    title: "DevOps Engineer",
    company: "CloudWorks",
    companyId: "company4",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $160,000",
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
    logo: "/placeholder.svg",
    remote: true
  },
  {
    id: "job5",
    title: "Data Scientist",
    company: "AnalyticsPro",
    companyId: "company5",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$115,000 - $145,000",
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
    logo: "/placeholder.svg",
    remote: false
  },
  {
    id: "job6",
    title: "Product Manager",
    company: "TechCorp",
    companyId: "company1",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$125,000 - $155,000",
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
    logo: "/placeholder.svg",
    featured: true,
    remote: false
  }
];

export const mockCompanies: Company[] = [
  {
    id: "company1",
    name: "TechCorp",
    logo: "/placeholder.svg",
    description: "TechCorp is a leading technology company specializing in innovative software solutions for businesses of all sizes. Founded in 2010, we've grown to become a trusted partner for organizations looking to digitally transform their operations.",
    website: "https://techcorp.example.com",
    location: "San Francisco, CA",
    size: "500-1000 employees",
    industry: "Software Development",
    founded: "2010",
    jobCount: 12
  },
  {
    id: "company2",
    name: "DataSys",
    logo: "/placeholder.svg",
    description: "DataSys specializes in data management solutions and analytics platforms that help companies make better decisions with their data. Our suite of tools provides powerful insights while maintaining the highest standards of data privacy and security.",
    website: "https://datasys.example.com",
    location: "New York, NY",
    size: "100-500 employees",
    industry: "Data Analytics",
    founded: "2015",
    jobCount: 8
  },
  {
    id: "company3",
    name: "CreativeMinds",
    logo: "/placeholder.svg",
    description: "CreativeMinds is a design agency that blends creativity with technology to deliver outstanding digital experiences. Our team of designers and developers work together to create beautiful, functional, and user-friendly solutions for our clients.",
    website: "https://creativeminds.example.com",
    location: "Austin, TX",
    size: "50-100 employees",
    industry: "Design & Creative Services",
    founded: "2018",
    jobCount: 5
  },
  {
    id: "company4",
    name: "CloudWorks",
    logo: "/placeholder.svg",
    description: "CloudWorks provides cloud infrastructure and DevOps solutions to help companies modernize their IT operations. We specialize in cloud migration, infrastructure automation, and continuous delivery practices.",
    website: "https://cloudworks.example.com",
    location: "Seattle, WA",
    size: "100-500 employees",
    industry: "Cloud Services",
    founded: "2012",
    jobCount: 10
  },
  {
    id: "company5",
    name: "AnalyticsPro",
    logo: "/placeholder.svg",
    description: "AnalyticsPro turns raw data into actionable insights. Our analytics platform helps businesses understand customer behavior, optimize operations, and drive growth through data-driven decision making.",
    website: "https://analyticspro.example.com",
    location: "Boston, MA",
    size: "50-100 employees",
    industry: "Data Science & Analytics",
    founded: "2016",
    jobCount: 7
  }
];
