import React from 'react';
import Panel from '../components/Panel';
import ProjectTile from '../components/ProjectTile';
import wtvLogo from '../assets/wtvlogo.png';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
      <>
        <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-5">Paulo Nascimento - Software Developer</h1>
            <p className="text-lg">A showcase of my projects, skills, and experiences.</p>
          </div>
        </div>
        <Panel>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold featproj">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectTile projectName="Walk the Vote" imageUrl={wtvLogo} description={""}/>
            <ProjectTile projectName="StarGrids" />
            <ProjectTile projectName="Fantasy Postseason Challenge" />
          </div>
          <div className="mt-8">
            <Link to="/projects" className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 active:bg-blue-700 transition duration-300">
              View All Projects
            </Link>
          </div>
        </Panel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 darkpanel">
            Hi
        </div>
      </>
    );
  };

  export default HomePage;