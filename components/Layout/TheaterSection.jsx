/** @format */

import React from "react";
import Heading from "../Constants/Heading";

const TheaterSection = () => {
  return (
    <div className='text-white py-32 md:px-48 ps-10 md:mt-20'>
      {/* Section Title */}
      <div className='lg:text-center'>
        <Heading className='w-80 max-w-full lg:mx-auto'>
          Theater to Command with TAK server utilization
        </Heading>
        <p className='max-w-[29rem] lg:mx-auto text-[12px] font-light mt-3'>
          The 308 Server enables seamless theater-to-cloud-to-command
          connectivity. From field operations to secure cloud services and
          command centers, it ensures continuous, real-time data flow and
          coordination for mission-critical decisions.
        </p>
      </div>

      {/* Theater, Cloud, Command Section */}
      <div className='flex items-center justify-center mt-20 gap-0'>
        {/* Theater Block */}
        <div className='text-center lg:w-1/4 w-full -mr-7'>
          <img
            src='/images/theater.png'
            alt='Theater'
            className='w-full'
          />
          <p className='mt-5 text-sm'>Theater</p>
        </div>

        {/* Arrow between Theater and Cloud */}
        <div className='lg:w-1/12 w-10 flex-shrink-0 sm:-mr-7'>
          <img
            src='/images/arrowRight.png'
            alt='Arrow Right'
            className='w-full h-auto'
          />
        </div>

        {/* Cloud Block */}
        <div className='text-center lg:w-1/4 hidden lg:block -mr-7'>
          <img
            src='/images/cloud.png'
            alt='Cloud'
            className='w-full h-auto'
          />
          <p className='mt-5 text-sm'>Cloud</p>
        </div>

        {/* Arrow between Cloud and Command */}
        <div className='lg:w-1/12 hidden lg:block flex-shrink-0 -mr-7'>
          <img
            src='/images/arrowRight.png'
            alt='Arrow Right'
            className='w-full h-auto'
          />
        </div>

        {/* Command Block */}
        <div className='text-center lg:w-1/4 hidden lg:block'>
          <img
            src='/images/command.png'
            alt='Command'
            className='w-full h-auto'
          />
          <p className='mt-5 text-sm'>Command</p>
        </div>
      </div>
    </div>
  );
};

export default TheaterSection;
