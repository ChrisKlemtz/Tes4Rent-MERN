import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api/api";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await API.get(`/cars/${id}`);
        setCar(res.data);
      } catch (err) {
        setError("Car not found or failed to load.");
      }
    };

    fetchCar();
  }, [id]);

  const handleReservation = async (e) => {
    e.preventDefault();

    if (!pickupDate || !returnDate) {
      alert("Please select pickup and return dates.");
      return;
    }

    try {
      await API.post("/bookings", {
        car: car._id,
        startDate: pickupDate,
        endDate: returnDate,
      });

      alert(`Reserved ${car.model} from ${pickupDate} to ${returnDate}`);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to create reservation. Try again.");
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-500 py-20">
        <p>{error}</p>
      </div>
    );
  }

  if (!car) return null;

  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-64 object-cover rounded-2xl shadow mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">{car.model}</h1>
      <p className="text-gray-600 mb-4">{car.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-8 text-gray-700">
        <p>
          <strong>Range:</strong> {car.range} km
        </p>
        <p>
          <strong>Price per day:</strong> €{car.pricePerDay}
        </p>
      </div>

      <form
        onSubmit={handleReservation}
        className="bg-gray-100 p-6 rounded-2xl shadow space-y-4"
      >
        <h2 className="text-xl font-semibold mb-2">Select Reservation Dates</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Pickup Date
            </label>
            <input
              type="datetime-local"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Return Date
            </label>
            <input
              type="datetime-local"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-900 transition"
        >
          Confirm Reservation
        </button>
      </form>
    </motion.div>
  );
};

export default CarDetails;
