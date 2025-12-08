import { Skeleton } from "@/components/ui/skeleton";
import { RangoTiempo, useDolarHistorico } from "@/hooks/useDolarHistorico";
import { motion } from "framer-motion";
import { useState } from "react";
import { HistoricosChart } from "./HistoricosChart";
import { RangeSelector } from "./RangeSelector";

function formatPrice(value: number): string {
  return `$${value.toLocaleString("es-AR")}`;
}

function formatVariacion(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

export function Historicos() {
  const [rango, setRango] = useState<RangoTiempo>("1M");
  const {
    data,
    loading,
    blueActual,
    oficialActual,
    blueVariacion,
    oficialVariacion,
  } = useDolarHistorico(rango);

  const rangoLabel = {
    "1M": "30d",
    "3M": "90d",
    "6M": "180d",
    "1A": "1 año",
  }[rango];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
          Histórico Blue vs Oficial
        </h2>
        <RangeSelector value={rango} onChange={setRango} />
      </div>

      {/* Chart */}
      {loading ? (
        <Skeleton className="h-[160px] w-full rounded-xl" />
      ) : (
        <motion.div
          key={rango}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <HistoricosChart data={data} />
        </motion.div>
      )}

      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-lg border border-foreground/20 bg-foreground text-background px-3 py-2"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-2 h-2 rounded-full bg-background" />
            <span className="text-[10px] font-medium text-background/70">
              Blue
            </span>
          </div>
          {loading ? (
            <Skeleton className="h-5 w-20 bg-background/20" />
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-base font-semibold tabular-nums">
                {formatPrice(blueActual)}
              </span>
              <span
                className={`text-[10px] font-medium ${
                  blueVariacion >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {formatVariacion(blueVariacion)} ({rangoLabel})
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="rounded-lg border border-border/60 bg-card text-card-foreground px-3 py-2"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground">
              Oficial
            </span>
          </div>
          {loading ? (
            <Skeleton className="h-5 w-20" />
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-base font-semibold tabular-nums">
                {formatPrice(oficialActual)}
              </span>
              <span
                className={`text-[10px] font-medium ${
                  oficialVariacion >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {formatVariacion(oficialVariacion)} ({rangoLabel})
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
