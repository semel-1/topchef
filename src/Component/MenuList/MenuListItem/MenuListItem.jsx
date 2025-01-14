import React, { useEffect, useRef, useState } from "react";

const MenuListItem = (props) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Hide when in view
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex flex-col gap-2 lg:px-10 md:px-10 px-0 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-700`}
    >
      <div className="flex flex-col lg:flex-row md:flex-row justify-between">
        <h5 className="text-gray-200 text-xl font-semibold">{props.name}</h5>
        <h5 className="text-gray-200 text-lg font-medium">${props.price}</h5>
      </div>
      <hr className="flex w-full border-yellow-500 h-1" />
      <div className="flex flex-row text-wrap">
        {Array.isArray(props.ingredients) ? (
          props.ingredients.map((desc, index) =>
            index === props.ingredients.length - 1 ? (
              <p className="text-base text-gray-400 font-thin" key={index}>
                {desc}
              </p>
            ) : (
              <p className="text-base text-gray-400 font-thin" key={index}>
                {desc}/
              </p>
            )
          )
        ) : (
          <p className="text-base text-gray-400 font-thin">{props.ingredients}</p>
        )}
      </div>
    </div>
  );
};

export default MenuListItem;
