import React from "react";
import MenuList from "../MenuList";

const MenuListWithImage = (props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full h-[50vh]  py-20 bg-gray-900">

        {/* Background image */}
        <div
          className={`h-full absolute inset-0 bg-no-repeat bg-cover bg-center bg-fixed z-0`}
          style={{
            backgroundImage: `url(${props.bgImage})`,
          }}
        ></div>
        
      </div>
      <div className="w-2/3 -mt-28 z-10">
      <MenuList text={props.text} listType={props.listType} />

      </div>
        
    </div>
  );
};

export default MenuListWithImage;
