import { useEffect, useState } from "react";
import CarService from "../services/CarService";

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    setLoading(true);
    const data = await CarService.getCars();
    setCars(data);
    setLoading(false);
  };

  const addCar = async (car) => {
    const newCar = await CarService.addCar(car);
    setCars((prev) => [...prev, newCar]);
  };

  const deleteCar = async (id) => {
    await CarService.deleteCar(id);
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return {
    cars,
    loading,
    addCar,
    deleteCar,
    refetch: fetchCars,
  };
};

export default useCars;