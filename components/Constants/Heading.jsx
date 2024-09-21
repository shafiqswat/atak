/** @format */

import React from "react";

const Heading = ({ className, children }) => {
  return (
    <h2
      className={`sm:text-2xl text-xl font-normal sm:max-w-[30rem]  text-white ${className}`}>
      {children}
    </h2>
  );
};

export default Heading;
