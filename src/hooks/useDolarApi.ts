import { useState, useEffect } from "react";
import axios from "axios";
import { CurrencyData } from "../interfaces/interfaces";
import { getCache, setCache, CACHE_KEYS } from "../utils/cache";

const API_URL = "https://dolarapi.com/v1/dolares";
const STATUS_URL = "https://dolarapi.com/v1/estado";

export function useDolarApi() {
  const [data, setData] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (forceRefresh = false) => {
    // Intentar usar cache primero (si no es refresh forzado)
    if (!forceRefresh) {
      const cached = getCache<CurrencyData[]>(CACHE_KEYS.DOLARES);
      if (cached) {
        setData(cached);
        setLoading(false);
        return;
      }
    }

    // Hacer fetch
    setLoading(true);
    try {
      const { data: response } = await axios.get(API_URL);
      const sorted = response.sort((a: CurrencyData, b: CurrencyData) => {
        if (a.nombre === "Blue") return -1;
        if (b.nombre === "Blue") return 1;
        return 0;
      });
      setData(sorted);
      setCache(CACHE_KEYS.DOLARES, sorted);
      setError(null);
    } catch (err) {
      console.error("Error al obtener cotizaciones:", err);
      setError("Error al cargar las cotizaciones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData(true);

  return { data, loading, error, refetch };
}

interface ApiStatus {
  estado: string;
  aleatorio: number;
}

export function useApiStatus() {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const { data } = await axios.get<ApiStatus>(STATUS_URL);
        setIsAvailable(data.estado === "Disponible");
      } catch {
        setIsAvailable(false);
      }
    };

    checkStatus();
  }, []);

  return { isAvailable };
}
