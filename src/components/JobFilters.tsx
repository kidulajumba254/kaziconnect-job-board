
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterOptions, JobType, ExperienceLevel } from '@/types';
import { Search, MapPin, Filter } from 'lucide-react';

interface JobFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const JobFilters = ({ filters, onFilterChange }: JobFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is handled through state updates
  };

  const updateFilters = (key: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 md:p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Job title, keywords, or company" 
              value={filters.query}
              onChange={(e) => updateFilters('query', e.target.value)}
              className="pl-10" 
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="City, state, or remote" 
              value={filters.location}
              onChange={(e) => updateFilters('location', e.target.value)}
              className="pl-10" 
            />
          </div>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setIsOpen(!isOpen)}
            className="md:w-auto"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
        
        {isOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pt-4 border-t">
            <div className="space-y-4">
              <div>
                <Label htmlFor="job-type">Job Type</Label>
                <Select 
                  value={filters.type} 
                  onValueChange={(value) => updateFilters('type', value as JobType | '')}
                >
                  <SelectTrigger id="job-type">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="experience-level">Experience Level</Label>
                <Select 
                  value={filters.experienceLevel} 
                  onValueChange={(value) => updateFilters('experienceLevel', value as ExperienceLevel | '')}
                >
                  <SelectTrigger id="experience-level">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All levels</SelectItem>
                    <SelectItem value="Entry">Entry Level</SelectItem>
                    <SelectItem value="Mid">Mid Level</SelectItem>
                    <SelectItem value="Senior">Senior Level</SelectItem>
                    <SelectItem value="Lead">Lead / Manager</SelectItem>
                    <SelectItem value="Executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-start pt-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remote" 
                  checked={filters.remote}
                  onCheckedChange={(checked) => updateFilters('remote', !!checked)}
                />
                <label
                  htmlFor="remote"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remote positions only
                </label>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default JobFilters;
