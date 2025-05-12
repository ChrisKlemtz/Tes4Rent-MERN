import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext"; // Jeśli istnieje
import useBooking from "../../hooks/useBooking";

const CarReservationForm = ({ carId }) => {
  const { addBooking } = useBooking();
  const { currentUser } = useAuthContext ? useAuthContext() : { currentUser: null };

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("You must be logged in to reserve a car.");
      return;
    }

    const booking = {
      ...formData,
      carId,
      userId: currentUser.id,
      userEmail: currentUser.email,
    };

    await addBooking(booking);
    alert("Booking successful!");
    setFormData({ startDate: "", endDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded">
      <h3 className="text-lg font-semibold">Reserve this car</h3>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className="w-full p-2 rounded border"
        required
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        className="w-full p-2 rounded border"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Book Now
      </button>
    </form>
  );
};

export default CarReservationForm;