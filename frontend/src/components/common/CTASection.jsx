import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-12 px-6 text-center rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-bold mb-4">Ready to rent your dream Tesla?</h2>
      <p className="mb-6 text-lg">
        Browse our collection and book your ride today.
      </p>
      <Link
        to="/cars"
        className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
      >
        Explore Cars
      </Link>
    </section>
  );
};

export default CTASection;