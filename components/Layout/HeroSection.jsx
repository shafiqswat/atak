/** @format */

import React from "react";
import CustomButton from "../Constants/Button";
// import "../../app/globals.css";
const HeroSection = () => {
  return (
    <section className='text-white ps-10 md:px-48 py-32 grid grid-cols-12 '>
      <div className='col-span-6'>
        <h1 className='text-3xl font-normal uppercase max-w-32'>
          Information Dominance
        </h1>
        <p className='text-[1rem] font-light lg:text-[#9E9E9E] text-[#fcfafa]  mt-12 max-w-56'>
          Theatre to command with TAK server utilization.
        </p>
        <CustomButton className='sm:px-[4.5rem] px-[2rem] py-3 rounded-full mt-3' />
      </div>
    </section>
  );
};

export default HeroSection;
