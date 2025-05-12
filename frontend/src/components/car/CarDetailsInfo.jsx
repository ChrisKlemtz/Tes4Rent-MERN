import React from "react";

const CarDetailsInfo = ({ car }) => {
  if (!car) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{car.model}</h2>
      <p className="text-gray-600 mb-2">{car.description}</p>
      <ul className="text-gray-800 space-y-1">
        <li><strong>Range:</strong> {car.range} km</li>
        <li><strong>Price per day:</strong> ${car.pricePerDay}</li>
      </ul>
    </div>
  );
};

export default CarDetailsInfo;