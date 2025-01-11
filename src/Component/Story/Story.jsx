import React from "react";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkillBar from "../SkillBar/SkillBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { motion } from "framer-motion";

const images = [
  { src: require("../Assets/Story/special-menu.webp"), alt: "Special Menu" },
  { src: require("../Assets/Story/tuna.webp"), alt: "Tuna Dish" },
  { src: require("../Assets/Story/sate.webp"), alt: "Sate Dish" },
];

const Story = () => {
  const skills = [
    { skill: "Frequent Customers", level: 87 },
    { skill: "Satisfied Customers", level: 95 },
    { skill: "Timeliness of Service", level: 90 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <section
      ref={ref}
      className="bg-darkGray px-4 py-12 md:px-6 lg:px-10 xl:px-16 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-16"
    >
      {/* Text and Skills Section */}
      <div className="flex flex-col lg:w-2/5 gap-6 lg:gap-8 justify-center">
        {/* Section Header */}
        <SectionHeader text="OUR STORY" />

        {/* Title */}
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          The Story
        </h1>

        {/* Description */}
        <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur incidunt voluptatum labore in vel tempora quam omnis
          maiores, inventore recusandae, quae tenetur excepturi. Qui ipsam magni
          quas molestiae deserunt?
        </p>

        {/* Skills */}
        <div className="space-y-4">
          {skills.map((skill) => (
            <SkillBar
              key={skill.skill}
              skill={skill.skill}
              level={skill.level}
              startAnimation={inView}
            />
          ))}
        </div>
      </div>

      {/* Images Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full lg:w-3/5"
      >
        <ImageGallery images={images} />
      </motion.section>
    </section>
  );
};

export default Story;
