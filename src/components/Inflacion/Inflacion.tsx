import { Skeleton } from "@/components/ui/skeleton";
import { useInflacion } from "@/hooks/useInflacion";
import { usePlazoFijo } from "@/hooks/usePlazoFijo";
import { motion } from "framer-motion";
import { InflacionChart } from "./InflacionChart";
import { PlazoFijoCard } from "./PlazoFijoCard";

export function Inflacion() {
  const {
    data: inflacionData,
    loading: inflacionLoading,
    ultimoMes,
    interanual,
  } = useInflacion();
  const { data: plazoFijoData, loading: plazoFijoLoading } = usePlazoFijo();

  return (
    <div className="space-y-3">
      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
            Inflación Mensual
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-muted-foreground">
                Último mes
              </span>
              {inflacionLoading ? (
                <Skeleton className="h-4 w-10" />
              ) : (
                <span className="text-sm font-semibold tabular-nums">
                  {ultimoMes !== null ? `${ultimoMes.toFixed(1)}%` : "—"}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-muted-foreground">
                Interanual
              </span>
              {inflacionLoading ? (
                <Skeleton className="h-4 w-12" />
              ) : (
                <span className="text-sm font-semibold tabular-nums">
                  {interanual !== null ? `${interanual.toFixed(1)}%` : "—"}
                </span>
              )}
            </div>
          </div>
        </div>

        {inflacionLoading ? (
          <Skeleton className="h-[120px] w-full rounded-xl" />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <InflacionChart data={inflacionData} />
          </motion.div>
        )}
      </section>

      <section>
        <h2 className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mb-2">
          Mejores Tasas Plazo Fijo (TNA 30 días)
        </h2>

        {plazoFijoLoading ? (
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-[60px] rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {plazoFijoData.map((item, index) => (
              <PlazoFijoCard
                key={item.entidad}
                data={item}
                index={index}
                isTop={index === 0}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
