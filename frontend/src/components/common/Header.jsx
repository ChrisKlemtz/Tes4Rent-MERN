import { Link } from "react-router-dom";
import { useState } from "react";
import dropdownIcon from "/src/assets/dropdown-white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-gray-300 transition"
        >
          Tes4Rent
        </Link>
        
        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide">
          <Link to="/cars" className="hover:text-gray-300 transition">
            Fleet
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Button - visible only on mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src={dropdownIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu - appears below header when open */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black z-50 md:hidden">
          <nav className="flex flex-col space-y-4 p-4 text-sm font-medium uppercase tracking-wide">
            <Link 
              to="/cars" 
              className="hover:text-gray-300 transition py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Fleet
            </Link>
            <Link 
              to="/about" 
              className="hover:text-gray-300 transition py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-gray-300 transition py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                to="/cars"
                className="block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold text-sm transition text-center mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserve Now
              </Link>
              <Link
                to="/login"
                className="block border border-white px-4 py-2 rounded hover:bg-white hover:text-black font-semibold text-sm transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Buttons - hidden on mobile */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/cars"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold text-sm transition"
        >
          Reserve Now
        </Link>
        <Link
          to="/login"
          className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black font-semibold text-sm transition"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;