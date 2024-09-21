/** @format */

import React from "react";

const ServicesCard = ({
  IconsPath,
  titleText,
  ParaText,
  className,
  children,
}) => {
  return (
    <div className='bg-[#010710] h-full  border-2 border-[#1F2B3D]  p-5 pb-0 rounded-xl mt-5'>
      {children}
      <p className='text-white text-[14px] font-medium'>{titleText}</p>
      <div className=''>
        <p className='text-[#CECECE] text-[11px] font-normal max-w-[20rem]'>
          {ParaText}
        </p>
      </div>
      <div className={`${className}`}>
        <img
          src={IconsPath}
          alt='hardwareIcon'
          className='object-cover max-w-full h-auto'
        />
      </div>
    </div>
  );
};

export default ServicesCard;
