import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo + Nawigacja lewa */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Tesla4Rent
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wide">
          <Link to="/cars">Fleet</Link>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Prawa strona */}
      <div className="flex items-center space-x-4">
        <Link
          to="/cars"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 font-semibold text-sm"
        >
          Reserve Now
        </Link>
        <Link
          to="/login"
          className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black font-semibold text-sm"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
