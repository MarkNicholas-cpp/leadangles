import React from "react";

interface NavItemProps {
  isScrolled: boolean;
  navItem: string;
}

const NavItem: React.FC<NavItemProps> = ({ isScrolled, navItem }) => {
  return (
    <a
      className={`text-md font-normal p-5 px-2 transition-all ease-out duration-500 hover:border-primary ${
        isScrolled
          ? "text-primary border-b-4 border-white hover:border-b-4"
          : "text-gray-50 border-b-4 border-primary hover:border-b-4"
      }`}
      href="#"
    >
      {navItem}
    </a>
  );
};

export default NavItem;
 