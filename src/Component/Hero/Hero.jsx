import React from 'react';
import TypeWriting from "../TypeWriting/TypeWriting";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,1,1,0.52)] to-[rgba(5,5,5,0.73)] z-10 "></div>
      {/* Responsive Background image */}
      <div className="absolute inset-0 bg-HeroImg_768 lg:bg-HeroImg_1024 bg-cover bg-center z-0"></div>
      {/* Content */}
      <div className="relative z-20 text-center  flex flex-col gap-14">
        <p className="text-gray-300 font-bold text-2xl md:text-3xl lg:text-4xl animate-slideLeft">
          Welcome to our restaurant
        </p>
        <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl animate-slideRight">
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
