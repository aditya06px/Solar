import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './FloatingButton.css';


const FloatingButton = () => {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  const handleStart = (e, data) => {
    setStartPosition({ x: data.x, y: data.y });
  };

  const handleStop = (e, data) => {
    setEndPosition({ x: data.x, y: data.y });
  };

  const handleClick = async () => {
    alert("clicked")
    const distance = Math.sqrt(
      Math.pow(endPosition.x - startPosition.x, 2) + Math.pow(endPosition.y - startPosition.y, 2)
    );

    if (distance < 5) {
      try {
        // Fetch the PDF file from the server
        const response = await fetch('/Brochure.pdf');
        const blob = await response.blob();

        // Create a link element, use the blob, and trigger download
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Brochure.pdf';
        link.click();
      } catch (error) {
        console.error('Download failed', error);
      }
    }
  };

  return (
    <Draggable onStart={handleStart} onStop={handleStop}>
      <button className="floating-button" onClick={handleClick}>
        Get Brochure
      </button>
    </Draggable>
  );
};

export default FloatingButton;
