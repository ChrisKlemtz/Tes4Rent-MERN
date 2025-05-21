import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/api";

const UserDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings/user");
        setReservations(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load reservations.");
      }
    };

    fetchBookings();
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        Your Reservations
      </h1>

      {error && (
        <p className="text-center text-red-500 font-medium mb-6">{error}</p>
      )}

      {reservations.length === 0 ? (
        <motion.p
          className="text-center text-gray-500 text-lg"
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
              className="bg-gray-100 rounded-2xl shadow-md p-4 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={res.car.image || "/default-car.jpg"}
                alt={res.car.model}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{res.car.model}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-black">Pickup:</span>{" "}
                {new Date(res.startDate).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-black">Return:</span>{" "}
                {new Date(res.endDate).toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default UserDashboard;
