import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionContent from "../SectionContent/SectionContent";
import MenuItem from "./MenuItem/MenuItem";

const images = [
  { 
    src: require("../Assets/Menu/dessert.webp"), 
    alt: "Desserts", 
    title: "Desserts", 
    description: "Ice Cream / Cake / Pudding", 
    link: "/menu#dessert" 
  },
  { 
    src: require("../Assets/Menu/main.webp"), 
    alt: "Main", 
    title: "Main Dishes", 
    description: "Steaks / Grills / Pasta", 
    link: "/menu#main" 
  },
  { 
    src: require("../Assets/Menu/drinks.webp"), 
    alt: "Drinks", 
    title: "Drinks", 
    description: "Cocktail / Juices / Hot Beverages", 
    link: "/menu#drink" 
  },
];


const Menu = () => {
  return (
    <div className="bg-darkGray px-10 py-12 md:px-6 lg:px-10 xl:px-28 lg:py-20 flex flex-col gap-8 lg:gap-16">
      <div className="flex flex-col lg:w-2/5 gap-6 lg:gap-8 justify-center">
        <SectionHeader text="Menus" />
        <SectionContent
        title="Our Menus"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur incidunt voluptatum labore in vel tempora quam omnis maiores, inventore recusandae, quae tenetur excepturi. Qui ipsam magni quas molestiae deserunt?"
      />
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 md:px-5">
        {images.map((image, index) => (
          <div
            key={index}
            className={`md:justify-self-center lg:col-span-1 lg:justify-self-auto ${
              index === 2 ? "md:col-span-2 " : "md:col-span-1 "
            }`}
          >
            <MenuItem image={image} link={image.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
