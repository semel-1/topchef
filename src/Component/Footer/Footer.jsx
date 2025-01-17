import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkGray flex flex-col justify-center items-center pt-20 md:pt-40 pb-8 md:pb-16">
      {/* Title Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6 md:mb-10">
        Top Chef
      </h1>
      
      {/* Social Links */}
      <ul className="flex flex-wrap gap-6 md:gap-10 text-yellow-400 font-thin text-xs md:text-sm uppercase cursor-pointer mb-4">
        <li className="hover:text-gray-200">facebook</li>
        <li className="hover:text-gray-200">twitter</li>
        <li className="hover:text-gray-200">instagram</li>
        <li className="hover:text-gray-200">trip advisor</li>
      </ul>
      
      {/* Footer Text */}
      <p className="text-xs md:text-sm font-thin capitalize text-gray-400 text-center">
        @ 2025 top chef restaurant by semel. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
