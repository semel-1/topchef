// SectionContent.js
import React from 'react';

const SectionContent = ({ title, description }) => {
  return (
    <section className='flex flex-col gap-6 lg:gap-8'>
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug capitalize">
        {title}
      </h1>
      <p className="text-yellow-50 text-sm md:text-base lg:text-lg leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default SectionContent;
