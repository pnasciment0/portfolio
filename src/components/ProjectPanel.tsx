import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';
import { getLogoPath } from '../utilities';

interface ProjectPanelProps {
  project: Project;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ project }) => {
  const { title, description, imageUrls, startDate, endDate, techUsed, projectLink, imageOnLeft, githubLink } = project;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAndStartTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
    }, 5000);
  };

  useEffect(() => {
    resetAndStartTimer();
    // Cleanup function to clear the timer when the component unmounts or imageUrls.length changes
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [imageUrls.length]);

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
    resetAndStartTimer();
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    resetAndStartTimer();
  };

  const previousImage = () => {
    console.log("Prvious inmage!")
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    resetAndStartTimer();
  };

  return (
    <div className={`flex project-row ${imageOnLeft ? 'flex-row left-image-color' : 'flex-row-reverse'} items-center space-x-4`}>
      {/* <button onClick={previousImage} aria-label="Previous image" className="p-2">
        &lt;
      </button> */}
      <div className="w-3/5 p-4 relative h-full">
        <button onClick={previousImage} aria-label="Previous image" className="absolute left-0 p-2 next-image-btn nib-left">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={nextImage} aria-label="Next image" className="absolute right-0 p-2 next-image-btn nib-right">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <div className="absolute inset-0 bg-black opacity-75 theater-mode-background">
        </div>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`${title} - Image ${index + 1}`}
            className={`transition-opacity duration-500 ease-in-out absolute inset-0 w-full h-full object-contain rounded-lg gallery-img p-8 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
      {/* <button onClick={nextImage} aria-label="Next image" classNames="p-2">
        &gt;
      </button> */}
      <div className="w-2/5 p-4">
        <h1 className="text-xl font-bold mb-3 project-title">{title}</h1>
        <h3>{startDate} - {endDate}</h3>
        <p className="mb-3 description">{description}</p>
        <ul className="mb-3 techpill-wrapper">
          {techUsed.map((tech, index) => (
            <li key={index} className="inline-block mr-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700 tech-pill">
              {tech}
              <img className={`pill-img ${tech}`} src={getLogoPath(tech)}></img>
              </li>
          ))}
        </ul>
        <div className="button-wrapper">
          <a href={projectLink} target="_blank" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 cta-btn">View Project</a>
          <a href={githubLink} target="_blank" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 cta-btn btn-internal-wrapper">
            View Source Code
            <FaGithub size={24} />
          </a>
          {/* <a href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-gray-100 mx-2">
            <FaGithub size={24} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
