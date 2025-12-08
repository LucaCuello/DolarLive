import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CurrencyComponentProps } from "../../interfaces/interfaces";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const formatNumber = new Intl.NumberFormat("es-AR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const CurrencyComponent = ({
  type,
  buyValue,
  sellValue,
  index = 0,
}: CurrencyComponentProps & { index?: number }) => {
  const isBlue = type === "Blue";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (sellValue) {
      await navigator.clipboard.writeText(sellValue.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`
        group relative overflow-hidden rounded-2xl border p-4 transition-all duration-200 cursor-pointer
        ${isBlue
          ? "border-foreground/20 bg-foreground text-background"
          : "border-border/60 bg-card hover:border-border hover:shadow-sm"
        }
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className={`text-[10px] font-medium uppercase tracking-wider ${isBlue ? "text-background/60" : "text-muted-foreground"}`}>
            {type === "Euro oficial" ? "Euro" : "Dólar"}
          </span>
          <h2 className={`text-base font-semibold tracking-tight -mt-0.5 ${isBlue ? "text-background" : "text-foreground"}`}>
            {type === "Euro oficial" ? "Oficial" : type}
          </h2>
        </div>
        {isBlue && (
          <span className="text-[9px] font-medium bg-background/20 text-background px-1.5 py-0.5 rounded-full">
            Popular
          </span>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={`text-xs ${isBlue ? "text-background/60" : "text-muted-foreground"}`}>Venta</span>
          {sellValue != null ? (
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={handleCopy}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <span className={`text-lg font-semibold tabular-nums tracking-tight ${isBlue ? "text-background" : "text-foreground"}`}>
                      ${formatNumber.format(sellValue)}
                    </span>
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className={`absolute -top-6 right-0 text-[10px] px-2 py-0.5 rounded whitespace-nowrap ${
                            isBlue ? "bg-background text-foreground" : "bg-foreground text-background"
                          }`}
                        >
                          Copiado
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click para copiar</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <span className="text-xs text-muted-foreground">—</span>
          )}
        </div>
        <div className={`h-px ${isBlue ? "bg-background/10" : "bg-border/60"}`} />
        <div className="flex items-center justify-between">
          <span className={`text-xs ${isBlue ? "text-background/60" : "text-muted-foreground"}`}>Compra</span>
          {buyValue != null ? (
            <span className={`text-sm font-medium tabular-nums ${isBlue ? "text-background/80" : "text-muted-foreground"}`}>
              ${formatNumber.format(buyValue)}
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">—</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
