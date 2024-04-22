// src/components/ProjectsPage.tsx
import React from 'react';
import Panel from '../components/Panel';
import ProjectPanel from '../components/ProjectPanel';
import wtvLogo from '../assets/wtvlogo.png';

const projects = [
  {,
]

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-5">My Projects</h1>
            <p className="text-lg">Detailed info and links to my web creations.</p>
          </div>
      </div>
      {projects.map((project, index) => (
        <ProjectPanel key={index} project={project} />
      ))}
    </>
  );
}

export default ProjectsPage;
