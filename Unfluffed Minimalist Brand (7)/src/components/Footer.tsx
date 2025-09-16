import React from "react";
import { Link } from "react-router";
import { Instagram, Twitter, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060606] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full border-2 border-neon bg-neon text-dark flex items-center justify-center font-montserrat font-bold text-xl">
                U
              </div>
              <span className="text-xl font-bold text-white font-montserrat">UNFLUFFED</span>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              No hype. Just stuff that works.<br />
              © {new Date().getFullYear()} UNFLUFFED
            </p>
          </div>
          
          {/* Navigation Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-montserrat uppercase font-bold mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/#kits" className="text-gray-300 hover:text-neon text-sm">Kits</Link>
              <Link to="/about" className="text-gray-300 hover:text-neon text-sm">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-neon text-sm">Contact</Link>
            </div>
          </div>
          
          {/* Social Column */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-montserrat uppercase font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:hello@unfluffed.com" className="text-gray-300 hover:text-neon">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
