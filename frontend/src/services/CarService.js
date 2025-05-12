
// CarService.js (mock version)

const getCars = () => {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  return Promise.resolve(cars);
};

const addCar = (car) => {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  const newCar = { id: Date.now(), ...car };
  cars.push(newCar);
  localStorage.setItem("cars", JSON.stringify(cars));
  return Promise.resolve(newCar);
};

const deleteCar = (id) => {
  let cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars = cars.filter((car) => car.id !== id);
  localStorage.setItem("cars", JSON.stringify(cars));
  return Promise.resolve();
};

export default {
  getCars,
  addCar,
  deleteCar,
};
