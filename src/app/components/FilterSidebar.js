// components/FilterSidebar.js
import { useState } from "react";

const FilterSidebar = () => {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    // Lógica para manejar la búsqueda
    console.log("Buscando vehículos:", { brand, year });
  };

  return (
    <div className="bg-white p-4 shadow-lg w-64">
      <h2 className="text-xl font-bold mb-4">Filtros</h2>
      <div className="mb-4">
        <label htmlFor="brand" className="block mb-1">
          Marca
        </label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Ej. Toyota"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="modelo" className="block mb-1">
          Modelo
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Ej. 2022"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block mb-1">
          Año
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Ej. 2022"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block mb-1">
          Precio
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Ej. 2022"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block mb-1">
          Tipo de vehiculo
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Ej. 2022"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block mb-1">
          Km
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Ej. 2022"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block mb-1">
          Transmición
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-md p-2 w-full"
          placeholder="Ej. 2022"
        />
      </div>

      <button
        type="button"
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
      >
        Buscar
      </button>
    </div>
  );
};

export default FilterSidebar;
