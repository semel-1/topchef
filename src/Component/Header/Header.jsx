import React, { useState } from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Adjust breakpoint as needed
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? `${isMobile ? "text-lg" : "text-2xl"} text-yellow-500`
      : "hover:text-white hover:-translate-y-1 transition-transform";
  };

  return (
    <header className="flex justify-between  items-center bg-darkGray py-7 px-6 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-yellow-300 ">
        <LocalDiningIcon fontSize={isMobile ? "medium" : "large"} />
        <h1 className="text-xl lg:text-4xl font-bold">Top Chef</h1>
      </div>

      {/* Navigation Menu (Desktop) */}
      <nav className="hidden md:flex items-center gap-6 text-xl text-gray-400">
        <Link to="/topchef" className={getLinkClass("/topchef")}>
          Home
        </Link>
        <Link to="/Menu" className={getLinkClass("/Menu")}>
          Menu
        </Link>
        <Link to="/Chef" className={getLinkClass("/Chef")}>
          Chef
        </Link>
        <Link to="/Reservation" className={getLinkClass("/Reservation")}>
          Reservation
        </Link>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="absolute flex flex-col top-[75px] right-2 w-64 bg-darkGray text-white shadow-lg md:hidden text-start z-50">
          <Link
            to="/topchef"
            className={`px-4 py-2 border-b border-[#3b3026] ${getLinkClass(
              "/topchef"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/Menu"
            className={`px-4 py-2 border-b border-[#3b3026] ${getLinkClass(
              "/Menu"
            )}`}
          >
            Menu
          </Link>
          <Link
            to="/Chef"
            className={`px-4 py-2 border-b border-[#3b3026]  ${getLinkClass(
              "/Chef"
            )}`}
          >
            Chef
          </Link>
          <Link
            to="/Reservation"
            className={`px-4 py-2 ${getLinkClass("/Reservation")}`}
          >
            Reservation
          </Link>
        </nav>
      )}

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <CloseIcon fontSize={isMobile ? "medium" : "large"} />
          ) : (
            <MenuIcon fontSize={isMobile ? "medium" : "large"} />
          )}
        </button>
        <FacebookIcon fontSize={isMobile ? "small" : "medium"}  className="cursor-pointer hover:text-yellow-500"/>
        <InstagramIcon fontSize={isMobile ? "small" : "medium"}  className="cursor-pointer hover:text-yellow-500" />
        <TwitterIcon fontSize={isMobile ? "samll" : "medium"}   className="cursor-pointer hover:text-yellow-500"/>
      </div>
    </header>
  );
};

export default Header;
