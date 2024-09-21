/** @format */

import React from "react";
import Heading from "../Constants/Heading";

const Enterprise = () => {
  return (
    <section className='md:mt-48 md:ps-48 px-10 grid grid-cols-12 text-white'>
      <div className='py-32 lg:col-span-4 col-span-12'>
        <Heading className='w-[15rem] max-w-full'>
          Enterprise power in the palm of your hand
        </Heading>
        <p className='text-[#CECECE] mt-3 text-[12px] max-w-[15rem]'>
          Despite its robust capabilities, the 308 Server boasts a compact,
          man-portable size. Comparable to the dimensions of a Samsung Galaxy S9
          (EUD), this lightweight server is designed to be easily transported
          for rapid setup in the field.
        </p>
      </div>
      {/* Flex container to align both images to the bottom */}
      <div className='lg:col-span-8 col-span-12 flex justify-around items-end'>
        <div className=''>
          <img
            src='/images/galaxy.png'
            alt='galaxy'
            className='mx-auto'
          />
          <p className='text-center'>Galaxy S9 EUD</p>
        </div>
        <div className=''>
          <img
            src='/images/server.png'
            alt='server'
            className='mx-auto'
          />
          <p className='text-center'>308_SERVER</p>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
