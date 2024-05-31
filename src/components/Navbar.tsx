import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hidden md:flex justify-end items-center gap-5 bg-black text-[#E5E5E5] text-[14px] h-[67px]  px-12 mb-5 shadow max-w-[1440px]">
        <a href="/">Home</a>
        <a href="/" className="underline">
          Explore
        </a>
        <a href="/">Pricing</a>
        <a href="/">Account</a>
        <a href="/">Settings</a>
        <button className="bg-[#C2D5F7] text-black rounded-full px-2 py-2 text-[12px]">
          <a href="/">Sign Out</a>
        </button>
      </div>

      <div className="md:hidden flex items-center justify-end bg-black text-[#E5E5E5] h-[67px] px-5">
        {/* <a href="/" className="text-xl font-bold">
          Logo
        </a>{" "} */}
        {/* You can add your logo or brand name here */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.900269V3.88781H23V0.900269H0ZM0 6.87534V9.86288H17.25V6.87534H0ZM0 12.8504V15.838H23V12.8504H0ZM0 18.8255V21.813H17.25V18.8255H0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black`}>
        <div className="mt-2 px-2 pt-2 text-center pb-4 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white"
          >
            Home
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white underline"
          >
            Explore
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white"
          >
            Pricing
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white"
          >
            Account
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white"
          >
            Settings
          </a>
          <button className="bg-[#C2D5F7] text-black rounded-full px-2 py-2 text-[12px]">
            <a href="/">Sign Out</a>
          </button>
        </div>
      </div>

      {/* mb view */}
    </div>
  );
};

export default Navbar;
