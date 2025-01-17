import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionContent from "../SectionContent/SectionContent";
import InputContainer from "./InputContainer/InputContainer";
import ReserveImg from "../Assets/Reserve/reserve-img.webp";

const ReserveTable = () => {
  return (
    <section className="bg-darkGray px-4 py-12 md:px-6 lg:px-10 xl:px-28 lg:py-20 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 justify-between">
      {/* Text Section */}
      <div className="flex flex-col lg:w-1/2 gap-6 lg:gap-8 justify-center">
        <SectionHeader text="YOUR DETAILS" />
        <SectionContent title="Reserve A Table" />
        <form action="" className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">

          {/* Name and Email side-by-side */}
          <div className="lg:col-span-1 md:col-span-1">
            <InputContainer label="Name" type="text" placeholder="John" />
          </div>
          <div className="lg:col-span-1 md:col-span-1">
            <InputContainer label="Email Address" type="email" placeholder="email@gmail.com" />
          </div>

          {/* Mobile Number full row */}
          <div className="col-span-1 lg:col-span-2 md:col-span-2">
            <InputContainer label="Mobile number" type="tel" placeholder="(00) 88123456789" />
          </div>

          {/* Date and Time side-by-side */}
          <div className="lg:col-span-1 md:col-span-1">
            <InputContainer label="Date" type="date"  className="uppercase" />
          </div>
          <div className="lg:col-span-1 md:col-span-1">
            <InputContainer label="Time" type="time" placeholder="Select time" />
          </div>

          {/* Number of people full row */}
          <div className="col-span-1 lg:col-span-2 md:col-span-2">
            <InputContainer label="Number of people" type="number" placeholder="Select" />
          </div>
          <button type="submit" className="bg-yellow-500 uppercase h-14 mt-8 text-darkGray border-[1px] border-darkGray hover:bg-darkGray hover:text-yellow-500 transition-colors duration-300 hover:border-yellow-500 ">Make a reservation</button>
        </form>
      </div>
      <div className="flex items-end justify-end lg:w-2/5 md:w-full ">
        <img src={ReserveImg} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default ReserveTable;
