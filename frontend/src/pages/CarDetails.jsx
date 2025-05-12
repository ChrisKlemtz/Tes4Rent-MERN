import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockCars = [
  {
    id: 1,
    model: "Model S",
    range: 370,
    pricePerDay: 100,
    image: "/images/tesla1.jpg",
    description: "Luxury electric sedan.",
  },
  {
    id: 2,
    model: "Model 3",
    range: 350,
    pricePerDay: 80,
    image: "/images/tesla2.jpg",
    description: "Affordable electric performance.",
  },
  {
    id: 3,
    model: "Model X",
    range: 400,
    pricePerDay: 120,
    image: "/images/tesla3.jpg",
    description: "SUV with falcon-wing doors.",
  },
  {
    id: 4,
    model: "Model Y",
    range: 330,
    pricePerDay: 90,
    image: "/images/tesla4.jpg",
    description: "Compact electric SUV.",
  },
];

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const navigate = useNavigate();

  // Find car by ID
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

    // Create reservation object
    const reservation = {
      carId: car.id,
      carModel: car.model,
      pickupDate,
      returnDate,
      image: car.image,
    };

    // Save reservation to localStorage
    const existingReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    existingReservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(existingReservations));

    alert(`Reserved ${car.model} from ${pickupDate} to ${returnDate}`);
    navigate("/dashboard"); // Navigate to user dashboard to view the reservation
  };

  if (!car) {
    return <div className="text-white p-6">Car not found.</div>;
  }

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{car.model}</h1>
      <p className="mb-2">{car.description}</p>
      <p className="mb-2">Range: {car.range} km</p>
      <p className="mb-4">Price per day: ${car.pricePerDay}</p>

      <form onSubmit={handleReservation} className="bg-gray-800 p-4 rounded">
        <div className="mb-4">
          <label className="block mb-1">Pickup Date</label>
          <input
            type="datetime-local"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Return Date</label>
          <input
            type="datetime-local"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default CarDetails;
