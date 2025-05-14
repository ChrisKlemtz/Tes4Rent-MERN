import React, { useState } from "react";
import { motion } from "framer-motion";

const fleetData = [
  {
    model: "Model S",
    seats: 5,
    range: 652,
    acceleration: "3.2s",
    price: 399,
  },
  {
    model: "Model 3",
    seats: 5,
    range: 491,
    acceleration: "5.6s",
    price: 299,
  },
  {
    model: "Model X",
    seats: 6,
    range: 580,
    acceleration: "2.6s",
    price: 499,
  },
  {
    model: "Model Y",
    seats: 5,
    range: 533,
    acceleration: "5.0s",
    price: 329,
  },
];

const AdminDashboard = () => {
  const [searchModel, setSearchModel] = useState("");
  const [searchSeats, setSearchSeats] = useState("");

  const filteredFleet = fleetData.filter((car) => {
    const matchesModel = car.model
      .toLowerCase()
      .includes(searchModel.toLowerCase());
    const matchesSeats = searchSeats
      ? car.seats === parseInt(searchSeats)
      : true;
    return matchesModel && matchesSeats;
  });

  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Admin Dashboard</h1>

      {/* Admin Info */}
      <motion.div
        className="bg-gray-100 p-6 rounded-2xl shadow mb-10 max-w-3xl mx-auto"
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-xl font-semibold mb-2">👤 Admin Info</h2>
        <p>
          <strong>Name:</strong> Ola Bialas
        </p>
        <p>
          <strong>Email:</strong> admin@tesla4rent.com
        </p>
        <p>
          <strong>Role:</strong> Super Admin
        </p>
      </motion.div>

      {/* Fleet Table */}
      <motion.div
        className="bg-gray-100 p-6 rounded-2xl shadow mb-10"
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-xl font-semibold mb-4">🚗 Manage Fleet</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Filter by model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full md:w-1/3"
          />
          <input
            type="number"
            placeholder="Filter by seats"
            value={searchSeats}
            onChange={(e) => setSearchSeats(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full md:w-1/3"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Model</th>
                <th className="p-3 border">Seats</th>
                <th className="p-3 border">Range (km)</th>
                <th className="p-3 border">0-100 km/h</th>
                <th className="p-3 border">Price €/day</th>
              </tr>
            </thead>
            <tbody>
              {filteredFleet.map((car, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="p-3 border">{car.model}</td>
                  <td className="p-3 border">{car.seats}</td>
                  <td className="p-3 border">{car.range}</td>
                  <td className="p-3 border">{car.acceleration}</td>
                  <td className="p-3 border font-semibold">€{car.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Placeholder panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold mb-2">👥 Manage Users</h2>
          <p className="text-gray-500 text-sm">
            User list, ban/unban, etc. coming soon.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-xl font-semibold mb-2">📅 Manage Reservations</h2>
          <p className="text-gray-500 text-sm">
            Reservation list, status, calendar view, etc. coming soon.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
