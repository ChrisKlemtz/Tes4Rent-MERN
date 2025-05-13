import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 500, label: "Happy Clients" },
  { value: 1200, label: "Total Rentals" },
  { value: 100000, label: "Electric KM Driven" },
];

const StatsSection = () => (
  <motion.section
    className="py-20 bg-gray-100 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-10">Our Impact in Numbers</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-4xl font-bold">
          <CountUp end={stat.value} duration={3} separator=" " />
          <p className="text-lg font-medium mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default StatsSection;
