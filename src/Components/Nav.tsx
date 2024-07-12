import React, { useState, useEffect } from "react";
import NavItem from "./Utils/NavItem";


const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`font-sans fixed top-0 left-0 w-full transition-all duration-300 z-10 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex px-10 items-center justify-between">
        <div className="flex gap-5">
          <p
            className={`font-bold mr-5 flex items-center justify-center text-2xl ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Lead Angels
          </p>
          <nav className="md:items-center md:gap-3 hidden md:flex">
            <NavItem isScrolled={isScrolled} navItem="About" />
            <NavItem isScrolled={isScrolled} navItem="Discussion Board" />
            <NavItem isScrolled={isScrolled} navItem="Groups" />
            <NavItem isScrolled={isScrolled} navItem="News" />
            <NavItem isScrolled={isScrolled} navItem="Referrals" />
            <NavItem isScrolled={isScrolled} navItem="Update" />
          </nav>
        </div>

        <nav className="flex items-center gap-3">
          <button className={`text-md ${isScrolled ? "text-primary" : "text-gray-50"}`}>
            Sign In
          </button>
          <button
            className={`text-sm rounded p-3 ${
              isScrolled ? "text-white bg-primary" : "text-primary bg-white"
            }`}
          >
            Sign Up
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
