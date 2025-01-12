import React from "react";
import CountUp from "react-countup";

const StatCard = React.memo(({ icon, value, label, inView, duration }) => (
  <div
    className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
    aria-label={`${label}: ${value}`}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-4xl font-thin text-yellow-300">
      {inView ? (
        <CountUp start={0} end={value} duration={duration} useEasing />
      ) : (
        "0"
      )}
    </h3>
    <p className="text-white text-center mt-1">{label}</p>
  </div>
));

export default StatCard;
