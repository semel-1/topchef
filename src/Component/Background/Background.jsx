import React from "react";

const Background = (props) => {
  return (
    <section className="relative w-full h-[70vh] py-36 bg-gray-900 ">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-darkGray/40 z-10"></div>

      {/* Background image */}
      <div className="absolute  inset-0 bg-AboutBG_768 md:bg-AboutBG_1024 lg:bg-AboutBG bg-cover bg-center  z-0"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-center uppercase">
          {props.text}
        </h1>
      </div>
    </section>
  );
};

export default Background;
