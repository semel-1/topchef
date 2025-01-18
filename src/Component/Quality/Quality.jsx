import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionContent from "../SectionContent/SectionContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import image_1 from "../Assets/Chef/kitchen.webp";
import image_2 from "../Assets/Chef/cook.webp";

// FeatureItem Component
const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-3">
    <CheckCircleIcon className="text-yellow-300" fontSize="small" />
    <span className="text-gray-200 text-base font-light">{text}</span>
  </div>
);

const Quality = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const features = [
    "Fresh Ingredients",
    "Expert Chefs",
    "Authentic Recipes",
    "Excellent Service",
  ];

  const motionConfig = {
    initial: { opacity: 0, y: 50 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, ease: "easeInOut" },
  };

  return (
    <section className="bg-darkGray px-10 py-12 md:px-6 lg:px-10 xl:px-28 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-16">
      {/* Text Section */}
      <div className="flex flex-col lg:w-2/5 gap-6 lg:gap-8 justify-center">
        <SectionHeader text="BEST QUALITY" />
        <SectionContent
          title="About the Dishes"
          description="We take pride in the quality of our dishes. From the freshest ingredients to expert chefs, we aim to deliver an unforgettable dining experience. Our team meticulously selects seasonal produce, premium spices, and authentic recipes to ensure every dish not only delights the palate but also tells a story of culinary excellence. Whether you're savoring a classic dish or exploring our innovative creations, you can trust that every bite reflects our passion for perfection."
        />
        <div className="grid grid-cols-2 gap-6 mt-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center md:items-end lg:items-end relative">
        <motion.img
          ref={ref}
          src={image_2}
          alt="Professional Chef Cooking"
          className="lg:w-[40vh] lg:h-[50vh] w-[30vh] h-[40vh] md:w-[35vh] md:h-[45vh] rounded-lg flex -mt-52 mr-[40%] lg:mb-10 md:mb-10 lg:-mr-28 md:-mr-20 z-10"
          {...motionConfig}
        />
        <img
          src={image_1}
          alt="Kitchen with High-Quality Equipment"
          className="lg:w-[70vh] lg:h-[90vh] w-[50vh] h-[70vh] md:w-[60vh] md:h-[80vh] rounded-lg brightness-[2] z-0"
        />
      </div>
    </section>
  );
};

export default Quality;
