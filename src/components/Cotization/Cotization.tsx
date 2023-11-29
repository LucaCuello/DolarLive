import { motion } from "framer-motion";
import { BsCalculator } from "react-icons/bs";
import { CurrencyComponent } from "../CurrencyComponent/CurrencyComponent";

export const Cotization = ({ dolarData, euroData }) => {
  const variants = {
    hidden: { scale: 0 },
    visible: () => ({
      scale: 1,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
  };
  return (
    <>
      <div className="extension-divider"></div>
      <CurrencyComponent
        type="Dólar"
        officialSellValue={dolarData?.dolarOficial.venta}
        OfficialBuyValue={dolarData?.dolarOficial.compra}
        BlueSellValue={dolarData?.dolarBlue.venta}
        BlueBuyValue={dolarData?.dolarBlue.compra}
      />
      <div className="extension-divider"></div>
      <CurrencyComponent
        type="Euro"
        officialSellValue={euroData?.oficial_euro.value_sell}
        OfficialBuyValue={euroData?.oficial_euro.value_buy}
        BlueSellValue={euroData?.blue_euro.value_sell}
        BlueBuyValue={euroData?.blue_euro.value_buy}
      />
      <div className="extension-divider"></div>
      <div className="btns-container">
        <motion.button initial="hidden" animate="visible" variants={variants}>
          <BsCalculator />
          <span>Calculadora blue</span>
        </motion.button>
      </div>
    </>
  );
};
