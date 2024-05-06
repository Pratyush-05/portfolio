import React from 'react';

const DownloadResumeButton = ({ googleDriveLink }) => {
  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    border: '2px solid black',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={googleDriveLink}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  );
};

export default DownloadResumeButton;
