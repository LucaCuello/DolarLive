import { motion } from "framer-motion";
import { CurrencyComponentProps } from "../../interfaces/interfaces";

export const CurrencyComponent = ({
  type,
  buyValue,
  sellValue,
}: CurrencyComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="currency-container"
    >
      <div className="type-container">
        <h2>
          {type === "Euro oficial" ? null : "Dólar"} {type}
        </h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: sellValue ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="price-value"
          >
            ${Math.round(sellValue)} ARS
          </motion.span>
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: buyValue ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="price-value"
          >
            ${Math.round(buyValue)} ARS
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
