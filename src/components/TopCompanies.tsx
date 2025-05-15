
import { Link } from 'react-router-dom';
import { Company } from '@/types';
import { Button } from "@/components/ui/button";
import { Building } from 'lucide-react';

interface TopCompaniesProps {
  companies: Company[];
}

const TopCompanies = ({ companies }: TopCompaniesProps) => {
  // Get top 5 companies
  const topCompanies = companies.slice(0, 5);

  return (
    <section className="py-12 px-4 md:py-16 bg-gray-50 dark:bg-slate-900">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Top Kenyan Employers</h2>
            <p className="text-muted-foreground">Explore jobs from leading companies in Kenya</p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link to="/companies">View all companies</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {topCompanies.map((company) => (
            <Link 
              key={company.id}
              to={`/companies/${company.id}`}
              className="group block"
            >
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border dark:border-slate-700 flex flex-col items-center text-center group-hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-700 mb-4 flex items-center justify-center overflow-hidden">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Building className="h-8 w-8 text-gray-400 dark:text-gray-300" />
                  )}
                </div>
                <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">{company.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{company.industry}</p>
                <span className="text-xs bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded-full">
                  {company.jobCount} {company.jobCount === 1 ? 'job' : 'jobs'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
