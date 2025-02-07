import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo (hidden on small screens) */}
        <div className="text-2xl font-bold hidden md:inline">Papun</div>

        {/* Desktop Navbar (Centering the items evenly) */}
        <div className="hidden md:flex justify-center flex-1 space-x-10">
          <a href="#home" className="text-white hover:text-green-400 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-green-400 transition duration-300">About Me</a>
          <a href="#project" className="text-white hover:text-green-400 transition duration-300">Projects</a>
          <a href="#certificates" className="text-white hover:text-green-400 transition duration-300">Certificate</a>
          <a href="#contact" className="text-white hover:text-green-400 transition duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Connect Button (Hidden on small screens) */}
        <a href="#contact" className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </a>
      </div>

      {/* Mobile Menu (Appears on small screens when Hamburger is clicked) */}
      <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center bg-gray-900 py-4 space-y-6`}>
        <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-gray-400 transition duration-300">Home</a>
        <a href="#about" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-gray-400 transition duration-300">About Me</a>
        <a href="#certificates" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-gray-400 transition duration-300">Certificate</a>
        <a href="#project" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-gray-400 transition duration-300">Projects</a>
        <a href="#contact" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-gray-400 transition duration-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
