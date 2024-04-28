import React, { useState, useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  date: string;
  imageUrls: string[];
  techUsed: string[];
  projectLink: string;
  imageOnLeft: boolean;
}

interface ProjectPanelProps {
  project: Project;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ project }) => {
  const { title, description, date, imageUrls, techUsed, projectLink, imageOnLeft } = project;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAndStartTimer = () => {
    // Clear the existing timer
    if (timerRef.current) {
      console.log("Clearing old timer");
      clearInterval(timerRef.current);
    }

    // Set a new timer
    timerRef.current = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
    }, 5000);  // You mentioned 5 seconds in the description, but the code has 3000 ms (3 seconds)
    console.log("Starting new timer");
  };

  useEffect(() => {
    resetAndStartTimer();
    // Cleanup function to clear the timer when the component unmounts or imageUrls.length changes
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [imageUrls.length]);  // useEffect depending on imageUrls.length to restart the timer when it changes

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
    resetAndStartTimer();
  };

  return (
    <div className={`flex ${imageOnLeft ? 'flex-row left-image-color' : 'flex-row-reverse'} items-center`}>
      <div className="w-3/5 p-4 relative h-96">
        <div className="absolute inset-0 bg-black opacity-75 theater-mode-background"></div>
        <img
          src={imageUrls[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="max-w-full h-auto mx-auto transition-opacity duration-500 ease-in-out opacity-100 absolute inset-0 w-full h-full object-contain rounded-lg p-8"
        />
        <div className="flex justify-center space-x-2 mt-2 absolute bottom-0 w-full pb-4">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      <div className="w-2/5 p-4">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="mb-3">{description}</p>
        <p>{date}</p>
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
