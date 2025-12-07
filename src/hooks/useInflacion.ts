import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.argentinadatos.com/v1/finanzas/indices/inflacion";

export interface InflacionData {
  fecha: string;
  valor: number;
}

export function useInflacion() {
  const [data, setData] = useState<InflacionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get<InflacionData[]>(API_URL);

        // Tomar últimos 12 meses y ordenar por fecha
        const sorted = response
          .sort((a, b) => a.fecha.localeCompare(b.fecha))
          .slice(-12);

        setData(sorted);
        setError(null);
      } catch (err) {
        console.error("Error al obtener inflación:", err);
        setError("Error al cargar datos de inflación");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Último mes de inflación
  const ultimoMes = data.length > 0 ? data[data.length - 1].valor : null;

  // Inflación interanual (suma de últimos 12 meses - aproximación)
  // Nota: El cálculo correcto sería compuesto, pero usamos suma simple para mostrar tendencia
  const interanual = data.length > 0
    ? data.reduce((acc, curr) => acc + curr.valor, 0)
    : null;

  return { data, loading, error, ultimoMes, interanual };
}
