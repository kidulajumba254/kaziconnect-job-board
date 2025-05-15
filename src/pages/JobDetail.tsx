
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Briefcase, Building, Calendar, ChevronRight, ArrowLeft } from 'lucide-react';
import { mockJobs, mockCompanies } from '@/data/mockData';
import { Job, Company } from '@/types';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundJob = mockJobs.find(job => job.id === id);
      if (foundJob) {
        setJob(foundJob);
        
        // Find the company
        const foundCompany = mockCompanies.find(company => company.id === foundJob.companyId);
        if (foundCompany) {
          setCompany(foundCompany);
        }
      }
    }
  }, [id]);
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job not found</h1>
            <Link to="/jobs" className="text-primary hover:underline flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to jobs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Format posted date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container">
          <div className="mb-6">
            <Link to="/jobs" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to jobs
            </Link>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                {/* Job Header */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={job.logo || '/placeholder.svg'} 
                        alt={`${job.company} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold mr-2">{job.title}</h1>
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
                      
                      <Link to={`/companies/${job.companyId}`} className="text-lg text-muted-foreground hover:text-primary">
                        {job.company}
                      </Link>
                      
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Posted {formatDate(job.postedDate)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button size="lg" className="w-full md:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </Card>
                
                {/* Job Description */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <p className="text-muted-foreground whitespace-pre-line mb-6">
                    {job.description}
                  </p>
                  
                  <h3 className="text-lg font-medium mt-6 mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-medium mt-6 mb-3">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Company Card */}
                {company && (
                  <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">About the Company</h2>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mr-3">
                        <img 
                          src={company.logo || '/placeholder.svg'} 
                          alt={`${company.name} logo`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{company.name}</h3>
                        <p className="text-sm text-muted-foreground">{company.industry}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                      {company.description}
                    </p>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{company.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Company size:</span>
                        <span className="font-medium">{company.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Founded:</span>
                        <span className="font-medium">{company.founded}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" asChild className="w-full mt-4">
                      <Link to={`/companies/${company.id}`} className="inline-flex items-center justify-center">
                        View Company
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </Card>
                )}
                
                {/* Job Details Card */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employment Type:</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience Level:</span>
                      <span className="font-medium">{job.experienceLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salary Range:</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Remote:</span>
                      <span className="font-medium">{job.remote ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
