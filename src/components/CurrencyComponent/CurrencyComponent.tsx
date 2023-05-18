import { motion } from "framer-motion";

type CurrencyComponentProps = {
  type: string;
  officialSellValue: string;
  OfficialBuyValue: string;
  BlueSellValue: string;
  BlueBuyValue: string;
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
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="currency-container"
    >
      <div className="type-container">
        <h2>{type} oficial</h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          <span className="price-value">${officialSellValue} ARS</span>
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          <span className="price-value">${OfficialBuyValue} ARS</span>
        </div>
      </div>
      <div className="type-container">
        <h2>{type} blue</h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          <span className="price-value">${BlueSellValue} ARS</span>
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          <span className="price-value">${BlueBuyValue} ARS</span>
        </div>
      </div>
    </motion.div>
  );
};
