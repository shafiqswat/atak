/** @format */

import React from "react";
import ServicesCard from "../Constants/ServicesCard";

const ServiceSection = () => {
  return (
    <section className='md:mt-48 pt-2'>
      <h2 className='text-white text-center'>Our Services</h2>
      <div className='md:px-48 px-10'>
        <div className='lg:flex gap-5'>
          <div className='lg:w-[30%]'>
            <ServicesCard
              className='mt-14'
              titleText='Cloud Hosting & Management'
              ParaText='Leverage our robust cloud hosting and management solutions to ensure your TAK server is always available, scalable, and secure.'
              IconsPath='/images/cloudIcon.png'
            />
          </div>
          <div className='lg:w-[40%]'>
            <ServicesCard
              className='mt-14'
              titleText='End To End Deployments (Hardware & Software)'
              ParaText='Streamline your TAK server deployment with our comprehensive end-to-end solutions. We manage everything from hardware procurement & provisioning to software configuration and documentation.'
              IconsPath='/images/softwareIcon.png'
            />
          </div>
          <div className='lg:w-[30%]'>
            <ServicesCard
              className='mt-14'
              titleText='Custom Plugin Development'
              ParaText='Enhance your TAK server capabilities with our custom plugin development services (ATAK & TAK Server). We design and build bespoke plugins to extend functionality, integrate new features, and improve user experience.'
              IconsPath='/images/coding.png'
            />
          </div>
        </div>
        {/*  */}
        <div className='lg:flex gap-5'>
          <div className='lg:w-[70%] mt-2'>
            <ServicesCard
              cardClassName='pb-0'
              className=' h-fit'
              titleText='PLI Feeders (ADSB, AIS, Satellite PLI)'
              ParaText='Receive real-time data seamlessly with our cloud and hardware COT feeders. We specialize in integrating ADS-B, AIS, and Satellite PLI feeds into your TAK server, providing accurate and timely situational awareness data critical to your operations.'
              IconsPath='/images/satellite.png'
            />
          </div>
          <div className='lg:w-[30%] mt-2'>
            <ServicesCard
              cardClassName='pb-0'
              className='h-fit m-0'
              titleText='Geospatial Data / Imagery (Including DTED)'
              ParaText='Receive real-time data seamlessly with our cloud and hardware COT feeders. We specialize in integrating ADS-B, AIS, and Satellite PLI feeds into your TAK server, providing accurate and timely situational awareness data critical to your operations.'
              IconsPath='/images/geoSatellite.png'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
