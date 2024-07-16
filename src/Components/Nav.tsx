import React, { useState } from "react";
import NavItem from "./Utils/NavItem";


const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="font-sans fixed top-0 left-0 w-full bg-white text-primary transition-all duration-300 z-10 px-10 p-2 md:py-0 border-b border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <a href="/" className="font-bold mr-5 flex items-center justify-center text-2xl">
            Lead Angels
          </a>
          <nav className="hidden md:flex md:items-center md:gap-3">
            <NavItem navItem="About" url="/About" />
            <NavItem navItem="Discussion Board" url="/discussion-board" />
            <NavItem navItem="Groups" url="/Groups" />
            <NavItem navItem="News" url="#" />
            <NavItem navItem="Referrals" url="/Referal" />
            <NavItem navItem="Update" url="/Update" />
          </nav>
        </div>

        <nav className="flex items-center gap-3 md:gap-3">
          <a href="/Login" className="text-md hidden md:inline">Sign In</a>
          <a href="/register" className="text-sm rounded p-3 hidden md:inline bg-primary text-white">
            Sign Up
          </a>
          <button
            className="text-sm rounded p-3 inline md:hidden bg-primary text-white"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white flex flex-col p-4 space-y-2">
          <NavItem navItem="About" url="/About" scrollEffect={false} />
          <NavItem navItem="Discussion Board" url="/discussion-board" />
          <NavItem navItem="Groups" url="#" />
          <NavItem navItem="News" url="#" />
          <NavItem navItem="Referrals" url="#" />
          <NavItem navItem="Update" url="#" />
          <div className="flex flex-col space-y-2">
            <button className="text-md">Sign In</button>
            <button className="text-sm rounded p-3 bg-primary text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
