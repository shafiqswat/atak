/** @format */

import React from "react";

const CustomButton = ({ className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border py-0.5 rounded-xl px-8 text-sm font-medium ${className}`}>
      Contact us
    </button>
  );
};

export default CustomButton;
