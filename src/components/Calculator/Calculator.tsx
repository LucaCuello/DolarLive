import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
        <span>1 dólar = ${dollarValue} ARS</span>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <AiOutlineDollarCircle />
          </div>
          <input
            className="input"
            type="number"
            onChange={(e) => setUsdConversionValue(e.target.valueAsNumber)}
            placeholder="USD"
            autoFocus={true}
            min={0}
            value={usdConversionValue}
          />
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
          <span>$</span>
          <input
            className="input-result"
            type="text"
            value={
              isNaN(dollarValue * +usdConversionValue) ? 0 : (dollarValue * +usdConversionValue).toLocaleString("es-ES")
            }
            disabled={true}
            readOnly={true}
          ></input>
          <span>ARS</span>
        </div>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <FaRegMoneyBillAlt />
          </div>
          <input
            className="input"
            type="number"
            onChange={(e) => setUsdToArs(e.target.valueAsNumber)}
            placeholder="ARS"
            min={0}
            value={usdToArs}
          />
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
          <span>$</span>
          <input
            className="input-result"
            type="text"
            value={isNaN(+usdToArs / dollarValue) ? 0 : (+usdToArs / dollarValue).toFixed(2)}
            disabled={true}
            readOnly={true}
          ></input>
          <span>USD</span>
        </div>
      </div>
      <div className="extension-divider"></div>
      <div className="calculator-title">
        <h2>Euro blue</h2>
        <span>1 euro = ${euroValue} ARS</span>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <AiOutlineEuro />
          </div>
          <input
            className="input"
            type="number"
            onChange={(e) => setEuroConversionValue(e.target.valueAsNumber)}
            placeholder="EUR"
            min={0}
            value={euroConversionValue}
          />
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
          <span>$</span>
          <input
            className="input-result"
            type="text"
            value={
              isNaN(euroValue * +euroConversionValue) ? 0 : (euroValue * +euroConversionValue).toLocaleString("es-ES")
            }
            disabled={true}
            readOnly={true}
          ></input>
          <span>ARS</span>
        </div>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <FaRegMoneyBillAlt />
          </div>
          <input
            className="input"
            type="number"
            onChange={(e) => setEuroToArs(e.target.valueAsNumber)}
            placeholder="ARS"
            min={0}
            value={euroToArs}
          />
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
          <span>$</span>
          <input
            className="input-result"
            type="text"
            value={isNaN(+euroToArs / euroValue) ? 0 : (+euroToArs / euroValue).toFixed(2)}
            disabled={true}
            readOnly={true}
          ></input>
          <span>EUR</span>
        </div>
      </div>
    </motion.div>
  );
};
