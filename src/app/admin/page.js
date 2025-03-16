"use client";

import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function AdminPage() {
  const [precio, setPrecio] = useState(null);
  const [nuevoPrecio, setNuevoPrecio] = useState("");
  const [loading, setLoading] = useState(false);

  // Función para obtener el precio
  useEffect(() => {
    const fetchPrecio = async () => {
      const docRef = doc(db, "precios", "precio-vehiculo");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPrecio(docSnap.data().valor);
      } else {
        console.log("No se encontró el documento");
      }
    };

    fetchPrecio();
  }, []);

  // Función para actualizar el precio
  const handlePrecioChange = async (e) => {
    e.preventDefault();
    setLoading(true);

    const docRef = doc(db, "precios", "precio-vehiculo");
    await updateDoc(docRef, {
        valor: Number.parseFloat(nuevoPrecio),
    });

    setPrecio(Number.parseFloat(nuevoPrecio));
    setNuevoPrecio("");
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Panel de Administración</h1>
      <p className="mt-4">Precio actual: {precio ? `$${precio}` : "Cargando..."}</p>

      <form onSubmit={handlePrecioChange} className="mt-6">
        <input
          type="number"
          value={nuevoPrecio}
          onChange={(e) => setNuevoPrecio(e.target.value)}
          placeholder="Nuevo precio"
          className="p-2 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="ml-4 p-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Actualizando..." : "Actualizar Precio"}
        </button>
      </form>
    </div>
  );
}
