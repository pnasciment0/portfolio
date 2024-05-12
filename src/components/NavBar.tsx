import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
          <Link to="/">
            <h1 className="text-xl font-bold">Paulo Nascimento</h1>
          </Link>
          </div>
          <div>
            <ul className="flex space-x-5">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
              <li><Link to="/resume" className="hover:text-gray-400">Resume</Link></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
