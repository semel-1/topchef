import React, { useState } from 'react';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Adjust breakpoint as needed

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 py-5 px-6 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-yellow-300">
        <LocalDiningIcon fontSize={isMobile ? 'medium' : 'large'} />
        <h1 className="text-xl lg:text-4xl font-bold">Top Chef</h1>
      </div>

      {/* Navigation Menu (Desktop) */}
      <nav className="hidden md:flex items-center gap-6 text-lg text-gray-400">
        <a href="#" className="hover:text-white hover:-translate-y-1 transition-transform">
          Shop
        </a>
        <a href="#" className="hover:text-white hover:-translate-y-1 transition-transform">
          Main
        </a>
        <a href="#" className="hover:text-white hover:-translate-y-1 transition-transform">
          Drinks
        </a>
        <a href="#" className="hover:text-white hover:-translate-y-1 transition-transform">
          Dessert
        </a>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-[75px] right-2 w-48 bg-gray-800 text-white  shadow-lg md:hidden text-center">
          <li className="px-4 py-2 border-b border-gray-500 hover:bg-gray-600 transition-colors">
            <a href="#">Shop</a>
          </li>
          <li className="px-4 py-2 border-b border-gray-500 hover:bg-gray-600 transition-colors">
            <a href="#">Main</a>
          </li>
          <li className="px-4 py-2 border-b border-gray-500 hover:bg-gray-600 transition-colors">
            <a href="#">Drinks</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-600 transition-colors">
            <a href="#">Dessert</a>
          </li>
        </ul>
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
            <CloseIcon fontSize={isMobile ? 'medium' : 'large'} />
          ) : (
            <MenuIcon fontSize={isMobile ? 'medium' : 'large'} />
          )}
        </button>
        <PersonIcon fontSize={isMobile ? 'medium' : 'large'} />
        <ShoppingCartIcon fontSize={isMobile ? 'medium' : 'large'} />
      </div>
    </header>
  );
};

export default Header;
