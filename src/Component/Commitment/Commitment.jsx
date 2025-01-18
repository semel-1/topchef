import React, { useEffect, useRef, useState } from "react";
import image1 from "../Assets/Reserve/friends-sits.webp";
import image2 from "../Assets/Reserve/family-friends.webp";

const Commitment = () => {
  const textRefs = useRef([]); // Store refs for all text elements
  const [visibility, setVisibility] = useState({}); // Track visibility for each text

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibility((prev) => ({
            ...prev,
            [entry.target.dataset.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    if (textRefs.current.length > 0) {
      textRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (textRefs.current.length > 0) {
        textRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-darkGray text-gray-200 px-10 py-12 md:px-6 lg:px-10 xl:px-28 lg:py-20 gap-8 lg:gap-40">
      <div className="flex flex-col w-full lg:w-3/5 gap-10">
        <img src={image1} alt="Friends sitting together" />
        <h3
          ref={(el) => (textRefs.current[0] = el)}
          data-id="0"
          className={`text-base md:text-lg lg:text-xl font-semibold leading-snug ${
            visibility[0] ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-1000`}
        >
          We provide valuable experiences that you will never forget with your
          friends or partner. Delicious food and refreshing drinks will make you
          feel more happy and satisfied.
        </h3>
      </div>
      <div className="flex flex-col w-full lg:w-2/6 gap-4">
        <h2
          ref={(el) => (textRefs.current[1] = el)}
          data-id="1"
          className={`text-xl md:text-2xl lg:text-3xl font-normal tracking-[0.4rem] leading-snug capitalize ${
            visibility[1] ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-[2000ms]`}
        >
          OUR COMMITMENT
        </h2>
        <h6
          ref={(el) => (textRefs.current[2] = el)}
          data-id="2"
          className={`text-yellow-50 font-thin lg:text-base m-0 ${
            visibility[2] ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity  duration-[2000ms]`}
        >
          We are committed to providing the best and serving wholeheartedly to
          customers. We will provide the best service from waiters to chefs who
          work with us. A typical dish with great Indonesian taste with an
          abundant and delicious flavors on the tongue, giving satisfaction to
          the heart.
        </h6>
        <h6
          ref={(el) => (textRefs.current[3] = el)}
          data-id="3"
          className={`text-yellow-50 font-thin lg:text-base m-0 ${
            visibility[3] ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity  duration-[2000ms]`}
        >
          We will give the best from our restaurant so that you come home
          feeling happy and satisfied because you have coming from our
          restaurant. Hopefully you will feel satisfaction from our restaurant
          services.
        </h6>
        <img src={image2} alt="Family and friends dining" className="mt-3" />
      </div>
    </div>
  );
};

export default Commitment;
