import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { IoMdDownload } from "react-icons/io";

const ResumePage: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-lg resume-text font-bold my-4">Current Resume</h1>
      <p className="resume-description">To download my resume, hit "Download" at the top of the PDF viewer or click the button below it.</p>
      <div className="resume-viewer mb-4">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer
            fileUrl={`${process.env.PUBLIC_URL}/resume.pdf`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
      <a
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        download={"PauloNascimentoResume.pdf"}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded resume-dl"
      >
        Download Resume <IoMdDownload/>
      </a>
    </div>
  );
}

export default ResumePage;