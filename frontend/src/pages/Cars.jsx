import React, { useEffect, useState } from "react";
import CarCard from "../components/car/CarCard";
import CarFilter from "../components/car/CarFilter";
import API from "../api/api";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    model: "",
    minRange: "",
    maxPrice: "",
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await API.get("/cars");
        setCars(res.data);
      } catch (err) {
        console.error("Failed to fetch cars:", err);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesModel = car.model
      .toLowerCase()
      .includes(filters.model.toLowerCase());
    const matchesRange =
      !filters.minRange || car.range >= parseInt(filters.minRange);
    const matchesPrice =
      !filters.maxPrice || car.pricePerDay <= parseInt(filters.maxPrice);
    return matchesModel && matchesRange && matchesPrice;
  });

  return (
    <div className="px-6 py-16 bg-white text-black min-h-screen max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Tesla Fleet</h1>

      <CarFilter filters={filters} onChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car._id} car={car} />)
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No cars match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cars;
