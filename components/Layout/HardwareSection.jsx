/** @format */

import React from "react";
import Heading from "../Constants/Heading";

const HardwareSection = () => {
  return (
    <div className='lg:grid lg:grid-cols-12 mt-[2rem]'>
      <div className='md:ps-56 px-10 sm:pt-32 lg:col-span-6'>
        <Heading>Hardware</Heading>
        <p className='text-[#89C8E3] text-[11px] mt-2 mb-4 font-light'>
          308 _ Server
        </p>
        <p className='text-white text-[11px] font-light'>Sensors & Trackers</p>
        <div className='mt-20'>
          <p className='text-[#CECECE]'>Introducing the 308_Server:</p>
          <Heading className='mb-3 w-[18rem]'>
            Buiclt for the Battlefield
          </Heading>
          <p className='text-white text-[16px] font-light '>
            Designed for the harshest environments, the 308 Server offers
            unmatched performance and durability. With cutting edge technology
            and modular design in a compact aluminum housing: reliable mesh edge
            computing is achievable across all domains - air, land, sea and
            space.
          </p>
        </div>
      </div>
      <div className='px-10 lg:col-span-6'>
        <img
          src='/images/jacket.png'
          alt='jacket'
          className='w-full h-auto object-cover'
        />
      </div>
    </div>
  );
};

export default HardwareSection;
