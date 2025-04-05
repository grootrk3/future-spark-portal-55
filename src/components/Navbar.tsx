
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-university-blue text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl">FutureSparkUniversity</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-university-teal transition-colors">Home</Link>
            <Link to="/programs" className="hover:text-university-teal transition-colors">Programs</Link>
            <Link to="/enrollment" className="hover:text-university-teal transition-colors">Enroll Now</Link>
            
            <div className="ml-4">
              <Button variant="outline" className="bg-university-teal hover:bg-university-accent text-white border-none">
                <User size={18} className="mr-2" />
                <Link to="/dashboard">Student Portal</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 py-4">
              <Link to="/" className="hover:text-university-teal transition-colors px-2 py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/programs" className="hover:text-university-teal transition-colors px-2 py-2" onClick={toggleMenu}>Programs</Link>
              <Link to="/enrollment" className="hover:text-university-teal transition-colors px-2 py-2" onClick={toggleMenu}>Enroll Now</Link>
              <Link to="/dashboard" className="hover:text-university-teal transition-colors px-2 py-2" onClick={toggleMenu}>Student Portal</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
