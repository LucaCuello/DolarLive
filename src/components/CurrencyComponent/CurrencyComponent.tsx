import { motion } from "framer-motion";

type CurrencyComponentProps = {
  type: string;
  officialSellValue: number;
  OfficialBuyValue: number;
  BlueSellValue: number;
  BlueBuyValue: number;
};

export const CurrencyComponent = ({
  type,
  officialSellValue,
  OfficialBuyValue,
  BlueSellValue,
  BlueBuyValue,
}: CurrencyComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="currency-container"
    >
      <div className="type-container">
        <h2>{type} oficial</h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: officialSellValue ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="price-value"
          >
            ${Math.round(officialSellValue)} ARS
          </motion.span>
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: officialSellValue ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="price-value"
          >
            ${Math.round(OfficialBuyValue)} ARS
          </motion.span>
        </div>
      </div>
      <div className="type-container">
        <h2>{type} blue</h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: officialSellValue ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="price-value"
          >
            ${BlueSellValue} ARS
          </motion.span>
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: officialSellValue ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="price-value"
          >
            ${BlueBuyValue} ARS
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
