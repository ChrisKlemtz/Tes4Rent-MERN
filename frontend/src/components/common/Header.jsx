import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Tesla4Rent
      </Link>
      <nav className="space-x-4">
        <Link to="/cars">catalog</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
