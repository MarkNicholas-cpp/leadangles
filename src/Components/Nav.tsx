import React, { useState, useEffect } from "react";
import NavItem from "./Utils/NavItem";

interface Props {
  scrollEffect: boolean;
}

const Nav: React.FC<Props> = ({ scrollEffect }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (scrollEffect) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize state based on current scroll position
    }

    return () => {
      if (scrollEffect) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollEffect]);

  return (
    <div
      className={`font-sans fixed top-0 left-0 w-full transition-all duration-300 z-10 px-10 ${
        scrollEffect
          ? isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
          : "bg-white border-b border-gray-300"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <p
            className={`font-bold mr-5 flex items-center justify-center text-2xl ${
              scrollEffect
                ? isScrolled
                  ? "text-primary"
                  : "text-white"
                : "text-primary"
            }`}
          >
            Lead Angels
          </p>
          <nav className="md:items-center md:gap-3 hidden md:flex">
            <NavItem
              isScrolled={isScrolled}
              navItem="About"
              url={"#"}
              scrollEffect={scrollEffect}
            />
            <NavItem
              isScrolled={isScrolled}
              navItem="Discussion Board"
              url="/discussion-board"
              scrollEffect={scrollEffect}
            />
            <NavItem
              isScrolled={isScrolled}
              scrollEffect={scrollEffect}
              navItem="Groups"
              url={"#"}
            />
            <NavItem
              isScrolled={isScrolled}
              scrollEffect={scrollEffect}
              navItem="News"
              url={"#"}
            />
            <NavItem
              isScrolled={isScrolled}
              scrollEffect={scrollEffect}
              navItem="Referrals"
              url={"#"}
            />
            <NavItem
              isScrolled={isScrolled}
              scrollEffect={scrollEffect}
              navItem="Update"
              url={"#"}
            />
          </nav>
        </div>

        <nav className="flex items-center gap-3">
          <button
            className={`text-md ${
              scrollEffect
                ? isScrolled
                  ? "text-primary"
                  : "text-gray-50"
                : "text-primary"
            }`}
          >
            Sign In
          </button>
          <button
            className={`text-sm rounded p-3 ${
              scrollEffect
                ? isScrolled
                  ? "text-white bg-primary"
                  : "text-primary bg-white"
                : "text-white bg-primary"
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
