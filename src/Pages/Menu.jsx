import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../Component/Background/Background";
import MenuList from "../Component/MenuList/MenuList";
import allProducts from "../Component/Assets/Products/allProducts";
import MenuListWithImage from "../Component/MenuList/MenuListWithImage/MenuListWithImage";
import MainBg from "../Component/Assets/Menu/MainBG.webp";
import DessertBG from "../Component/Assets/Menu/DessertBG.webp";
import DrinkBg from "../Component/Assets/Menu/DrinkBG.webp";

const Menu = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section if there is a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const signatureDish = allProducts.filter((product) => product.rate > 4.5);
  const main = allProducts.filter((product) => product.category === "main");
  const dessert = allProducts.filter((product) => product.category === "dessert");
  const drink = allProducts.filter((product) => product.category === "drink");

  return (
    <div className="bg-darkGray flex flex-col items-center">
      <Background text="Our Menu" image="MenuBG" />
      <div className="w-3/4 md:w-2/3 lg:w-2/3">
        <MenuList text="Signature Dishes" listType={signatureDish} />
      </div>
      <div id="main" className="menu-section w-full">
        <MenuListWithImage text="Main" listType={main} bgImage={MainBg} />
      </div>
      <div id="dessert" className="menu-section w-full">
        <MenuListWithImage text="Dessert" listType={dessert} bgImage={DessertBG} />
      </div>
      <div id="drink" className="menu-section w-full">
        <MenuListWithImage text="Drinks" listType={drink} bgImage={DrinkBg} />
      </div>
    </div>
  );
};

export default Menu;
