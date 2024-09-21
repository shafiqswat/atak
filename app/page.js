/** @format */
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
    <div className='bg-blue w-full relative overflow-x-hidden h-auto pb-32'>
      {/* <div className='bg-[url("/images/globe.png")] bg-no-repeat bg-cover bg-[400px_-800px] relative z-30 min-h-[500px] sm:bg-[400px_-400px]'> */}
      <Header />
      <div className='text-white relative w-[5rem]'>
        <img
          src='./images/fixedScroll.png'
          alt='fixedLine'
          className='md:fixed left-9 top-[5rem] bottom-0 hidden lg:block h-[75%]'
        />
      </div>
      <HeroSection />
      {/* </div> */}
      <Services />
      <LeadingSection />
      <ProductSection />
      <HardwareSection />
      <FeatureSection />
      <Enterprise />
      <TheaterSection />
      <ServiceSection />
      <TrainingSection />
    </div>
  );
};

export default Home;
