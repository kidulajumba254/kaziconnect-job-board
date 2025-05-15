
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container py-12 px-4 flex flex-col md:flex-row md:justify-between">
        <div className="mb-8 md:mb-0">
          <Link to="/" className="font-bold text-xl text-primary">JobMosaic</Link>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Connecting talent with opportunity. Find your next career move on JobMosaic.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-medium">For Job Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Browse Jobs</Link></li>
              <li><Link to="/companies" className="text-muted-foreground hover:text-primary transition-colors">Companies</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Career Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Salary Calculator</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/post-job" className="text-muted-foreground hover:text-primary transition-colors">Post a Job</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hiring Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} JobMosaic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
