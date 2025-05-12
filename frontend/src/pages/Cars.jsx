import React, { useEffect, useState } from "react";
import CarCard from "../components/car/CarCard";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Pobieranie danych z API (na razie przykład statyczny)
    const fetchedCars = [
      {
        id: 1,
        model: "Tesla Model S",
        range: 370,
        pricePerDay: 100,
        image: "/images/tesla1.jpg",
      },
      {
        id: 2,
        model: "Tesla Model 3",
        range: 350,
        pricePerDay: 80,
        image: "/images/tesla2.jpg",
      },
      {
        id: 3,
        model: "Tesla Model X",
        range: 400,
        pricePerDay: 120,
        image: "/images/tesla3.jpg",
      },
    ];
    setCars(fetchedCars);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
