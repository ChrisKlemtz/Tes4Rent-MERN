import React, { createContext, useContext } from "react";
import useCars from "../hooks/useCars";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const carData = useCars();

  return (
    <CarContext.Provider value={carData}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);