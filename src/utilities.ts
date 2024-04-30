// Define an interface for the mapping structure
interface TechLogoPaths {
    [key: string]: string;
  }
  
  // Create a constant object that maps technology names to their respective logo image paths
  const LOGO_PATHS: TechLogoPaths = {
    // "Vue.js": "/assets/logos/vuejs.png",
    "Vue.js": "/assets/logos/vuejs.png",
    "Python": "/assets/logos/python.svg",
    "JavaScript": "/assets/logos/javascript.svg",
    "MongoDB": "/assets/logos/mongodb.svg",
    "Flask": "/assets/logos/flask.svg"
    // Add more technologies and paths as needed
  };
  
  // Function to get the logo path by technology name
  export function getLogoPath(technology: string): string | undefined {
    return LOGO_PATHS[technology] || undefined; // Returns null if the technology is not found
  }
  