import React from "react";
import Hero from "../Component/Hero/Hero";
import ProductsList from "../Component/ProductsList/ProductsList";
import allProducts from "../Component/Assets/Products/allProducts";
import Story from "../Component/Story/Story";
import About from "../Component/About/About";

const Home = () => {
  const popular = allProducts.filter((product)=>
    product.rate>4.5
  )
  

  return (
    <div>
      <Hero />
      <ProductsList listType={popular} title="Popular Dishes" />
      <Story/>
      <About/>
      <div className="bg-darkGray h-screen "></div>
    </div>
  );
};

export default Home;
