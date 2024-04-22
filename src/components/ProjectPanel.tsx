import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techUsed: string[];
  projectLink: string;
  imageOnLeft: boolean;
}

interface ProjectPanelProps {
  project: Project;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ project }) => {
  const { title, description, imageUrl, techUsed, projectLink, imageOnLeft } = project;

  return (
    <div className={`flex ${imageOnLeft ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}>
      <div className="w-1/2 p-4">
        <img src={imageUrl} alt={title} className="max-w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="mb-3">{description}</p>
        <ul className="mb-3">
          {techUsed.map((tech, index) => (
            <li key={index} className="inline-block mr-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">{tech}</li>
          ))}
        </ul>
        <a href={projectLink} className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">View Project</a>
      </div>
    </div>
  );
};

export default ProjectPanel;
