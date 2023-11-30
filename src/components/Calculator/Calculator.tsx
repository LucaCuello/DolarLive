import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CalculatorProps } from "../../interfaces/interfaces";

export const Calculator = ({ dollarValue }: CalculatorProps) => {
  const [usdConversionValue, setUsdConversionValue] = useState<string | number>(
    ""
  );
  const [usdToArs, setUsdToArs] = useState<string | number>("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="calculator-container"
    >
      <div className="calculator-title">
        <h2>Dólar blue</h2>
        {dollarValue ? (
          <span>1 dólar equivale a ${dollarValue} ARS</span>
        ) : (
          <span>Cargando...</span>
        )}
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <AiOutlineDollarCircle />
          </div>
          <CurrencyInput
            suffix=" USD"
            prefix="$"
            className="input"
            name="input-name"
            placeholder="USD"
            groupSeparator="."
            decimalSeparator=","
            intlConfig={{ locale: "en-US", currency: "USD" }}
            autoFocus={true}
            decimalsLimit={2}
            value={usdConversionValue}
            onValueChange={(value) => {
              if (value !== undefined) {
                setUsdConversionValue(value);
              } else {
                setUsdConversionValue("");
              }
            }}
          ></CurrencyInput>
          <div className="delete-container">
            <AnimatePresence>
              {usdConversionValue ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0, y: -25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 25 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <BsTrash
                    onClick={() => {
                      setUsdConversionValue("");
                    }}
                  />
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="result-container">
          {dollarValue ? (
            <CurrencyInput
              suffix=" ARS"
              prefix="$"
              className="input-result"
              name="input-name"
              groupSeparator="."
              decimalSeparator=","
              intlConfig={{ locale: "en-US", currency: "USD" }}
              disabled={true}
              readOnly={true}
              decimalsLimit={2}
              value={
                isNaN(dollarValue * +usdConversionValue)
                  ? 0
                  : dollarValue * +usdConversionValue
              }
            ></CurrencyInput>
          ) : null}
        </div>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <FaRegMoneyBillAlt />
          </div>
          <CurrencyInput
            suffix=" ARS"
            prefix="$"
            className="input"
            name="input-name"
            placeholder="ARS"
            groupSeparator="."
            decimalSeparator=","
            intlConfig={{ locale: "en-US", currency: "USD" }}
            decimalsLimit={2}
            value={usdToArs}
            onValueChange={(value) => {
              if (value !== undefined) {
                setUsdToArs(value);
              } else {
                setUsdToArs("");
              }
            }}
          ></CurrencyInput>
          <div className="delete-container">
            <AnimatePresence>
              {usdToArs ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0, y: -25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 25 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <BsTrash
                    onClick={() => {
                      setUsdToArs("");
                    }}
                  />
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="result-container">
          {dollarValue ? (
            <CurrencyInput
              suffix=" USD"
              prefix="$"
              className="input-result"
              name="input-name"
              groupSeparator="."
              decimalSeparator=","
              intlConfig={{ locale: "en-US", currency: "USD" }}
              disabled={true}
              readOnly={true}
              decimalsLimit={2}
              decimalScale={2}
              value={
                isNaN(+usdToArs / dollarValue) ? 0 : +usdToArs / dollarValue
              }
            ></CurrencyInput>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};
