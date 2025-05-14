import React from "react";

const CarFilter = ({ filters, onChange }) => {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto mb-10">
      <h2 className="text-xl font-semibold mb-4">Filter Cars</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Model filter */}
        <input
          type="text"
          placeholder="Search by model"
          value={filters.model}
          onChange={(e) => onChange({ ...filters, model: e.target.value })}
          className="bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Min range */}
        <input
          type="number"
          placeholder="Min range (km)"
          value={filters.minRange}
          onChange={(e) => onChange({ ...filters, minRange: e.target.value })}
          className="bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Max price */}
        <input
          type="number"
          placeholder="Max price (€)"
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
          className="bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
    </div>
  );
};

export default CarFilter;
