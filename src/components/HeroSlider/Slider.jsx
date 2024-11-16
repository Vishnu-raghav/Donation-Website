import React, { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    image: "https://cfstatic.give.do/96dc1a10-ec5d-4bec-b66a-144107c983ee.webp",
    link: "/donate"
  },
  {
    id: 2,
    image: "https://cfstatic.give.do/19dd28fc-fbe5-49c1-a290-baa7b3afe572.webp",
    link: "/donate"
  },
  {
    id: 3,
    image: "https://cfstatic.give.do/accca69a-241f-421d-bf3f-cdc06cc93698.webp",
    link: "/donate"
  },
  {
    id: 4,
    image: "https://cfstatic.give.do/c08c4a71-9da5-4227-a96c-435997b3b5ba.webp",
    link: "/donate"
  },
  {
    id: 5,
    image: "https://cfstatic.give.do/15edd36b-4533-4914-91e2-cacc8e4f39f2.webp",
    link: "/donate"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <section className="relative h-72 mt-6 ml-4 mr-4 overflow-hidden">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </section>
  );
};

export default HeroSlider;
