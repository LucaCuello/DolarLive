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
    <div className="flex flex-col gap-4 w-full">
      {/* Selector de moneda */}
      <div className="space-y-2">
        <Label htmlFor="currency-select">Tipo de USD</Label>
        <Select
          value={selectedCurrency?.nombre || ""}
          onValueChange={(value) => {
            const selected = currencies.find((c) => c.nombre === value);
            if (selected) setSelectedCurrency(selected);
          }}
        >
          <SelectTrigger id="currency-select" className="w-full">
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

      {/* Info de la moneda seleccionada */}
      <div className="text-center py-2">
        {selectedCurrency ? (
          <>
            <h2 className="text-lg font-semibold">
              {selectedCurrency.moneda} {selectedCurrency.nombre}
            </h2>
            <p className="text-sm text-muted-foreground">
              1 {selectedCurrency.moneda} = ${Math.round(selectedCurrency.venta)} ARS
            </p>
          </>
        ) : (
          <p className="text-muted-foreground">Cargando...</p>
        )}
      </div>

      {/* Conversor USD a ARS */}
      <div className="flex items-center gap-2">
        <div className="flex items-center flex-1 gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-l-md bg-muted">
            <AiOutlineDollarCircle className="text-xl text-primary" />
          </div>
          <CurrencyInput
            value={usdValue}
            onChange={setUsdValue}
            currency="USD"
            placeholder="USD"
            autoFocus
            className="flex-1 rounded-none"
          />
          <div className="flex items-center justify-center w-10 h-10 rounded-r-md bg-muted">
            {usdValue && (
              <BsTrash
                onClick={() => setUsdValue("")}
                className="cursor-pointer hover:text-destructive transition-colors"
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          {selectedCurrency && (
            <CurrencyInput
              value={usdToArsResult}
              currency="ARS"
              readOnly
              className="bg-primary text-primary-foreground"
            />
          )}
        </div>
      </div>

      {/* Conversor ARS a USD */}
      <div className="flex items-center gap-2">
        <div className="flex items-center flex-1 gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-l-md bg-muted">
            <FaRegMoneyBillAlt className="text-xl text-primary" />
          </div>
          <CurrencyInput
            value={arsValue}
            onChange={setArsValue}
            currency="ARS"
            placeholder="ARS"
            className="flex-1 rounded-none"
          />
          <div className="flex items-center justify-center w-10 h-10 rounded-r-md bg-muted">
            {arsValue && (
              <BsTrash
                onClick={() => setArsValue("")}
                className="cursor-pointer hover:text-destructive transition-colors"
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          {selectedCurrency && (
            <CurrencyInput
              value={arsToUsdResult}
              currency="USD"
              readOnly
              className="bg-primary text-primary-foreground"
            />
          )}
        </div>
      </div>
    </div>
  );
};
