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
    className="py-20 bg-white text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-black mb-10">
      Our Impact in Numbers
    </h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-black">
            <CountUp
              end={stat.value}
              duration={2}
              separator=" "
              enableScrollSpy
            />
          </div>
          <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default StatsSection;
