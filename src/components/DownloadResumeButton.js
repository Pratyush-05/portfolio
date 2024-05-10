import React from 'react';
import  './btn.css'
const DownloadResumeButton = ({ googleDriveLink }) => {


  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={googleDriveLink}
      className="download-resume-button" 
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  );
};

export default DownloadResumeButton;
