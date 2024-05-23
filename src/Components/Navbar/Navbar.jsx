import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavbarMenu from "./NavbarMenu";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed  top-0 left-0 z-50 w-screen md:w-full bg-[#020202] border-b border-gray-400 ">
        <div className="w-10/12 mx-auto flex justify-between items-center py-5">
          <div>
            <h1 className="text-white font-semibold text-xl">
              Fajar Ika <span className="text-green">Saputra</span>
            </h1>
          </div>
          <div className="hidden  md:flex text-gray-400">
            <NavbarMenu url="/" name="Home" number="01" />
            <NavbarMenu url="/" name="About" number="02" />
            <NavbarMenu url="/" name="Services" number="03" />
            <NavbarMenu url="/" name="Product" number="04" />
            <NavbarMenu url="/" name="Contact" number="05" />
          </div>
          <button onClick={handleClick} className="inline md:hidden">
            <CgMenuRight className="text-white text-2xl" />
          </button>
        </div>

        {nav && (
          <div className="block md:hidden bg-[#020202] pb-5 md:pb-0 w-10/12 mx-auto justify-between items-center">
            <div className=" text-gray-400">
              <NavbarMenu url="/" name="Home" number="01" />
              <NavbarMenu url="/" name="About" number="02" />
              <NavbarMenu url="/" name="Services" number="03" />
              <NavbarMenu url="/" name="Product" number="04" />
              <NavbarMenu url="/" name="Contact" number="05" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
