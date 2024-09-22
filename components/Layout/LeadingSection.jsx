/** @format */

import React from "react";
import Heading from "../Constants/Heading";

const LeadingSection = () => {
  return (
    <div className='md:px-56 px-10 sm:py-32'>
      <div className='px-10'>
        <img
          src='/images/smallGlobe.png'
          alt='smallGlobe'
          className='block sm:hidden w-full h-auto'
        />
      </div>
      <Heading>
        Leading the <span className='text-[#89C8E3]'> CJADC2 </span> initiative
        by developing next-gen solutions that coordinate military assets across
        all warfighting domains.
      </Heading>
    </div>
  );
};

export default LeadingSection;
