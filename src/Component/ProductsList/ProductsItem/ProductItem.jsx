import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, image, category, price }) => {
  return (
    <div className="lg:w-80 md:w-64 w-56 border-2 my-6 border-gray-300 rounded-xl shadow-md py-4 flex flex-col justify-center hover:-translate-y-2 hover:shadow-xl transition-transform duration-300">
      <Link to={`/product/${id}`}>
        <div className="flex justify-center border-b-yellow-500 border-b-4">
          <img
            src={image}
            alt={name}
            className="w-full sm:w-fit h-56 object-cover rounded"
          />
        </div>
        <h2 className="text-sm lg:text-lg md:text-base font-black mt-2 text-darkGray text-center ">
          {name}
        </h2>
        <p className="text-sm lg:text-lg md:text-base  font-semibold text-gray-600 capitalize text-center ">
          {category}
        </p>
        <p className="text-sm lg:text-lg md:text-base font-black text-yellow-500  text-center ">
          ${price}
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
