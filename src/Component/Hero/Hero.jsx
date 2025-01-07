import React from 'react';
import TypeWriting from "../TypeWriting/TypeWriting";

const Hero = () => {
  return (
    <div className="relative h-[500px] lg:h-[650px] w-full flex flex-col justify-center items-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,1,1,0.52)] to-[rgba(65,65,65,0.73)] z-10 "></div>
      {/* Responsive Background image */}
      <div className="absolute inset-0 bg-HeroImg_320 md:bg-HeroImg_768 lg:bg-HeroImg_1024 bg-cover bg-center z-0"></div>
      {/* Content */}
      <div className="relative z-20 text-center  flex flex-col gap-20">
        <p className="text-white font-bold text-2xl md:text-3xl lg:text-4xl animate-slideLeft">
          Welcome to our restaurant
        </p>
        <h1 className="text-gray-300 font-bold text-xl md:text-2xl lg:text-3xl animate-slideRight">
          We Offer You The Best
        </h1>
        <div className='animate-slideLeft'>
        <TypeWriting  />

        </div>
      </div>
    </div>
  );
};

export default Hero;
