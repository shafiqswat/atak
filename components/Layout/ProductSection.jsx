/** @format */

import React from "react";
import Heading from "../Constants/Heading";
import ProductCard from "../Constants/ProductCard";

const ProductSection = () => {
  return (
    <>
      <div className='md:px-56 px-10 md:pt-32'>
        <Heading className='max-w-[20rem]'>
          DAAS offers three product solutions:
        </Heading>
        <p className='text-[#CECECE] max-w-[35rem] mt-4 text-sm mb-5'>
          From cutting-edge hardware to expert services and tailored training,
          DAAS provides the complete package to ensure your team has the tools,
          support, and knowledge they need to achieve mission success.
        </p>
      </div>
      <div className='md:px-48 lg:flex gap-4 px-10'>
        <ProductCard
          IconPath='/images/HardwareIcon.png'
          HeadingText='Hardware'
          ParaText='Purpose built edge servers, sensors, and communication platforms ensure
        reliable performance in adverse environments.'
        />
        <ProductCard
          IconPath='/images/ServiceIcon.png'
          HeadingText='Services & Support'
          ParaText="Expertise in cloud and on-premises hosting solutions, along with custom plugin development to enhance and tailor your system and team's capabilities."
        />
        <ProductCard
          IconPath='/images/TrainingIcon.png'
          HeadingText='Training'
          ParaText="Tailored training programs for both technical and non-technical staff, including private scripts, documentation, and 'Train the Trainer' sessions. "
        />
      </div>
    </>
  );
};

export default ProductSection;
