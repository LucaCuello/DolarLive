import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const API_BASE = "https://api.argentinadatos.com/v1/cotizaciones/dolares";

export type RangoTiempo = "1M" | "3M" | "6M" | "1A";

interface ApiResponse {
  casa: string;
  compra: number;
  venta: number;
  fecha: string;
}

export interface DolarHistoricoData {
  fecha: string;
  blue: number;
  oficial: number;
}

function getDaysForRange(rango: RangoTiempo): number {
  switch (rango) {
    case "1M": return 30;
    case "3M": return 90;
    case "6M": return 180;
    case "1A": return 365;
  }
}

function filterByRange(data: ApiResponse[], days: number): ApiResponse[] {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return data.filter((item) => new Date(item.fecha) >= cutoffDate);
}

export function useDolarHistorico(rango: RangoTiempo) {
  const [blueData, setBlueData] = useState<ApiResponse[]>([]);
  const [oficialData, setOficialData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [blueRes, oficialRes] = await Promise.all([
          axios.get<ApiResponse[]>(`${API_BASE}/blue`),
          axios.get<ApiResponse[]>(`${API_BASE}/oficial`),
        ]);

        setBlueData(blueRes.data);
        setOficialData(oficialRes.data);
        setError(null);
      } catch (err) {
        console.error("Error al obtener histórico de dólar:", err);
        setError("Error al cargar datos históricos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { data, blueActual, oficialActual, blueVariacion, oficialVariacion } = useMemo(() => {
    const days = getDaysForRange(rango);
    const filteredBlue = filterByRange(blueData, days);
    const filteredOficial = filterByRange(oficialData, days);

    // Crear mapa de fechas para merge
    const blueMap = new Map(filteredBlue.map((item) => [item.fecha, item.venta]));
    const oficialMap = new Map(filteredOficial.map((item) => [item.fecha, item.venta]));

    // Obtener todas las fechas únicas y ordenar
    const allDates = [...new Set([...blueMap.keys(), ...oficialMap.keys()])].sort();

    // Mergear datos
    const mergedData: DolarHistoricoData[] = allDates.map((fecha) => ({
      fecha,
      blue: blueMap.get(fecha) || 0,
      oficial: oficialMap.get(fecha) || 0,
    })).filter((item) => item.blue > 0 && item.oficial > 0);

    // Valores actuales (último dato)
    const lastData = mergedData[mergedData.length - 1];
    const firstData = mergedData[0];

    const blueActual = lastData?.blue || 0;
    const oficialActual = lastData?.oficial || 0;

    // Variación porcentual
    const blueVariacion = firstData?.blue
      ? ((blueActual - firstData.blue) / firstData.blue) * 100
      : 0;
    const oficialVariacion = firstData?.oficial
      ? ((oficialActual - firstData.oficial) / firstData.oficial) * 100
      : 0;

    return {
      data: mergedData,
      blueActual,
      oficialActual,
      blueVariacion,
      oficialVariacion,
    };
  }, [blueData, oficialData, rango]);

  return {
    data,
    loading,
    error,
    blueActual,
    oficialActual,
    blueVariacion,
    oficialVariacion,
  };
}
