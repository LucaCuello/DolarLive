import { useState, useEffect } from "react";
import axios from "axios";
import { getCache, setCache, CACHE_KEYS } from "../utils/cache";

const API_URL = "https://api.argentinadatos.com/v1/finanzas/tasas/plazoFijo";

export interface PlazoFijoData {
  entidad: string;
  logo: string;
  tnaClientes: number;
  tnaNoClientes: number | null;
}

export function usePlazoFijo() {
  const [data, setData] = useState<PlazoFijoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Intentar usar cache primero
      const cached = getCache<PlazoFijoData[]>(CACHE_KEYS.PLAZO_FIJO);
      if (cached) {
        setData(cached);
        setLoading(false);
        return;
      }

      // Si no hay cache, hacer fetch
      setLoading(true);
      try {
        const { data: response } = await axios.get<PlazoFijoData[]>(API_URL);

        // Ordenar por mejor tasa (tnaClientes) y tomar top 4
        const sorted = response
          .filter((item) => item.tnaClientes != null)
          .sort((a, b) => b.tnaClientes - a.tnaClientes)
          .slice(0, 4);

        setData(sorted);
        setCache(CACHE_KEYS.PLAZO_FIJO, sorted);
        setError(null);
      } catch (err) {
        console.error("Error al obtener tasas de plazo fijo:", err);
        setError("Error al cargar tasas de plazo fijo");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
