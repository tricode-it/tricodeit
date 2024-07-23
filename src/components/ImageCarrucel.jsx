// ImageCarousel.jsx
import React, { useState } from 'react';

const images = [
    '/HeroGym.png',
  '/green-dashboard.jpg',
  '/green-dashboard.jpg',
  '/green-dashboard.jpg',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button 
        onClick={handlePrev}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full">
        &#10094;
      </button>
      <button 
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full">
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
