import React from "react";

const Header = () => {
  return (
    <header className="text-white fixed top-0 w-full z-10 min-w-[1024px]">
      <nav className="bg-[#656667] flex items-center justify-around p-4 h-12">
        <span className="font-bold text-2xl">Jeong Jonggil</span>
        <div className="text-xl flex ml-4">
          <a href="#Home" className="block text-white hover:text-gray-300 p-2">
            Home
          </a>
          <a href="#about" className="block text-white hover:text-gray-300 p-2">
            About
          </a>

          <a
            href="#skills"
            className="block text-white hover:text-gray-300 p-2"
          >
            Skills
          </a>
          <a
            href="#project"
            className="block text-white hover:text-gray-300 p-2"
          >
            Project
          </a>
          <a
            href="#career"
            className="block text-white hover:text-gray-300 p-2"
          >
            Career
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
