/** @format */
"use client";

import React, { useState } from "react";
import CustomButton from "../Constants/Button";
import { MenuIcon } from "../Constants/SvgIcons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to scroll smoothly to a section by its ID
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className='sm:flex sm:items-center md:ps-[7.5rem] sm:pe-4 py-3 text-sm text-white'>
      <div className='flex items-center justify-between px-10 py-3 sm:p-0'>
        <div className='sm:px-5 md:px-14'>
          <img
            src='/images/logo.png'
            alt='Logo'
            className='h-3 cursor-pointer'
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
        <div className='sm:hidden'>
          <button
            onClick={toggleMenu}
            type='button'
            className='block'>
            <MenuIcon />
          </button>
        </div>
      </div>
      <nav
        className={`px-2 pt-2 pb-4 sm:flex sm:items-center sm:p-0 ${
          isOpen ? "block" : "hidden"
        }`}>
        <button
          onClick={() => handleScrollTo("hardware")}
          className='block px-10 sm:px-3 py-1'>
          Hardware
        </button>
        <button
          onClick={() => handleScrollTo("services")}
          className='sm:mt-0 sm:ml-2 block px-10 sm:px-3 py-1'>
          Services
        </button>
        <button
          onClick={() => handleScrollTo("training")}
          className='sm:mt-0 sm:ml-2 block px-10 sm:px-3 py-1'>
          Training
        </button>
        <button
          onClick={() => handleScrollTo("contact")}
          className='sm:mt-0 sm:ml-2 block px-10 sm:px-5 md:px-10 py-1'>
          <CustomButton />
        </button>
      </nav>
    </header>
  );
};

export default Header;
