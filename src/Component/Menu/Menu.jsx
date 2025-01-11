import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import MenuItem from "./MenuItem/MenuItem";

const images = [
  { src: require("../Assets/Menu/pexels-ganinph-10806019.webp"), alt: "Desserts", title: "Dessert", description: "Ice Cream / Cake / Pudding" },
  { src: require("../Assets/Menu/main.webp"), alt: "Main", title: "Main", description: "Steaks / Grills / Pasta" },
  { src: require("../Assets/Menu/drinks.webp"), alt: "Drinks", title: "Drinks", description: "Cocktail / Juices / Hot Beverages" },
];

const Menu = () => {
  return (
    <div className="bg-darkGray px-4 py-12 md:px-6 lg:px-10 xl:px-16 lg:py-20 flex flex-col gap-8 lg:gap-16">
      {/* Header Section */}
      <div className="flex flex-col lg:w-2/5 gap-6 lg:gap-8 justify-center">
        <SectionHeader text="Menus" />

        {/* Title */}
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          Our Menus
        </h1>

        {/* Description */}
        <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed">
          Discover a variety of delicious options crafted to satisfy your cravings.
          From sweet treats to hearty mains and refreshing beverages, we have something for everyone.
        </p>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 md:px-5">
        {images.map((image, index) => (
          <div
            key={index}
            className={` md:justify-self-center lg:col-span-1 lg:justify-self-auto ${
              index === 2 ? "md:col-span-2 " : "md:col-span-1 "
            }`}
          >
            <MenuItem image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
