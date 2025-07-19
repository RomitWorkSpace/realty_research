import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import P1 from 'imgPath/blog1.jpg'
import P2 from 'imgPath/list1.jpg'
import P3 from 'imgPath/list2.jpg'

const ProjectSlider = ({images}) => {
  // const images = [
  //   {
  //     id: 1,
  //     url: P1,
  //     alt: "Smart Watch Product"
  //   },
  //   {
  //     id: 2,
  //     url: P2,
  //     alt: "Smart Watch Side View"
  //   },
  //   {
  //     id: 3,
  //     url: P3,
  //     alt: "Smart Watch Features"
  //   },
  //   {
  //     id: 4,
  //     url: P1,
  //     alt: "Smart Watch Close Up"
  //   }
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative md:flex">
        {/* Main Image */}
        <div className="relative w-full md:w-4/5 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={`/images/property/${images[currentIndex]}`}
            alt="property image"
            className="w-full h-full object-cover transition-transform duration-500"
            onError={(e) => {
              e.target.src = P1;
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-200"
          >
            <FaArrowLeft className="text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-200"
          >
            <FaArrowRight className="text-gray-800" />
          </button>
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-4 md:w-1/5">
          <div className="flex gap-2 justify-center md:flex-col">
            {images.map((property, index) => (
              <>
                <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden md:m-auto ${
                  currentIndex === index
                    ? "ring-2 ring-blue-500"
                    : "ring-1 ring-gray-200"
                }`}
              >
                <img
                  src={`/images/property/${property}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30";
                  }}
                />
              </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
