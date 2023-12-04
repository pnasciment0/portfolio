import React from 'react';

const NavBar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Paulo Nascimento</h1>
          </div>
          <div>
            <ul className="flex space-x-5">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Projects</a></li>
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
