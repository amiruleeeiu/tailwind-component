import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-2xl">Logo</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        className={`fixed top-0 left-0 h-full bg-blue-600 w-48 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:static md:translate-x-0 md:flex md:items-center w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 text-white mt-16 md:mt-0">
          <li className="py-2 md:py-0">
            <a href="#home">Home</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#about">About</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#services">Services</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
