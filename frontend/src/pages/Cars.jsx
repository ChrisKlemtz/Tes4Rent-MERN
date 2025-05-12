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
        range: 370,
        pricePerDay: 100,
        image: "/images/tesla1.jpg",
      },
      {
        id: 2,
        model: "Model 3",
        range: 350,
        pricePerDay: 80,
        image: "/images/tesla2.jpg",
      },
      {
        id: 3,
        model: "Model X",
        range: 400,
        pricePerDay: 120,
        image: "/images/tesla3.jpg",
      },
      {
        id: 4,
        model: "Model Y",
        range: 330,
        pricePerDay: 90,
        image: "/images/tesla4.jpg",
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
    <div className="p-6">
      <CarFilter filters={filters} onChange={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="text-white">No cars match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Cars;
