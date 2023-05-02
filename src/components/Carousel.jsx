import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import BDAW from "../assets/Events/BDAW.png"
import BDAW2 from "../assets/Events/BDAW2.png"
import BDAW3 from "../assets/Events/BDAW3.png"
import BDAW4 from "../assets/Events/BDAW4.png"
import BDAW5 from "../assets/Events/BDAW5.png"
import BDAW6 from "../assets/Events/BDAW6.png"
import BDAW7 from "../assets/Events/BDAW7.png"

function Carousel() {
  
  const slides = [
    {
      url:BDAW,
    },
    {
      url:BDAW2,
    },
    {
      url: BDAW3,
    },

    {
      url: BDAW4,
    },
    {
      url: BDAW5,
    },
    {
      url: BDAW6,
    },
    {
      url: BDAW7,
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      name="Carousel" id="EVENTS"
      className="mt-10 inline-block w-full h-screen   text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Activities so far
          </p>
          <br />
       
    
    <div className='lg:max-w-[900px] lg:h-[600px] max-w-[500px] h-[320px] w-full m-auto py-16 px-4 relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` ,
        }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer text-white'
          >
            <RxDotFilled  />
          </div>
        ))}
      </div>
    </div>
</div>
</div>
</div>
  );
}

export default Carousel;