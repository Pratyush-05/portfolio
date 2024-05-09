import React from 'react';

const DownloadResumeButton = ({ googleDriveLink }) => {
  const buttonStyle = {
    color: '#fffaf2',
    padding: '10px 20px',
    // border: '2px solid black',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    borderWidth: '1px',
    borderColor: '#fffaf2',
    backgroundColor: '#570e40',
    boxShadow: '-2px 2px 0 1px #570e40',
    border: '2px solid #fffaf2'
  };

  const hoverStyle = {
    backgroundColor: '#fffaf2',
    color: '#570e40',
    border: '2px solid #570e40',
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
