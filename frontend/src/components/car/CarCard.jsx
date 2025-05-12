import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{car.model}</h3>
      <p className="text-sm">
        {car.range} km range | ${car.pricePerDay}/day
      </p>
      <Link
        to={`/cars/${car.id}`}
        className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md"
      >
        View Details
      </Link>
    </div>
  );
};

export default CarCard;
