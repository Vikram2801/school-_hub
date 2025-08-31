import { Link, useLocation } from "react-router-dom";
import{Button}from"../components/ui/Button";
import { GraduationCap, Plus, Grid3X3 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
          >
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">SchoolHub</span>
          </Link>
          
          <div className="flex space-x-2">
            <Button
              variant={location.pathname === "/add-school" ? "default" : "ghost"}
              asChild
              className="flex items-center space-x-2"
            >
              <Link to="/add-school">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Add School</span>
              </Link>
            </Button>
            
            <Button
              variant={location.pathname === "/schools" ? "default" : "ghost"}
              asChild
              className="flex items-center space-x-2"
            >
              <Link to="/schools">
                <Grid3X3 className="h-4 w-4" />
                <span className="hidden sm:inline">View Schools</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;