// Carousel.tsx
import React, { useState, useEffect } from "react";
import { Slide } from "../../interfaces/slide"; // Adjust the import path as necessary

interface CarouselProps {
  slides: Slide[];
  title?: string;
  autoSlideInterval?: number; // Optional auto-slide interval in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoSlideInterval = 5000,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(intervalId); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoSlideInterval]);

  return (
    <div className="carousel h-full w-full relative box-border overflow-hidden">
      <p className="absolute top-20 left-20 z-10 text-white">{title}</p>
      <div className="carousel-action absolute top-3/4 left-20 z-10 flex gap-5">
        <button
          className="carousel-button m-0 p-0 prev glass-dark flex items-center justify-center bg-black/40 text-white aspect-square w-12 text-2xl rounded-full"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="carousel-button m-0 p-0 next glass-dark flex items-center justify-center bg-black/40 text-white aspect-square w-12 text-2xl rounded-full"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
      <ul className="list-none m-0 p-0 h-full w-full overflow-hidden">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`slide absolute inset-0 transition-opacity duration-700 ease-in-out  ${
              index === currentIndex ? "opacity-100 z-1" : "opacity-0 z-0"
            }`}
            data-active={index === currentIndex}
          >
            <div className="carousel-text absolute flex flex-col items-center md:items-start lg:w-1/2 justify-center px-20 inset-0 z-1">
              <p className="text-amber-50 text-xl md:text-4xl mb-2 animate__animated animate__fadeInLeft">
                <q>{slide.carouselText}</q>
              </p>
              <p className="text-amber-50 text-sm md:text-2xl z-[5]">
                {slide.carouselSubtitle}
              </p>
            </div>
            <img
              className="block w-full h-full object-cover object-center"
              src={slide.img}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
