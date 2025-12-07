import { useEffect, useState } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CurrencyInput } from "@/components/ui/currency-input";
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

  const [usdValue, setUsdValue] = useState("");
  const [arsValue, setArsValue] = useState("");

  // Calcular conversiones
  const usdToArsResult =
    selectedCurrency && usdValue
      ? (selectedCurrency.venta * parseFloat(usdValue)).toFixed(2)
      : "";

  const arsToUsdResult =
    selectedCurrency && arsValue && selectedCurrency.venta
      ? (parseFloat(arsValue) / selectedCurrency.venta).toFixed(2)
      : "";

  return (
    <div className="calculator-container">
      <div className="w-full my-4">
        <Label htmlFor="currency-select" className="text-sm font-medium">
          Tipo de USD
        </Label>
        <Select
          value={selectedCurrency?.nombre || ""}
          onValueChange={(value) => {
            const selected = currencies.find((c) => c.nombre === value);
            if (selected) setSelectedCurrency(selected);
          }}
        >
          <SelectTrigger id="currency-select" className="w-full mt-1">
            <SelectValue placeholder="Seleccionar..." />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency.nombre} value={currency.nombre}>
                {currency.nombre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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

      {/* Conversor USD a ARS */}
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <AiOutlineDollarCircle />
          </div>
          <CurrencyInput
            value={usdValue}
            onChange={setUsdValue}
            currency="USD"
            placeholder="USD"
            autoFocus
            className="input"
          />
          <div className="delete-container">
            {usdValue && (
              <span>
                <BsTrash
                  onClick={() => setUsdValue("")}
                  className="cursor-pointer hover:text-destructive transition-colors"
                />
              </span>
            )}
          </div>
        </div>
        <div className="result-container">
          {selectedCurrency && (
            <CurrencyInput
              value={usdToArsResult}
              currency="ARS"
              readOnly
              className="input-result"
            />
          )}
        </div>
      </div>

      {/* Conversor ARS a USD */}
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <FaRegMoneyBillAlt />
          </div>
          <CurrencyInput
            value={arsValue}
            onChange={setArsValue}
            currency="ARS"
            placeholder="ARS"
            className="input"
          />
          <div className="delete-container">
            {arsValue && (
              <span>
                <BsTrash
                  onClick={() => setArsValue("")}
                  className="cursor-pointer hover:text-destructive transition-colors"
                />
              </span>
            )}
          </div>
        </div>
        <div className="result-container">
          {selectedCurrency && (
            <CurrencyInput
              value={arsToUsdResult}
              currency="USD"
              readOnly
              className="input-result"
            />
          )}
        </div>
      </div>
    </div>
  );
};
