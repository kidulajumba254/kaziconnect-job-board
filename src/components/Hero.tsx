
import { Search, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onSearchSubmit: (query: string, location: string) => void;
}

const Hero = ({ onSearchSubmit }: HeroProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const queryInput = form.elements.namedItem('query') as HTMLInputElement;
    const locationInput = form.elements.namedItem('location') as HTMLInputElement;
    
    onSearchSubmit(queryInput.value, locationInput.value);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find Your Dream Job in Kenya
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse thousands of jobs from top Kenyan companies and find the perfect role for your skills and experience.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row w-full max-w-3xl gap-3 animate-fade-in">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input 
                name="query" 
                placeholder="Job title, keywords, or company" 
                className="pl-10" 
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input 
                name="location" 
                placeholder="Nairobi, Mombasa, or Remote" 
                className="pl-10" 
              />
            </div>
            <Button type="submit" size="lg" className="md:w-auto">
              Find Jobs
            </Button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span>Popular searches:</span>
            <a href="#" className="hover:text-primary transition-colors">Software Engineer</a>
            <a href="#" className="hover:text-primary transition-colors">Marketing</a>
            <a href="#" className="hover:text-primary transition-colors">NGO Jobs</a>
            <a href="#" className="hover:text-primary transition-colors">Remote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
