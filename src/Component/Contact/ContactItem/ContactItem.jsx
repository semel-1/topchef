import React from "react";

const ContactItem = ({ Icon, title, details }) => {
  return (
    <div className="flex items-center gap-5 justify-center">
      {/* Icon */}
      <Icon
        style={{
          fontSize: "3rem",
        }}
        className="text-yellow-500"
        aria-label={title}
      />
      {/* Text Details */}
      <div className="text-gray-200 text-sm w-40 leading-relaxed font-thin md:text-base lg:text-lg">

        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactItem;
