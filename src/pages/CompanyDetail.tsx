
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, MapPin, Globe, Users, Calendar, ArrowLeft } from 'lucide-react';
import { mockCompanies, mockJobs } from '@/data/mockData';
import { Company, Job } from '@/types';

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [companyJobs, setCompanyJobs] = useState<Job[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundCompany = mockCompanies.find(company => company.id === id);
      if (foundCompany) {
        setCompany(foundCompany);
        
        // Find jobs from this company
        const jobs = mockJobs.filter(job => job.companyId === id);
        setCompanyJobs(jobs);
      }
    }
  }, [id]);
  
  if (!company) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Company not found</h1>
            <Link to="/companies" className="text-primary hover:underline flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to companies
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container">
          <Link to="/companies" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to companies
          </Link>
          
          <Card className="mb-6 overflow-hidden">
            {/* Company Header */}
            <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            
            <div className="p-6 pt-0 -mt-12">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                <div className="w-24 h-24 rounded-xl bg-white p-2 shadow-sm">
                  <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Building className="h-10 w-10 text-gray-400" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold">{company.name}</h1>
                  <p className="text-muted-foreground">{company.industry}</p>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <Button asChild>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <h3 className="text-sm font-medium">Location</h3>
                  <p className="text-muted-foreground">{company.location}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <h3 className="text-sm font-medium">Company Size</h3>
                  <p className="text-muted-foreground">{company.size}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <h3 className="text-sm font-medium">Founded</h3>
                  <p className="text-muted-foreground">{company.founded}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-muted-foreground mr-2" />
                <div>
                  <h3 className="text-sm font-medium">Website</h3>
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline truncate block max-w-xs"
                  >
                    {company.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>
            </div>
          </Card>
          
          <Tabs defaultValue="about" className="mt-6">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="jobs">Open Jobs ({companyJobs.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {company.description}
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="jobs" className="mt-4">
              <div className="space-y-6">
                {companyJobs.length > 0 ? (
                  companyJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))
                ) : (
                  <Card className="p-6 text-center">
                    <h3 className="text-lg font-medium">No open jobs</h3>
                    <p className="text-muted-foreground mt-1">
                      This company doesn't have any open positions at the moment.
                    </p>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDetail;
