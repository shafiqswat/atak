/** @format */

import React from "react";

const FeatureIcon = ({ paraText }) => {
  return (
    <div className='flex mt-3'>
      <img
        src='/images/checkmark.png'
        alt='check'
        className='mr-3 w-6 h-6'
      />
      <p className='font-normal text-[12px]'>{paraText}</p>
    </div>
  );
};

export default FeatureIcon;
