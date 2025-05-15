import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-gray-300 transition"
        >
          Tes4Rent
        </Link>
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

      <div className="flex items-center space-x-4">
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
