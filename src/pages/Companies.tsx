
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockCompanies } from '@/data/mockData';
import { Company } from '@/types';
import { Search, Building } from 'lucide-react';

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(mockCompanies);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredCompanies(mockCompanies);
      return;
    }
    
    const filtered = mockCompanies.filter(company => 
      company.name.toLowerCase().includes(query.toLowerCase()) ||
      company.industry.toLowerCase().includes(query.toLowerCase()) ||
      company.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredCompanies(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight mb-1">Companies</h1>
            <p className="text-muted-foreground">Discover great places to work</p>
          </div>
          
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search companies by name or industry" 
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10" 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <Link key={company.id} to={`/companies/${company.id}`}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                          {company.logo ? (
                            <img 
                              src={company.logo} 
                              alt={`${company.name} logo`} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Building className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg">{company.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{company.industry}</p>
                          <p className="text-sm text-muted-foreground mt-1">{company.location}</p>
                          
                          <div className="mt-4 text-sm flex items-center">
                            <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                              {company.jobCount} {company.jobCount === 1 ? 'job' : 'jobs'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                        {company.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium">No companies found</h3>
                <p className="text-muted-foreground mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
