import React from "react";
import { motion } from "framer-motion";

const EnergyLine = () => (
  <motion.svg
    viewBox="0 0 200 50"
    className="w-full h-24 text-blue-600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M0 30 C 50 10, 150 10, 200 30"
      stroke="currentColor"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </motion.svg>
);

export default EnergyLine;
