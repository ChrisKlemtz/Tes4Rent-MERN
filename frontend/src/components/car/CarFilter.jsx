import React from "react";

const CarFilter = ({ filters, onChange }) => {
  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Search model..."
        value={filters.model}
        onChange={(e) => onChange({ ...filters, model: e.target.value })}
        className="p-2 rounded bg-gray-700 text-white"
      />

      <input
        type="number"
        placeholder="Min range (km)"
        value={filters.minRange}
        onChange={(e) => onChange({ ...filters, minRange: e.target.value })}
        className="p-2 rounded bg-gray-700 text-white"
      />

      <input
        type="number"
        placeholder="Max price ($)"
        value={filters.maxPrice}
        onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
        className="p-2 rounded bg-gray-700 text-white"
      />
    </div>
  );
};

export default CarFilter;
