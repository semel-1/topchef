import React from "react";
import Background from "../Component/Background/Background";
import MenuList from "../Component/MenuList/MenuList";
import allProducts from "../Component/Assets/Products/allProducts";
import MenuListWithImage from "../Component/MenuList/MenuListWithImage/MenuListWithImage";
import MainBg from "../Component/Assets/Menu/MainBG.jpg";
import DessertBG from "../Component/Assets/Menu/DessertBG.jpg";
import DrinkBg from "../Component/Assets/Menu/DrinkBG.jpg";

const Menu = () => {
  const signatureDish = allProducts.filter((product) => product.rate > 4.5);
  const main = allProducts.filter((product) => product.category === "main");
  const dessert = allProducts.filter((product) => product.category === "dessert");
  const drink = allProducts.filter((product) => product.category === "drink");


  return (
    <div className="bg-darkGray flex flex-col items-center">
      <Background text="Our Menu" />
      <div className="w-3/4 md:w-2/3 lg:w-2/3">
        <MenuList text="Signature Dish" listType={signatureDish} />
      </div>
      <MenuListWithImage
        text="Main"
        listType={main}
        bgImage={MainBg}
      />
        <MenuListWithImage
        text="Dessert"
        listType={dessert}
        bgImage={DessertBG}
      />
        <MenuListWithImage
        text="Drinks"
        listType={drink}
        bgImage={DrinkBg}
      />
    </div>
  );
};

export default Menu;
