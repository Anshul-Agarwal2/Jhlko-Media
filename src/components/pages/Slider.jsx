import React, { useState } from "react";
import slideleft from '../../assets/sliderleft.svg'
import slideright from '../../assets/sliderright.svg'
import partner1 from "../../assets/partner1.png"
import partner2 from "../../assets/partner2.png"
import partner3 from "../../assets/partner3.png"
import partner4 from "../../assets/partner4.png"
import partner5 from "../../assets/partner5.png"



const Slider = () => {
  // Example images (replace these with your actual image URLs)
  const images = [
    { src: partner1, alt: "V Mart" },
    { src: partner2, alt: "Prince Career Pioneer" },
    { src: partner3, alt: "Physics Wallah" },
    { src: partner4, alt: "Extra Image 1" },
    { src: partner5, alt: "Extra Image 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 rounded-lg overflow-hidden">
      <div className="flex justify-center items-center w-[70%] mx-4">
        <div className="flex justify-center items-center space-x-4">
          <div className="flex-shrink-0 w-1/3 flex justify-center items-center">
            <img
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.alt}
              className="h-40 w-40 object-contain"
            />
          </div>
          {/* <button
            onClick={handlePrev}
          > */}
            <img src={slideleft} onClick={handlePrev} alt="hfhdfh" className="h-[150px] cursor-pointer"/>
          {/* </button> */}
          <div className="flex-shrink-0 w-1/3 flex justify-center items-center">
            <img
              src={images[currentIndex + 1]?.src}
              alt={images[currentIndex + 1]?.alt}
              className="h-40 w-40 object-contain"
            />
          </div>

          {/* <button
            onClick={handleNext}
          > */}
            <img src={slideright} onClick={handleNext} alt="hfhdfh" className="h-[150px] cursor-pointer"/>
          {/* </button> */}
          <div
            className="flex-shrink-0 w-1/3 flex justify-center items-center"
            style={{
              display: currentIndex < images.length - 1 ? "block" : "none",
            }}
          >
            <img
              src={images[currentIndex + 2]?.src}
              alt={images[currentIndex + 2]?.alt}
              className="h-40 w-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
