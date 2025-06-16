import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-gray-700 fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto p-6 text-white">
          <ul className="flex justify-between items-center pt-2 pl-0 list-none ps-0">
            <li className="text-3xl font-bold text-white">
              <Link to="/">START FRAMEWORK</Link>
            </li>

            {/* Desktop Menu */}
            <div className="hidden md:block w-[45%]">
              <ul className="flex justify-between pl-0 list-none">
                <li className="text-base font-bold">
                  <NavLink to="about">ABOUT</NavLink>
                </li>
                <li className="text-base font-bold">
                  <NavLink to="portfolio">PORTFOLIO</NavLink>
                </li>
                <li className="text-base font-bold">
                  <NavLink to="contact">CONTACT</NavLink>
                </li>
                <li className="text-base font-bold">
                  <NavLink to="ourRecipes">OUR RECIPIES</NavLink>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-2xl focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </ul>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4">
              <ul className="flex flex-col space-y-4 pl-0 list-none">
                <li className="text-base font-bold">
                  <NavLink
                    to="about"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 hover:bg-gray-600 rounded"
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="text-base font-bold">
                  <NavLink
                    to="portfolio"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 hover:bg-gray-600 rounded"
                  >
                    PORTFOLIO
                  </NavLink>
                </li>
                <li className="text-base font-bold">
                  <NavLink
                    to="contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 hover:bg-gray-600 rounded"
                  >
                    CONTACT
                  </NavLink>
                </li>
                <li className="text-base font-bold">
                  <NavLink
                    to="ourRecipes"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 hover:bg-gray-600 rounded"
                  >
                    OUR RECIPIES
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
