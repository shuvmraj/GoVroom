import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-t-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Side - Copyright */}
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} GoVroom. All Rights Reserved.
        </div>

        {/* Right Side - Back Button */}
        <button 
          onClick={() => window.history.back()} 
          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="text-sm">Back</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
