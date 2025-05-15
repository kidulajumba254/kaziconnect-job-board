
import { Job } from '@/types';
import JobCard from './JobCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface FeaturedJobsProps {
  jobs: Job[];
}

const FeaturedJobs = ({ jobs }: FeaturedJobsProps) => {
  // Get only featured jobs or first 4 if no featured
  const featuredJobs = jobs.filter(job => job.featured).length 
    ? jobs.filter(job => job.featured).slice(0, 4)
    : jobs.slice(0, 4);

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Featured Jobs</h2>
            <p className="text-muted-foreground">Discover your next career opportunity</p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/jobs">View all jobs</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
