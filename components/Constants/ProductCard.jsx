/** @format */

import React from "react";
import Heading from "./Heading";

const ProductCard = ({ IconPath, HeadingText, ParaText }) => {
  return (
    <div className='bg-[#010710] border border-[#1F2B3D]  p-3 rounded-xl mt-5'>
      <img
        src={IconPath}
        alt='hardwareIcon'
      />
      <Heading className='mt-3 text-xl'>{HeadingText}</Heading>
      <div className='mb-5'>
        <p className='text-white text-[11px] font-light max-w-[20rem]'>
          {ParaText}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
