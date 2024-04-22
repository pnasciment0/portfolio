import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectTileProps {
  projectName: string;
  imageUrl?: string; // Optional image URL
  description?: string; // Optional project description
}

function ProjectTile({ projectName, imageUrl, description }: ProjectTileProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/projects/${projectName}`} 
      className="block bg-white p-5 rounded-lg shadow-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={projectName} className="w-full h-auto" />
      ) : (
        <div className="flex justify-center items-center h-32 w-full bg-gray-200">
          <span className="text-xl text-gray-500">No Image Available</span>
        </div>
      )}
      <h3 className="font-bold text-xl">{projectName}</h3>
      {/* Additional content and styling here */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-3 rounded-lg">
          <p className="text-white text-center">{description || 'More info about the project'}</p>
        </div>
      )}
    </Link>
  );
}

export default ProjectTile;
