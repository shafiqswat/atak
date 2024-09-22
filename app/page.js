/** @format */
import Services from "@/components/Constants/Services";
import "../app/globals.css"; // Keep your global styles
import Header from "@/components/Layout/Header";
import HeroSection from "@/components/Layout/HeroSection";
import React from "react";
import LeadingSection from "@/components/Layout/LeadingSection";
import ProductSection from "@/components/Layout/ProductSection";
import HardwareSection from "@/components/Layout/HardwareSection";
import FeatureSection from "@/components/Layout/FeatureSection";
import Enterprise from "@/components/Layout/Enterprise";
import TheaterSection from "@/components/Layout/TheaterSection";
import ServiceSection from "@/components/Layout/ServiceSection";
import TrainingSection from "@/components/Layout/TrainingSection";

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden h-auto'>
      {/* Top Section with Background */}
      <div className='overflow-hidden relative z-50 lg:pb-80 pb-10 lg:min-h-screen bg-[url("/images/globe.png")] bg-no-repeat bg-cover bg-[-60px_10px] lg:bg-[400px_-400px] bg-blue'>
        {/* Background Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-50 z-10 lg:hidden block'></div>

        {/* Content */}
        <div className='relative z-20 text-white'>
          <Header />
          {/* Fixed Scroll Line */}
          <div className='relative w-[5rem]'>
            <img
              src='./images/fixedScroll.png'
              alt='fixedLine'
              className='md:fixed left-9 top-[5rem] bottom-0 hidden lg:block h-[75%] z-50'
            />
          </div>
          <HeroSection />
          <Services />
        </div>
      </div>

      {/* Lower Sections */}
      <div className='bg-blue pb-32 -mt-2 relative -z-10'>
        <LeadingSection />
        <ProductSection />
        <div id='hardware'>
          <HardwareSection />
        </div>
        <FeatureSection />
        <Enterprise />
        <TheaterSection />
        <div id='services'>
          <ServiceSection />
        </div>
        <div id='training'>
          <TrainingSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
