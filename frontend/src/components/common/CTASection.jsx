import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => (
  <motion.section
    className="py-20 bg-white text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="max-w-3xl mx-auto bg-gray-100 rounded-xl shadow-xl p-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-black mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ready to Drive the Future?
      </motion.h2>
      <motion.p
        className="text-gray-600 text-lg mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Choose your Tesla and hit the road in style, sustainability, and
        silence.
      </motion.p>
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/cars">
          <button className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition flex items-center gap-2">
            Get Started <FaArrowRight />
          </button>
        </Link>
      </motion.div>
    </div>
  </motion.section>
);

export default CTASection;
