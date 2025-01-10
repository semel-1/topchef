import React from "react";
import { useInView } from "react-intersection-observer";
import StatCard from "./StatCard/StatCard";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const stats = [
  {
    icon: (
      <RestaurantOutlinedIcon fontSize="large" className="text-yellow-300" />
    ),
    value: 50,
    label: "Variety of Cuisine",
  },
  {
    icon: <UpdateIcon fontSize="large" className="text-yellow-300" />,
    value: 20,
    label: "Years of Experience",
  },
  {
    icon: (
      <Diversity1OutlinedIcon fontSize="large" className="text-yellow-300" />
    ),
    value: 90,
    label: "Satisfied Customers",
  },
  {
    icon: (
      <StorefrontOutlinedIcon fontSize="large" className="text-yellow-300" />
    ),
    value: 100,
    label: "Restaurant Capacity",
  },
];

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const animationDuration = 2.5; // Duration in seconds

  return (
    <section ref={ref} className="relative w-full py-36 bg-gray-900 ">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-800/80 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 bg-AboutBG_768 md:bg-AboutBG_1024 lg:bg-AboutBG bg-cover bg-center bg-fixed z-0"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
          About Us
        </h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full transition-opacity ${
            inView ? "opacity-100" : "opacity-0"
          } duration-1000`}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              inView={inView}
              duration={animationDuration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
