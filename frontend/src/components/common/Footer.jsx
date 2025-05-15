import React from "react";
import { Link } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h2 className="text-xl font-bold mb-2">Tes4Rent</h2>
          <p className="text-gray-400">Drive electric. Drive the future.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                to="about"
                className="hover:text-white transition-opacity duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className="hover:text-white transition-opacity duration-200"
              >
                Fleet
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                to="contact"
                className="hover:text-white transition-opacity duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/FAQ"
                className="hover:text-white transition-opacity duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/Terms"
                className="hover:text-white transition-opacity duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Payments</h3>
          <div className="flex gap-4 text-4xl text-gray-400 hover:text-white transition">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; 2025 Tesla4Rent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
