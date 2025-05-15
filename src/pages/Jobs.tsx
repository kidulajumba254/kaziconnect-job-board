
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobFilters from '@/components/JobFilters';
import JobCard from '@/components/JobCard';
import { mockJobs } from '@/data/mockData';
import { FilterOptions, Job } from '@/types';

const Jobs = () => {
  const location = useLocation();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [filters, setFilters] = useState<FilterOptions>({
    query: '',
    location: '',
    type: '',
    remote: false,
    experienceLevel: '',
  });

  // Initialize filters from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');
    const locationParam = params.get('location');
    
    if (queryParam || locationParam) {
      setFilters({
        ...filters,
        query: queryParam || '',
        location: locationParam || '',
      });
    }
  }, [location.search]);

  // Apply filters when they change
  useEffect(() => {
    let result = [...mockJobs];
    
    // Filter by search query
    if (filters.query) {
      const query = filters.query.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by location
    if (filters.location) {
      const location = filters.location.toLowerCase();
      result = result.filter(job => 
        job.location.toLowerCase().includes(location)
      );
    }
    
    // Filter by job type
    if (filters.type) {
      result = result.filter(job => job.type === filters.type);
    }
    
    // Filter by remote
    if (filters.remote) {
      result = result.filter(job => job.remote === true);
    }
    
    // Filter by experience level
    if (filters.experienceLevel) {
      result = result.filter(job => job.experienceLevel === filters.experienceLevel);
    }
    
    setFilteredJobs(result);
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight mb-1">Find Your Next Job</h1>
            <p className="text-muted-foreground">Browse available job opportunities</p>
          </div>
          
          <JobFilters 
            filters={filters}
            onFilterChange={setFilters}
          />
          
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No jobs found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
