import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [aboutRef, inViewAbout] = useInView({ threshold: 0.4 });
  const [pricingRef, inViewPricing] = useInView({ threshold: 0.4 });
  const [contactRef, inViewContact] = useInView({ threshold: 0.4 });

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-40 py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Tesla4Rent</h1>
      <div className="flex gap-6">
        <a
          href="#about"
          className={inViewAbout ? "text-blue-600 font-semibold" : ""}
        >
          About
        </a>
        <a
          href="#pricing"
          className={inViewPricing ? "text-blue-600 font-semibold" : ""}
        >
          Pricing
        </a>
        <a
          href="#contact"
          className={inViewContact ? "text-blue-600 font-semibold" : ""}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
