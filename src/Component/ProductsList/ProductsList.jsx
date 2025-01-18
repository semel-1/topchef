import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductsItem/ProductItem";

const ProductsList = ({ listType = [], title }) => {
  // Configurable constants
  const SCROLL_SPEED = 1; // Speed of auto-scroll
  const SCROLL_INTERVAL = 16; // Update interval in milliseconds

  const [translateX, setTranslateX] = useState(0);
  const productListRef = useRef(null);
  const isUserScrollingRef = useRef(false);

  // Auto-scroll logic
  useEffect(() => {
    const autoScroll = () => {
      if (!isUserScrollingRef.current && productListRef.current) {
        setTranslateX((prev) => {
          const maxScroll =
            productListRef.current.scrollWidth - productListRef.current.offsetWidth;
          return Math.abs(prev) >= maxScroll ? 0 : prev - SCROLL_SPEED;
        });
      }
    };

    const intervalId = setInterval(autoScroll, SCROLL_INTERVAL);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  // Handle user scroll interactions
  const startUserScroll = () => (isUserScrollingRef.current = true);
  const stopUserScroll = () => (isUserScrollingRef.current = false);

  // Display a message if the product list is empty
  if (!Array.isArray(listType) || listType.length === 0) {
    return <p className="text-center text-gray-500">No products available</p>;
  }

  return (
    <div className="relative bg-white text-center py-24">
      <h1 className="mb-5 text-darkGray font-bold text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
      <hr className="mx-auto mb-16 h-1 w-1/2 bg-yellow-500" />
      
      {/* Auto-scrolling product list */}
      <div
        ref={productListRef}
        className="relative overflow-x-scroll overflow-y-hidden whitespace-nowrap px-5 hide-scrollbar"
        onScroll={startUserScroll}
        onMouseUp={stopUserScroll}
        onTouchEnd={stopUserScroll}
      >
        <div
          className="flex gap-5 transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {listType.map((item) => (
            <div
              className="inline-block lg:w-80 md:w-64 w-56 flex-shrink-0"
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
      
      {/* View All Dishes link with animation */}
      <div className="mt-8">
        <Link
          to="/Menu"
          className="text-sm md:text-base lg:text-lg font-bold text-yellow-500 hover:text-yellow-600 transition-colors duration-300 group"
        >
          View All Dishes
          <span className="inline-block ml-2">
            {[200, 300, 500].map((delay, index) => (
              <span
                key={index}
                className={`inline-block opacity-0 translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 delay-${delay}`}
              >
                &gt;
              </span>
            ))}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductsList;
