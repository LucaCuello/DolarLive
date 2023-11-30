import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CalculatorProps, CurrencyData } from "../../interfaces/interfaces";

export const Calculator = ({ currencies }: CalculatorProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyData | null>(
    null
  );

  useEffect(() => {
    if (currencies.length > 0) {
      const initialCurrency =
        currencies.find((c) => c.nombre === "Blue") || currencies[0];
      setSelectedCurrency(initialCurrency);
    }
  }, [currencies]);

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
      <FormControl fullWidth sx={{ my: 2 }} color="success">
        <InputLabel id="currency-select-label">Tipo de USD</InputLabel>
        <Select
          labelId="currency-select-label"
          id="currency-select"
          value={selectedCurrency ? selectedCurrency.nombre : ""}
          label="Tipo de USD"
          onChange={(e) => {
            const selected = currencies.find(
              (currency) => currency.nombre === e.target.value
            );
            if (selected) {
              setSelectedCurrency(selected);
            }
          }}
        >
          {currencies.map((currency) => (
            <MenuItem key={currency.nombre} value={currency.nombre}>
              {currency.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="calculator-title">
        {selectedCurrency ? (
          <>
            <h2>
              {selectedCurrency.moneda} {selectedCurrency.nombre}
            </h2>
            <span>
              1 {selectedCurrency.moneda} equivale a $
              {Math.round(selectedCurrency.venta)} ARS
            </span>
          </>
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
            name="usd-input"
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
          {selectedCurrency ? (
            <CurrencyInput
              suffix=" ARS"
              prefix="$"
              className="input-result"
              name="ars-output"
              disabled={true}
              readOnly={true}
              groupSeparator="."
              decimalSeparator=","
              intlConfig={{ locale: "en-US", currency: "ARS" }}
              decimalsLimit={2}
              value={
                isNaN(selectedCurrency.venta * +usdConversionValue)
                  ? ""
                  : (selectedCurrency.venta * +usdConversionValue).toFixed(2)
              }
            />
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
            name="ars-input"
            placeholder="ARS"
            groupSeparator="."
            decimalSeparator=","
            intlConfig={{ locale: "en-US", currency: "ARS" }}
            decimalsLimit={2}
            value={usdToArs}
            onValueChange={(value) => {
              if (value !== undefined) {
                setUsdToArs(value);
              } else {
                setUsdToArs("");
              }
            }}
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
          {selectedCurrency ? (
            <CurrencyInput
              suffix=" USD"
              prefix="$"
              className="input-result"
              name="usd-output"
              disabled={true}
              readOnly={true}
              groupSeparator="."
              decimalSeparator=","
              intlConfig={{ locale: "en-US", currency: "USD" }}
              decimalsLimit={2}
              value={
                selectedCurrency && selectedCurrency.venta && +usdToArs
                  ? (+usdToArs / selectedCurrency.venta).toFixed(2)
                  : 0
              }
            />
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};
