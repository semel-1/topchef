import React, { useState, useEffect, useRef } from "react";
import ProductItem from "./ProductsItem/ProductItem";

const ProductsList = ({ listType = [], title }) => {
  const [translateX, setTranslateX] = useState(0);
  const productListRef = useRef(null);
  const isUserScrollingRef = useRef(false); // Track if the user is scrolling
  const scrollSpeed = 1; // Adjust for speed of auto-scroll
  const scrollInterval = 16; // Update interval in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isUserScrollingRef.current && productListRef.current) {
        setTranslateX((prevTranslateX) => {
          const maxScroll =
            productListRef.current.scrollWidth -
            productListRef.current.offsetWidth;

          // Reset to the start if we've scrolled past the end
          if (Math.abs(prevTranslateX) >= maxScroll) {
            return 0;
          }

          return prevTranslateX - scrollSpeed;
        });
      }
    }, scrollInterval);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  const handleScrollStart = () => {
    isUserScrollingRef.current = true;
  };

  const handleScrollEnd = () => {
    isUserScrollingRef.current = false;
  };

  if (!Array.isArray(listType) || listType.length === 0) {
    return <p className="text-center text-gray-500">No products available</p>;
  }

  return (
    <div className="relative bg-white text-center h-screen box-content">
      <h1 className="mb-5 pt-24 text-darkGray font-bold text-2xl md:text-3xl lg:text-4xl ">
        {title}
      </h1>
      <hr className="mx-auto mb-16 h-1 w-1/2 bg-yellow-500 " />
      {/* Scrolling Product List */}
      <div
        ref={productListRef}
        className="relative overflow-x-scroll overflow-y-hidden whitespace-nowrap px-5 hide-scrollbar"
        onScroll={handleScrollStart}
        onMouseUp={handleScrollEnd}
        onTouchEnd={handleScrollEnd}
      >
        <div
          className="flex gap-5 transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {listType.map((item) => (
    <div
      className="inline-block lg:w-80 md:w-64 w-56 whitespace-normal flex-shrink-0"
      key={item.id}
    >
      <ProductItem
        id={item.id}
        name={item.name}
        image={item.image}
        category={item.category}
        price={item.price}
      />
    </div>
  ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
