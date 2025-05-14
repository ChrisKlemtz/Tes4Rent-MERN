import React from "react";
import { motion } from "framer-motion";
import { FaBatteryFull } from "react-icons/fa";

const EnergyLine = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <FaBatteryFull className="text-green-500 text-3xl mr-2" />
          <span className="text-gray-800 font-semibold text-lg tracking-wide">
            Battery Charging...
          </span>
        </div>
        <motion.div
          className="relative w-full h-4 bg-gray-300 overflow-hidden rounded-full shadow-inner"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "100%"] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.5,
            }}
          />
        </motion.div>
        <p className="mt-4 text-sm text-gray-500 tracking-wide uppercase">
          Powered by 100% Clean Energy
        </p>
      </div>
    </section>
  );
};

export default EnergyLine;
