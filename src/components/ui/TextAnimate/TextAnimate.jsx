import React, { useState, useEffect } from 'react';
import './TextRotator.css';

const texts = [
  { text: " E-Commerce", style: "style1", icon: "<i class='bx bxs-store-alt text-2xl'></i>" },
  { text: " DashBoard", style: "style2", icon: "<i class='bx bxs-cog text-2xl' ></i>" },
  { text: " Landing Page", style: "style3", icon: "<i class='bx bxs-book-content text-2xl' ></i>" },
  { text: " App Mobile", style: "style4", icon: "<i class='bx bx-mobile-vibration text-2xl'></i>" },
];

const TextAnimate = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimate(true);
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-normal text-xl text-center mt-5">
      <div className={`text flex gap-2 ${texts[currentTextIndex].style} ${animate ? 'animate' : ''}`}>
        <span dangerouslySetInnerHTML={{ __html: texts[currentTextIndex].icon }} />
        {texts[currentTextIndex].text}
      </div>
    </div>
  );
};

export default TextAnimate;
