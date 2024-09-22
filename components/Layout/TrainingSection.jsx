/** @format */

import React from "react";
import Heading from "../Constants/Heading";
import FeatureIcon from "../Constants/FeatureIcon";
import CustomButton from "../Constants/Button";
import ServicesCard from "../Constants/ServicesCard";

const TrainingSection = () => {
  return (
    <section className='md:mt-48 md:ps-48 px-10 text-white'>
      <div className='lg:flex'>
        <div className='py-32 lg:w-[50%]'>
          <Heading className='font-medium'>DAAS Training</Heading>
          <p className='text-[12px] font-normal text-[#9E9E9E]'>
            Empower your team with comprehensive IT and end-user training
            designed to maximize the effectiveness of your TAK server solutions.
            Our expert-led sessions cover everything from basic operations to
            advanced configurations, ensuring your personnel are equipped with
            the knowledge and know-how to operate and maintain a system
            confidently.
          </p>
          <FeatureIcon paraText='Custom Documentation' />
          <FeatureIcon paraText='Plugin Development' />
          <FeatureIcon paraText='TAK Server Deployment and Admin' />
          <FeatureIcon paraText='TAK End User Training' />
          <CustomButton className='rounded-full mt-5' />
        </div>
        <div className='lg:w-[50%] '>
          <img
            src='/images/training.png'
            alt='training'
            className='object-cover'
          />
        </div>
      </div>
      <div className='md:pe-48'>
        <div className='p-8 lg:p-14 lg:flex lg:items-center border-[#1F2B3D]  border-2 bg-[#010710] rounded-xl'>
          <div>
            <h2 className='text-white font-medium text-[1.5rem] md:text-[2rem] w-full md:max-w-[30rem]'>
              Together, we will forge the arsenal of tomorrow.
            </h2>
            <p className='text-[#CECECE] text-[10px] md:text-[12px] font-extralight max-w-[24rem]'>
              Partner with us in building cutting-edge defense technologies to
              empower and protect the next generation of warfighters.
            </p>
          </div>
          <div className='mt-5 lg:mt-0'>
            <button className='bg-white px-10 py-2 rounded-full text-[#020915]'>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
