import React, { useState, useEffect } from 'react';

const ThreeButtons = () => {
  const [selectedButton, setSelectedButton] = useState('Listening');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = (buttonLabel) => {
    setSelectedButton(buttonLabel);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <button
        className={`${
          selectedButton === 'Listening'
            ? 'bg-blue-500'
            : 'bg-gray-300 hover:bg-blue-700'
        } text-white font-bold py-2 px-4 rounded mb-2 lg:mb-0 lg:mt-2 lg:rounded ${
          isMobile ? (selectedButton === 'Listening' ? '' : 'hidden') : ''
        }`}
        onClick={() => handleButtonClick('Listening')}
      >
        Listening
        {/* {isMobile ? (selectedButton === 'Listening' ? 'Listening' : '') : 'Listening'} */}
      </button>

      <button
        className={`${
          selectedButton === 'Reading'
            ? 'bg-green-500'
            : 'bg-gray-300 hover:bg-green-700'
        } text-white font-bold py-2 px-4 rounded mb-2 lg:mb-0 lg:rounded ${
          isMobile ? (selectedButton === 'Reading' ? '' : 'hidden') : ''
        }`}
        onClick={() => handleButtonClick('Reading')}
      >
        Reading
        {/* {isMobile ? (selectedButton === 'Reading' ? 'Reading' : '') : 'Reading'} */}
      </button>

      <button
        className={`${
          selectedButton === 'Writing'
            ? 'bg-red-500'
            : 'bg-gray-300 hover:bg-red-700'
        } text-white font-bold py-2 px-4 rounded mb-2 lg:mb-0 lg:rounded ${
          isMobile ? (selectedButton === 'Writing' ? '' : 'hidden') : ''
        }`}
        onClick={() => handleButtonClick('Writing')}
      >
        Writing
        {/* {isMobile ? (selectedButton === 'Writing' ? 'Writing' : '') : 'Writing'} */}
      </button>
    </div>
  );
};

export default ThreeButtons;
