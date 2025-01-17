import React from "react";
import SectionContent from "../SectionContent/SectionContent";
import ChefInfo from "../Menu/MenuItem/MenuItem"

const images = [
  { 
    src: require("../Assets/Chef/chef1.webp"), 
    alt: "Assistan chef", 
    title: "Ethan Carter", 
    description: "Assistan chef", 
  },
  { 
    src: require("../Assets/Chef/chef2.webp"), 
    alt: "Chef", 
    title: "Liam Johnson", 
    description: "Chef", 
  },
  { 
    src: require("../Assets/Chef/chef3.webp"), 
    alt: "Assistan chef", 
    title: " Noah Ramirez", 
    description: "Assistan chef", 
     
  },
];
const Chefs = () => {
  return (
    <section className="bg-darkGray flex flex-col justify-center items-center gap-6 lg:gap-8 pt-20 pb-48">
      <div className="flex items-center gap-3 ">
        <hr className="w-10 md:w-12 lg:w-16 border-0 h-0.5 bg-yellow-300" />
        <h4 className="text-yellow-300 text-sm md:text-base lg:text-xl font-semibold tracking-widest capitalize">
          our chef
        </h4>
        <hr className="w-10 md:w-12 lg:w-16 border-0 h-0.5 bg-yellow-300" />
      </div>
      <div className="text-center w-3/5 lg:w-2/5  ">
        <SectionContent
          title="Behind The Kitchen"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro, nihil maiores possimus quas quo placeat sint commodi fugiat temporibus! "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-16 md:px-5 py-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`md:justify-self-center lg:col-span-1 lg:justify-self-auto ${
              index === 2 ? "md:col-span-2 " : "md:col-span-1 "
            }`}
          >
            <ChefInfo image={image}  />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
