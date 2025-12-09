import { CurrencyInput } from "@/components/ui/currency-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CalculatorProps, CurrencyData } from "../../interfaces/interfaces";

const formatARS = new Intl.NumberFormat("es-AR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const Calculator = ({ currencies }: CalculatorProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyData | null>(
    null
  );
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState<"USD" | "ARS">("USD");
  const [isSwapped, setIsSwapped] = useState(false);
  const [copiedVenta, setCopiedVenta] = useState(false);
  const [copiedCompra, setCopiedCompra] = useState(false);

  const handleCopyVenta = async () => {
    if (resultVenta) {
      await navigator.clipboard.writeText(
        `${formatARS.format(parseFloat(resultVenta))} ${toCurrency}`
      );
      setCopiedVenta(true);
      setTimeout(() => setCopiedVenta(false), 1500);
    }
  };

  const handleCopyCompra = async () => {
    if (resultCompra) {
      await navigator.clipboard.writeText(
        `${formatARS.format(parseFloat(resultCompra))} ${toCurrency}`
      );
      setCopiedCompra(true);
      setTimeout(() => setCopiedCompra(false), 1500);
    }
  };

  useEffect(() => {
    if (currencies.length > 0) {
      const initialCurrency =
        currencies.find((c) => c.nombre === "Blue") || currencies[0];
      setSelectedCurrency(initialCurrency);
    }
  }, [currencies]);

  const resultVenta =
    selectedCurrency && amount
      ? fromCurrency === "USD"
        ? (selectedCurrency.venta * parseFloat(amount)).toFixed(2)
        : (parseFloat(amount) / selectedCurrency.venta).toFixed(2)
      : "";

  const resultCompra =
    selectedCurrency && amount && selectedCurrency.compra
      ? fromCurrency === "USD"
        ? (selectedCurrency.compra * parseFloat(amount)).toFixed(2)
        : (parseFloat(amount) / selectedCurrency.compra).toFixed(2)
      : "";

  const toCurrency = fromCurrency === "USD" ? "ARS" : "USD";

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setFromCurrency(toCurrency);
    if (resultVenta) {
      setAmount(resultVenta);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col gap-4 w-full"
    >
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">
          Tipo de cambio
        </label>
        <Select
          value={selectedCurrency?.nombre || ""}
          onValueChange={(value) => {
            const selected = currencies.find((c) => c.nombre === value);
            if (selected) setSelectedCurrency(selected);
          }}
        >
          <SelectTrigger className="w-full h-12 rounded-xl border-border/60 bg-muted/30 px-4 text-sm font-medium transition-all hover:border-border focus:border-foreground focus:ring-0">
            <SelectValue placeholder="Seleccionar tipo..." />
          </SelectTrigger>
          <SelectContent className="rounded-xl border-border/60 bg-background/95 backdrop-blur-lg">
            {currencies.map((currency) => (
              <SelectItem
                key={currency.nombre}
                value={currency.nombre}
                className="rounded-lg py-2.5 px-3 text-sm font-medium cursor-pointer transition-colors focus:bg-muted"
              >
                <div className="flex items-center justify-between w-full gap-4">
                  <span>
                    {currency.nombre === "Contado con liquidación"
                      ? "CCL"
                      : currency.nombre}
                  </span>
                  <span className="text-muted-foreground tabular-nums">
                    ${Math.round(currency.venta)}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">
          Monto a convertir
        </label>
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <CurrencyInput
              value={amount}
              onChange={setAmount}
              currency={fromCurrency}
              placeholder="0"
              autoFocus
              className="h-12 rounded-xl border-border/60 bg-muted/30 px-4 pr-20 text-base font-medium transition-all hover:border-border focus:border-foreground focus:ring-0"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <AnimatePresence>
                {amount && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setAmount("")}
                    className="flex items-center justify-center w-5 h-5 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
                    type="button"
                  >
                    <X className="w-3 h-3 text-muted-foreground" />
                  </motion.button>
                )}
              </AnimatePresence>
              <span className="text-xs font-semibold text-muted-foreground">
                {fromCurrency}
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{ rotate: isSwapped ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={handleSwap}
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 border border-border/60 hover:bg-muted hover:border-border transition-all"
            title="Intercambiar monedas"
          >
            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedCurrency && (
          <motion.div
            key={`${fromCurrency}-${selectedCurrency.nombre}`}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="bg-foreground text-background rounded-2xl p-4 mt-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <p className="text-[10px] text-background/50 mb-0.5">Venta</p>
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        onClick={handleCopyVenta}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <p className="text-2xl font-semibold tracking-tight tabular-nums">
                          {resultVenta
                            ? formatARS.format(parseFloat(resultVenta))
                            : "0"}
                          <span className="text-sm font-medium text-background/60 ml-1">
                            {toCurrency}
                          </span>
                        </p>
                        <AnimatePresence>
                          {copiedVenta && (
                            <motion.span
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="absolute -top-4 left-0 text-[10px] px-2 py-0.5 rounded whitespace-nowrap bg-background text-foreground"
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
                <p className="text-[10px] text-background/40 tabular-nums mt-1">
                  1 USD = ${formatARS.format(selectedCurrency.venta)}
                </p>
              </div>

              <div className="relative">
                <p className="text-[10px] text-background/50 mb-0.5">Compra</p>
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        onClick={handleCopyCompra}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                        disabled={!selectedCurrency.compra}
                      >
                        <p className="text-2xl font-semibold tracking-tight tabular-nums">
                          {selectedCurrency.compra
                            ? resultCompra
                              ? formatARS.format(parseFloat(resultCompra))
                              : "0"
                            : "—"}
                          {selectedCurrency.compra && (
                            <span className="text-sm font-medium text-background/60 ml-1">
                              {toCurrency}
                            </span>
                          )}
                        </p>
                        <AnimatePresence>
                          {copiedCompra && (
                            <motion.span
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="absolute -top-4 left-0 text-[10px] px-2 py-0.5 rounded whitespace-nowrap bg-background text-foreground"
                            >
                              Copiado
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {selectedCurrency.compra
                          ? "Click para copiar"
                          : "No disponible"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {selectedCurrency.compra && (
                  <p className="text-[10px] text-background/40 tabular-nums mt-1">
                    1 USD = ${formatARS.format(selectedCurrency.compra)}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
