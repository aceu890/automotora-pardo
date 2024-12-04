"use client";
// components/SearchBar.js

import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center mb-4 mt-10">
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar vehículo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-0 mr-0' bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none hover:bg-red-600 transition"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
