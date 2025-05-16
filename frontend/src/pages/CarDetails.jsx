import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const mockCars = [
  {
    id: 1,
    model: "Model S",
    range: 652,
    pricePerDay: 139,
    image: "/images/model-s.jpg",
    description:
      "Luxury electric sedan with futuristic performance and long range.",
  },
  {
    id: 2,
    model: "Model 3",
    range: 491,
    pricePerDay: 109,
    image: "/images/model-3.jpg",
    description:
      "Affordable all-electric sedan that doesn't compromise on tech.",
  },
  {
    id: 3,
    model: "Model X",
    range: 580,
    pricePerDay: 159,
    image: "/images/model-x.jpg",
    description: "Spacious electric SUV with falcon-wing doors and AWD.",
  },
  {
    id: 4,
    model: "Model Y",
    range: 533,
    pricePerDay: 119,
    image: "/images/model-y.jpg",
    description:
      "Versatile electric crossover designed for comfort and utility.",
  },
  {
    id: 5,
    model: "Model S Plaid",
    range: 600,
    pricePerDay: 199,
    image: "/images/model-s-plaid.jpg",
    description:
      "The highest-performance Model S with tri-motor setup, 0-60 mph in 1.99s and top speed of 200 mph.",
  },
  {
    id: 6,
    model: "Model 3 Performance",
    range: 507,
    pricePerDay: 149,
    image: "/images/model-3-performance.jpg",
    description:
      "High-performance version with dual motor AWD, track mode and 0-60 mph in 3.1s.",
  },
  {
    id: 7,
    model: "Model X Plaid",
    range: 536,
    pricePerDay: 219,
    image: "/images/model-x-plaid.jpg",
    description:
      "The ultimate SUV with tri-motor Plaid powertrain, 0-60 mph in 2.5s and seating for 6.",
  },
  {
    id: 8,
    model: "Model Y Long Range",
    range: 531,
    pricePerDay: 139,
    image: "/images/model-y-long-range.jpg",
    description:
      "Extended range version of Model Y with dual motor AWD and versatile cargo space.",
  },
  {
    id: 9,
    model: "Cybertruck",
    range: 547,
    pricePerDay: 179,
    image: "/images/cybertruck.jpg",
    description:
      "Revolutionary all-electric truck with armored glass, adaptive air suspension and up to 3,500 lbs payload.",
  },
  {
    id: 10,
    model: "Roadster",
    range: 1000,
    pricePerDay: 499,
    image: "/images/roadster.jpg",
    description:
      "The fastest production car ever with 1.9s 0-60 mph, top speed over 250 mph and SpaceX package options.",
  },
];

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const foundCar = mockCars.find((c) => c.id === parseInt(id));
    setCar(foundCar);
  }, [id]);

  const handleReservation = (e) => {
    e.preventDefault();

    if (!pickupDate || !returnDate) {
      alert("Please select pickup and return dates.");
      return;
    }

    const reservation = {
      carId: car.id,
      carModel: car.model,
      pickupDate,
      returnDate,
      image: car.image,
    };

    const existing = JSON.parse(localStorage.getItem("reservations")) || [];
    existing.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(existing));

    alert(`Reserved ${car.model} from ${pickupDate} to ${returnDate}`);
    navigate("/dashboard");
  };

  if (!car) {
    return (
      <div className="text-center text-gray-300 py-20">
        <p>Car not found.</p>
      </div>
    );
  }

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