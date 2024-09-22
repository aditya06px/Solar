import React, {useState } from 'react';
import Draggable from 'react-draggable';
import './FloatingButton.css'; 

const FloatingButton = () => {
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });
  
    const handleStart = (e, data) => {
      setStartPosition({ x: data.x, y: data.y });  // Record the starting position
    };
  
    const handleStop = (e, data) => {
      setEndPosition({ x: data.x, y: data.y });  // Record the stopping position
    };
  
    const handleClick = () => {
      const distance = Math.sqrt(
        Math.pow(endPosition.x - startPosition.x, 2) + Math.pow(endPosition.y - startPosition.y, 2)
      );
  
      if (distance < 5) {  // If the button hasn't moved significantly, trigger the download
        const pdfUrl = '/Brochure.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'brochure.pdf';
        link.click();
      }
    };
  
    return (
      <Draggable onStart={handleStart} onStop={handleStop}>
        <div className="floating-button" onClick={handleClick}>
          Get Brochure
        </div>
      </Draggable>
    );
  };
export default FloatingButton;
