
export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
export type ExperienceLevel = 'Entry' | 'Mid' | 'Senior' | 'Lead' | 'Executive';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  type: JobType;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
  experienceLevel: ExperienceLevel;
  logo: string;
  featured?: boolean;
  remote?: boolean;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  location: string;
  size: string;
  industry: string;
  founded: string;
  jobCount: number;
}

export interface FilterOptions {
  query: string;
  location: string;
  type: JobType | '';
  remote: boolean;
  experienceLevel: ExperienceLevel | '';
}
