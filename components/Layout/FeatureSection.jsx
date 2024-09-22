/** @format */

import React from "react";
import Heading from "../Constants/Heading";
import FeatureIcon from "../Constants/FeatureIcon";
import CustomButton from "../Constants/Button";

const FeatureSection = () => {
  return (
    <section className='lg:grid lg:grid-cols-12'>
      <div className='md:ps-56 px-10 sm:pt-32 lg:col-span-6 text-white'>
        <Heading>Product Features</Heading>
        <p className='font-normal text-[12px] text-[#9E9E9E] max-w-[30rem]'>
          The 308 Server is your ultimate solution for military, search and
          rescue, and high-tech applications, offering the perfect blend of
          power, resilience, and flexibility for even the harshest environments.
        </p>
        <FeatureIcon paraText='IP6x Rated: Dust-tight with complete protection against contact.' />
        <FeatureIcon paraText='IPx8 Rated: Suitable for continuous immersion in water' />
        <FeatureIcon paraText='Operating Temperature: Functional in ambient temperatures ranging from -20°C to 50°C.' />
        <FeatureIcon paraText='MIL-STD-810F Compliance: Designed to survive a 1-meter drop onto concrete.' />
        <FeatureIcon paraText='Wide Voltage Input: Supports 9-48V DC input for flexible power solutions.' />
        <CustomButton className='sm:px-[4.5rem] px-[2rem] py-3 rounded-full mt-3' />
      </div>
      <div className='md:ps-56 md:pe-32 px-10 lg:col-span-6 '>
        <img
          src='/images/server.png'
          alt='jacket'
          className='w-[26rem] h-auto object-cover hidden lg:block mx-auto'
        />
        <img
          src='/images/server1.png'
          alt='server'
          className='w-full h-auto object-cover lg:hidden block mt-20 '
        />
      </div>
    </section>
  );
};

export default FeatureSection;
