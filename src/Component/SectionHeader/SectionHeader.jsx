import React from "react";

const SectionHeader = ({ text }) => (
  <div className="flex items-center gap-3">
    <hr className="w-10 md:w-12 lg:w-16 border-0 h-0.5 bg-yellow-300" />
    <h4 className="text-yellow-300 text-sm md:text-base lg:text-xl font-semibold tracking-widest capitalize">
      {text}
    </h4>
  </div>
);

export default SectionHeader;
