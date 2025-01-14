import React from "react";

const MenuListHeader = (props) => {
  return (
    <div className=" w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-3 capitalize ">
        {props.text}
      </h2>
      <div className="flex items-center justify-center gap-3 ">
        <hr className="w-10 lg:w-28 md:w-28 border-0 h-0.5 bg-yellow-500" />
        <h4 className="text-yellow-500 text-4xl font-semibold tracking-widest capitalize">
          *
        </h4>
        <hr className="w-10 lg:w-28 md:w-28 border-0 h-0.5 bg-yellow-500" />
      </div>
    </div>
  );
};

export default MenuListHeader;
