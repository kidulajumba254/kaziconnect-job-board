
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock } from 'lucide-react';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  // Calculate days ago from the posted date
  const getDaysAgo = (dateString: string) => {
    const postedDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  };

  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className={`hover:shadow-md transition-shadow ${job.featured ? 'border-job-blue border-2' : ''}`}>
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="font-semibold text-lg truncate">{job.title}</h3>
                <div className="flex items-center gap-2">
                  {job.featured && (
                    <Badge variant="default" className="bg-job-blue hover:bg-job-blue">
                      Featured
                    </Badge>
                  )}
                  {job.remote && (
                    <Badge variant="outline" className="border-job-green text-job-green">
                      Remote
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground mt-1">{job.company}</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-3.5 w-3.5 mr-1" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{getDaysAgo(job.postedDate)}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;
