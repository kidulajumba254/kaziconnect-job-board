
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl text-primary">JobMosaic</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/jobs" className="text-sm font-medium hover:text-primary transition-colors">Find Jobs</Link>
          <Link to="/companies" className="text-sm font-medium hover:text-primary transition-colors">Companies</Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/post-job">Post a Job</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
