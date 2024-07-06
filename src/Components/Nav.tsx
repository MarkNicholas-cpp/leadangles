import React, { useState, useEffect } from 'react';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`font-sans h-24 fixed top-0 left-0 w-full transition-all duration-300 z-10 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex px-10 p-5 items-center justify-between">
        <nav className="flex items-center gap-3">
          <a className={`font-bold text-2xl mr-5 ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Lead Angles
          </a>
          <a className={`text-md font-semibold ${isScrolled ? 'text-primary' : 'text-gray-50'}`} href="#">
            About
          </a>
          <a className={`text-md font-semibold ${isScrolled ? 'text-primary' : 'text-gray-50'}`} href="#">
            Discussion Board
          </a>
          <a className={`text-md font-semibold ${isScrolled ? 'text-primary' : 'text-gray-50'}`} href="#">
            Groups
          </a>
          <a className={`text-md font-semibold ${isScrolled ? 'text-primary' : 'text-gray-50'}`} href="#">
            News
          </a>
          <a className={`text-md font-semibold ${isScrolled ? 'text-primary' : 'text-gray-50'}`} href="#">
            Referrals
          </a>
          <a className={`text-md font-semibold ${isScrolled ? 'text-primary' : 'text-gray-50'}`} href="#">
            Update
          </a>
        </nav>
        <nav className="flex items-center gap-3">
          <button className={`text-md ${isScrolled ? 'text-primary' : 'text-gray-50'}`}>
            Sign In
          </button>
          <button className={`text-sm rounded p-3 ${isScrolled ? 'text-white bg-primary' : 'text-primary bg-white'}`}>
            Sign Up
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
