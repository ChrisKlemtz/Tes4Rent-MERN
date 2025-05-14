import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
  return (
    <motion.div
      className="bg-black text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-1">{car.model}</h2>
        <p className="text-gray-400 text-sm mb-2">Range: {car.range} km</p>
        <p className="text-white font-medium mb-4">€{car.pricePerDay} / day</p>

        <Link
          to={`/cars/${car.id}`}
          className="block w-full text-center bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;
