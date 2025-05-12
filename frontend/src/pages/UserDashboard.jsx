import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(stored);
  }, []);

  return (
    <div className="p-6 text-white min-h-screen bg-black">
      <h1 className="text-3xl font-bold mb-6">Your Reservations</h1>

      {reservations.length === 0 ? (
        <p>You have no reservations yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reservations.map((res, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow">
              <img
                src={res.image}
                alt={res.carModel}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h2 className="text-xl font-semibold">{res.carModel}</h2>
              <p className="text-sm">
                Pickup: {new Date(res.pickupDate).toLocaleString()}
              </p>
              <p className="text-sm">
                Return: {new Date(res.returnDate).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
