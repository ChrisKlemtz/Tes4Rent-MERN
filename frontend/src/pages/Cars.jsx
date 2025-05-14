import React, { useEffect, useState } from "react";
import CarCard from "../components/car/CarCard";
import CarFilter from "../components/car/CarFilter";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    model: "",
    minRange: "",
    maxPrice: "",
  });

  useEffect(() => {
    const fetchedCars = [
      {
        id: 1,
        model: "Model S",
        range: 652,
        pricePerDay: 139,
        image: "/images/tesla1.jpg",
      },
      {
        id: 2,
        model: "Model 3",
        range: 491,
        pricePerDay: 109,
        image: "/images/tesla2.jpg",
      },
      {
        id: 3,
        model: "Model X",
        range: 580,
        pricePerDay: 159,
        image: "/images/tesla3.jpg",
      },
      {
        id: 4,
        model: "Model Y",
        range: 533,
        pricePerDay: 119,
        image: "/images/tesla4.jpg",
      },
      {
        id: 5,
        model: "Model S Plaid",
        range: 637,
        pricePerDay: 189,
        image: "/images/tesla5.jpg",
      },
      {
        id: 6,
        model: "Model 3 Performance",
        range: 507,
        pricePerDay: 129,
        image: "/images/tesla6.jpg",
      },
      {
        id: 7,
        model: "Model X Plaid",
        range: 547,
        pricePerDay: 179,
        image: "/images/tesla7.jpg",
      },
      {
        id: 8,
        model: "Model Y Long Range",
        range: 565,
        pricePerDay: 129,
        image: "/images/tesla8.jpg",
      },
      {
        id: 9,
        model: "Cybertruck",
        range: 800,
        pricePerDay: 199,
        image: "/images/tesla9.jpg",
      },
      {
        id: 10,
        model: "Roadster",
        range: 1000,
        pricePerDay: 299,
        image: "/images/tesla10.jpg",
      },
    ];
    setCars(fetchedCars);
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
    <div className="px-6 py-16 bg-white text-white min-h-screen max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Tesla Fleet</h1>

      <CarFilter filters={filters} onChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
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
