import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ image, link }) => (
  <Link to={link}>
    <div className="text-center group overflow-hidden cursor-pointer">
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[480px] overflow-hidden rounded-lg">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50" 
        />
      </div>
      <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-light text-yellow-500 uppercase mt-4 sm:mt-6 md:mt-8 mb-1">
        {image.title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base font-light text-gray-300">
        {image.description}
      </p>
    </div>
  </Link>
);

export default MenuItem;
