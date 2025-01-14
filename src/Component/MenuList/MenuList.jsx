import React from "react";
import MenuListHeader from "./MenuListHeader/MenuListHeader";
import MenuListItem from "./MenuListItem/MenuListItem";

const MenuList = ({ text, listType }) => {
  return (
    <div className="w-full flex flex-col items-center bg-darkGray gap-16 py-16 ">
      <MenuListHeader text={text} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  gap-x-4 gap-y-8 text-white">
        {listType.map((item) => (
          <div key={item.id}>
            <MenuListItem
              name={item.name}
              price={item.price}
              ingredients={item.ingredients}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
