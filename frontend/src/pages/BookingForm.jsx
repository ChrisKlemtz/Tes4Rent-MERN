import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [cars, setCars] = useState([]);
  const [carId, setCarId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await API.get("/cars");
        setCars(res.data);
      } catch (err) {
        setError("Failed to load cars");
      }
    };

    fetchCars();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!carId || !startDate || !endDate) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await API.post("/bookings", {
        car: carId,
        startDate,
        endDate,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 max-w-md w-full p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book a Tesla</h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <select
          value={carId}
          onChange={(e) => setCarId(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        >
          <option value="">Select a car</option>
          {cars.map((car) => (
            <option key={car._id} value={car._id}>
              {car.model}
            </option>
          ))}
        </select>

        <input
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <input
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
