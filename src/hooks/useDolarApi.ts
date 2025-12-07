import { useState, useEffect } from "react";
import axios from "axios";
import { CurrencyData } from "../interfaces/interfaces";

const API_URL = "https://dolarapi.com/v1/dolares";

export function useDolarApi() {
  const [data, setData] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API_URL);
        // Ordenar: Blue primero
        const sorted = response.sort((a: CurrencyData, b: CurrencyData) => {
          if (a.nombre === "Blue") return -1;
          if (b.nombre === "Blue") return 1;
          return 0;
        });
        setData(sorted);
        setError(null);
      } catch (err) {
        console.error("Error al obtener cotizaciones:", err);
        setError("Error al cargar las cotizaciones");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
