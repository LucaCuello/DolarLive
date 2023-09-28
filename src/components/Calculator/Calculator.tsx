import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { AiOutlineDollarCircle, AiOutlineEuro } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";

type CalculatorProps = {
  dollarValue: number;
  euroValue: number;
};

export const Calculator = ({ dollarValue, euroValue }: CalculatorProps) => {
  const [usdConversionValue, setUsdConversionValue] = useState<string | number>("");
  const [usdToArs, setUsdToArs] = useState<string | number>("");

  const [euroConversionValue, setEuroConversionValue] = useState<string | number>("");
  const [euroToArs, setEuroToArs] = useState<string | number>("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="calculator-container"
    >
      <div className="calculator-title">
        <h2>Dólar blue</h2>
        <span>1 dólar equivale a ${dollarValue} ARS</span>
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
          <CurrencyInput
            suffix=" ARS"
            prefix="$"
            className="input-result"
            name="input-name"
            groupSeparator="."
            decimalSeparator=","
            intlConfig={{ locale: "es-ES", currency: "ARS" }}
            disabled={true}
            readOnly={true}
            decimalsLimit={2}
            value={isNaN(dollarValue * +usdConversionValue) ? 0 : dollarValue * +usdConversionValue}
          ></CurrencyInput>
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
            intlConfig={{ locale: "es-ES", currency: "ARS" }}
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
            decimalsLimit={1}
            value={isNaN(+usdToArs / dollarValue) ? 0 : (+usdToArs / dollarValue).toFixed(2)}
          ></CurrencyInput>
        </div>
      </div>
      <div className="extension-divider"></div>
      <div className="calculator-title">
        <h2>Euro blue</h2>
        <span>1 euro equivale a ${euroValue} ARS</span>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <AiOutlineEuro />
          </div>
          <CurrencyInput
            suffix=" EUR"
            prefix="$"
            className="input"
            name="input-name"
            placeholder="EUR"
            groupSeparator="."
            decimalSeparator=","
            intlConfig={{ locale: "es-ES", currency: "EUR" }}
            decimalsLimit={2}
            value={euroConversionValue}
            onValueChange={(value) => {
              if (value !== undefined) {
                setEuroConversionValue(value);
              } else {
                setEuroConversionValue("");
              }
            }}
          ></CurrencyInput>
          <div className="delete-container">
            <AnimatePresence>
              {euroConversionValue ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0, y: -25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 25 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <BsTrash
                    onClick={() => {
                      setEuroConversionValue("");
                    }}
                  />
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="result-container">
          <CurrencyInput
            suffix=" ARS"
            prefix="$"
            className="input-result"
            name="input-name"
            groupSeparator="."
            decimalSeparator=","
            intlConfig={{ locale: "es-ES", currency: "ARS" }}
            disabled={true}
            readOnly={true}
            decimalsLimit={2}
            value={isNaN(euroValue * +euroConversionValue) ? 0 : euroValue * +euroConversionValue}
          ></CurrencyInput>
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
            intlConfig={{ locale: "es-ES", currency: "ARS" }}
            decimalsLimit={2}
            value={euroToArs}
            onValueChange={(value) => {
              if (value !== undefined) {
                setEuroToArs(value);
              } else {
                setEuroToArs("");
              }
            }}
          ></CurrencyInput>
          <div className="delete-container">
            <AnimatePresence>
              {euroToArs ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0, y: -25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 25 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <BsTrash
                    onClick={() => {
                      setEuroToArs("");
                    }}
                  />
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="result-container">
          <CurrencyInput
            suffix=" EUR"
            prefix="$"
            className="input-result"
            name="input-name"
            groupSeparator="."
            decimalSeparator=","
            intlConfig={{ locale: "es-ES", currency: "EUR" }}
            disabled={true}
            readOnly={true}
            decimalsLimit={2}
            value={isNaN(+euroToArs / euroValue) ? 0 : (+euroToArs / euroValue).toFixed(2)}
          ></CurrencyInput>
        </div>
      </div>
    </motion.div>
  );
};
