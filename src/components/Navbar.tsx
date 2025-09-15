import React, { useState } from "react";
import { Link } from 'react-router';
import { Menu } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#060606]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* Brand Logo/Name */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full border-2 border-neon bg-neon text-dark flex items-center justify-center font-montserrat font-bold text-2xl">
                U
              </div>
              <span className="text-2xl font-bold text-white font-montserrat">UNFLUFFED</span>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/#kits" className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium">
                Kits
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-neon p-2 rounded-md">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/#kits" 
            className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Kits
          </Link>
          <Link 
            to="/about" 
            className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
