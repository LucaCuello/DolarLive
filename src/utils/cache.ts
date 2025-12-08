const CACHE_TTL = 60 * 60 * 1000; // 1 hora en ms

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export function getCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const entry: CacheEntry<T> = JSON.parse(raw);
    const isExpired = Date.now() - entry.timestamp > CACHE_TTL;

    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
}

export function setCache<T>(key: string, data: T): void {
  const entry: CacheEntry<T> = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(entry));
}

export const CACHE_KEYS = {
  DOLARES: "cache_dolares",
  HISTORICO: "cache_historico",
  INFLACION: "cache_inflacion",
  PLAZO_FIJO: "cache_plazo_fijo",
} as const;

export function clearAllCache(): void {
  Object.values(CACHE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
  // También limpiar cache de histórico con diferentes rangos
  ["1M", "3M", "6M", "1A"].forEach((rango) => {
    localStorage.removeItem(`${CACHE_KEYS.HISTORICO}_${rango}`);
  });
}
