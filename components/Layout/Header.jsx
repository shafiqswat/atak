/** @format */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import CustomButton from "../Constants/Button";
import { MenuIcon } from "../Constants/SvgIcons";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const router = useRouter();

  return (
    <header className='sm:flex sm:items-center md:ps-[7.5rem] sm:pe-4 py-3 text-sm text-white'>
      <div className='flex items-center justify-between px-10 py-3 sm:p-0'>
        <div
          onClick={() => {
            router.push("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className='sm:px-5 md:px-14'>
          <img
            src='/images/logo.png'
            alt='Logo'
            className='h-3 cursor-pointer'
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
        <Link
          href='#hardware'
          className='block px-10 sm:px-3 py-1'
          onClick={closeMenu}>
          Hardware
        </Link>
        <Link
          href='#services'
          className='sm:mt-0 sm:ml-2 block px-10 sm:px-3 py-1'
          onClick={closeMenu}>
          Services
        </Link>
        <Link
          href='#training'
          className='sm:mt-0 sm:ml-2 block px-10 sm:px-3 py-1'
          onClick={closeMenu}>
          Training
        </Link>
        <Link
          href='#contact'
          className='sm:mt-0 sm:ml-2 block px-10 sm:px-5 md:px-10 py-1'
          onClick={closeMenu}>
          <CustomButton />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
