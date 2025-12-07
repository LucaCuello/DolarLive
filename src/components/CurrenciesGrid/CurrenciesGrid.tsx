import { motion } from "framer-motion";
import { CurrencyData } from "../../interfaces/interfaces";
import { CurrencyComponent } from "../CurrencyComponent/CurrencyComponent";

interface CurrenciesGridProps {
  currencies: CurrencyData[];
  loading: boolean;
}

const SkeletonCard = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="rounded-2xl border border-border/40 bg-muted/30 p-4 animate-pulse"
  >
    <div className="space-y-3">
      <div className="space-y-1.5">
        <div className="h-2.5 w-10 rounded-full bg-muted" />
        <div className="h-4 w-16 rounded-full bg-muted" />
      </div>
      <div className="space-y-2 pt-1">
        <div className="flex justify-between items-center">
          <div className="h-3 w-10 rounded-full bg-muted" />
          <div className="h-5 w-16 rounded-full bg-muted" />
        </div>
        <div className="h-px bg-border/40" />
        <div className="flex justify-between items-center">
          <div className="h-3 w-12 rounded-full bg-muted" />
          <div className="h-4 w-14 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  </motion.div>
);

export function CurrenciesGrid({ currencies, loading }: CurrenciesGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {currencies.map((currency, index) => (
        <CurrencyComponent
          key={currency.nombre}
          type={currency.nombre === "Contado con liquidación" ? "CCL" : currency.nombre}
          buyValue={currency.compra}
          sellValue={currency.venta}
          index={index}
        />
      ))}
    </div>
  );
}
