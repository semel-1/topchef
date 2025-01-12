import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-darkGray flex flex-col justify-center items-center pt-40 pb-16">
      <h1 className="text-4xl font-bold text-gray-300 mb-10">Top Chef</h1>
      <ul className="flex gap-10 text-yellow-400 font-thin text-sm uppercase cursor-pointer mb-4">
        <li className=" hover:text-gray-200">facebook</li>
        <li className=" hover:text-gray-200">twitter</li>
        <li className=" hover:text-gray-200">instagram</li>
        <li className=" hover:text-gray-200">TRIP ADVISOR</li>
      </ul>
      <p className="text-sm  font-thin capitalize text-gray-400 ">@ 2025 top chef Restaurant by semel. All Right Reserved</p>
    </footer>
  );
};

export default Footer;
