// src/components/Footer.tsx

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm p-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <p>Contact Information:</p>
            <p>thepaulonascimento@gmail.com</p>
            <p>(954) 319-0965</p>
          </div>
          <div className="flex justify-end">
            <a href="https://www.linkedin.com/in/paulo-do-nascimento-jr/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-blue-300 hover:text-blue-100 mx-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/pnasciment0/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-300 hover:text-gray-100 mx-2">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Paulo Nascimento. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
