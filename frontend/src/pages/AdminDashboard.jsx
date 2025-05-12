import React, { useEffect, useState } from "react";
import CarService from "../services/CarService";

const AdminDashboard = () => {
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState({
    model: "",
    range: "",
    pricePerDay: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    CarService.getCars().then(setCars);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCar = async (e) => {
    e.preventDefault();
    const newCar = {
      ...formData,
      range: parseInt(formData.range),
      pricePerDay: parseFloat(formData.pricePerDay),
    };
    const added = await CarService.addCar(newCar);
    setCars((prev) => [...prev, added]);
    setFormData({
      model: "",
      range: "",
      pricePerDay: "",
      image: "",
      description: "",
    });
  };

  const handleDelete = async (id) => {
    await CarService.deleteCar(id);
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <form
        onSubmit={handleAddCar}
        className="bg-gray-800 p-4 rounded mb-8 space-y-4"
      >
        <h2 className="text-xl font-semibold">Add New Car</h2>
        <input
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="range"
          placeholder="Range (km)"
          type="number"
          value={formData.range}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="pricePerDay"
          placeholder="Price per day ($)"
          type="number"
          value={formData.pricePerDay}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white"
        >
          Add Car
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Car List</h2>
      {cars.length === 0 ? (
        <p>No cars available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-gray-800 p-4 rounded shadow">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-xl font-bold">{car.model}</h3>
              <p>Range: {car.range} km</p>
              <p>Price per day: ${car.pricePerDay}</p>
              <p className="text-sm mb-2">{car.description}</p>
              <button
                onClick={() => handleDelete(car.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;