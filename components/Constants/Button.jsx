/** @format */

import React from "react";

const CustomButton = ({ className }) => {
  return (
    <button
      className={`border py-0.5 rounded-xl px-8 text-sm font-medium ${className}`}>
      Contact us
    </button>
  );
};

export default CustomButton;
