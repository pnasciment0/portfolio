import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectTileProps {
  projectName: string;
  imageUrl?: string; // Optional image URL
}

function ProjectTile({ projectName, imageUrl }: ProjectTileProps) {
  return (
    <Link to={`/projects/${projectName}`} className="block bg-white p-5 rounded-lg shadow-lg">
      {imageUrl ? (
        <img src={imageUrl} alt={projectName} className="w-full h-auto" />
      ) : (
        <div className="flex justify-center items-center h-32 w-full bg-gray-200">
          {/* You can replace this with any generic logo or text */}
          <span className="text-xl text-gray-500">No Image Available</span>
        </div>
      )}
      <h3 className="font-bold text-xl">{projectName}</h3>
      {/* Additional content and styling here */}
    </Link>
  );
}

export default ProjectTile;
