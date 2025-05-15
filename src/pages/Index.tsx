
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedJobs from '@/components/FeaturedJobs';
import TopCompanies from '@/components/TopCompanies';
import Footer from '@/components/Footer';
import { mockJobs, mockCompanies } from '@/data/mockData';

const Index = () => {
  const navigate = useNavigate();
  
  const handleSearch = (query: string, location: string) => {
    // Construct search parameters
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (location) params.append('location', location);
    
    // Navigate to jobs page with search params
    navigate({
      pathname: '/jobs',
      search: params.toString()
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero onSearchSubmit={handleSearch} />
        <FeaturedJobs jobs={mockJobs} />
        <TopCompanies companies={mockCompanies} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
