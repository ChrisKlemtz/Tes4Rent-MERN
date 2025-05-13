import React from "react";
import { motion } from "framer-motion";

const EnergyLine = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="relative w-full h-1 bg-gray-300 overflow-hidden rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-black rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
            }}
          />
        </motion.div>
        <p className="mt-6 text-center text-gray-600 text-sm uppercase tracking-widest">
          Powered by Clean Energy
        </p>
      </div>
    </section>
  );
};

export default EnergyLine;
