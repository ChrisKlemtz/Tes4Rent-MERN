import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
          <p className="text-white font-medium mb-4">
            €{car.pricePerDay} / day
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleViewDetails}
              className="flex-1 text-center bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              View Details
            </button>
            <Link
              to={`/book?carId=${car._id}`}
              className="flex-1 text-center bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-black text-white rounded-2xl p-6 max-w-md w-full mx-4 border border-gray-700">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <img
              src={car.image}
              alt={car.model}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-semibold mb-4">{car.model}</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-sm">Range</p>
                <p className="text-white">{car.range} km</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Price per day</p>
                <p className="text-white">€{car.pricePerDay}</p>
              </div>
              {car.topSpeed && (
                <div>
                  <p className="text-gray-400 text-sm">Top Speed</p>
                  <p className="text-white">{car.topSpeed} km/h</p>
                </div>
              )}
              {car.acceleration && (
                <div>
                  <p className="text-gray-400 text-sm">0–100 km/h</p>
                  <p className="text-white">{car.acceleration} s</p>
                </div>
              )}
            </div>

            <button
              onClick={closeModal}
              className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;
