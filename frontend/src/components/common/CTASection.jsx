import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => (
  <motion.section
    className="py-16 bg-black text-white text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-4">Ready to Drive the Future?</h2>
    <Link to="/cars">
      <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">
        Get Started
      </button>
    </Link>
  </motion.section>
);

export default CTASection;
