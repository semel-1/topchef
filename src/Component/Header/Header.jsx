import React, { useState } from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
      ? "text-yellow-500 font-medium -translate-y-2 " // Active link style
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
        <Link to="/" className={getLinkClass("/")}>
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
        <nav className="absolute flex flex-col top-[75px] right-2 w-64 bg-darkGray text-white shadow-lg md:hidden text-center z-50">
          <Link
            to="/"
            className={`px-4 py-2 border-b border-yellow-500 ${getLinkClass(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/Menu"
            className={`px-4 py-2 border-b border-yellow-500 ${getLinkClass(
              "/Menu"
            )}`}
          >
            Menu
          </Link>
          <Link
            to="/Chef"
            className={`px-4 py-2 border-b border-yellow-500 ${getLinkClass(
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
        <PersonIcon fontSize={isMobile ? "medium" : "large"} />
        <ShoppingCartIcon fontSize={isMobile ? "medium" : "large"} />
      </div>
    </header>
  );
};

export default Header;
