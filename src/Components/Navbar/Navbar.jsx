import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import Logo from "../../../public/assets/images/logo.png";
import NavbarMenu from "./NavbarMenu";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleClick = () => {
    setNav(!nav);
  };

  const handleMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 z-50 w-screen md:w-full bg-white dark:bg-[#020202] border-b border-gray-400">
      <div className="w-10/12 mx-auto flex justify-between items-center py-5">
        <Link to="/">
          <div className="flex items-center">
            <img src={Logo} className="w-12" alt="Logo" />
            <h1 className="hidden md:inline w-full text-black dark:text-white font-semibold text-xl">
              Fajar Ika <span className="text-green">Saputra</span>
            </h1>
          </div>
        </Link>
        <div className="hidden md:flex dark:text-gray-400 text-black space-x-5">
          <NavbarMenu url="/home" name="Home" number="01" />
          <NavbarMenu url="/about" name="About" number="02" />
          <NavbarMenu url="/services" name="Services" number="03" />
          {theme === "dark" ? (
            <button
              className="text-black dark:text-gray-400 "
              onClick={handleMode}
            >
              <MdDarkMode className="text-2xl" />
            </button>
          ) : (
            <button className="text-black dark:text-white" onClick={handleMode}>
              <MdLightMode className="text-2xl" />
            </button>
          )}
        </div>
        <div className="md:hidden flex space-x-4">
          {theme === "dark" ? (
            <button
              className="text-black dark:text-gray-400 "
              onClick={handleMode}
            >
              <MdDarkMode className="text-2xl" />
            </button>
          ) : (
            <button className="text-black dark:text-white" onClick={handleMode}>
              <MdLightMode className="text-2xl" />
            </button>
          )}
          <button onClick={handleClick}>
            <CgMenuRight className="text-black dark:text-white text-2xl" />
          </button>
        </div>
      </div>

      {nav && (
        <div className="block md:hidden bg-white dark:bg-[#020202]    pb-5 w-10/12 mx-auto justify-between items-center">
          <div className="text-gray-400">
            <NavbarMenu url="/home" name="Home" number="01" />
            <NavbarMenu url="/about" name="About" number="02" />
            <NavbarMenu url="/services" name="Services" number="03" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
