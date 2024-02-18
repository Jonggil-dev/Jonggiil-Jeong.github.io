import React from "react";

function Header() {
  return (
    <header className="bg-green-500 text-white fixed top-0 w-full z-10 hidden sm:block">
      <nav className="flex items-center p-4 h-12">
        <span className="font-bold text-xl">Jeong Jonggil</span>
        <div className="text-sm flex ml-4">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
