import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const UserDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(stored);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white text-white px-6 py-16 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        Your Reservations
      </h1>

      {reservations.length === 0 ? (
        <motion.p
          className="text-center text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          You have no reservations yet.
        </motion.p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reservations.map((res, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-2xl shadow-md p-4 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={res.image}
                alt={res.carModel}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{res.carModel}</h2>
              <p className="text-sm text-gray-400 mb-1">
                <span className="text-white font-medium">Pickup:</span>{" "}
                {new Date(res.pickupDate).toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-white font-medium">Return:</span>{" "}
                {new Date(res.returnDate).toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default UserDashboard;
