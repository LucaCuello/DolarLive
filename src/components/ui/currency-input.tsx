import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface CurrencyInputProps {
  value: string;
  onChange?: (value: string) => void;
  currency?: "USD" | "ARS";
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

// Formatea número con puntos de miles y coma decimal (formato AR)
const formatWithThousands = (value: string): string => {
  if (!value) return "";

  const [integerPart, decimalPart] = value.split(".");

  // Agregar puntos de miles a la parte entera
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (decimalPart !== undefined) {
    return `${formattedInteger},${decimalPart}`;
  }

  return formattedInteger;
};

// Parsea input del usuario (con puntos de miles y coma decimal) a valor interno
const parseToInternal = (input: string): string => {
  // Remover puntos (miles) y convertir coma a punto (decimal)
  let cleaned = input.replace(/\./g, "").replace(",", ".");

  // Solo permitir dígitos y un punto decimal
  cleaned = cleaned.replace(/[^\d.]/g, "");

  // Solo permitir un punto decimal
  const parts = cleaned.split(".");
  if (parts.length > 2) {
    cleaned = parts[0] + "." + parts.slice(1).join("");
  }

  // Limitar decimales a 2
  if (parts.length === 2 && parts[1].length > 2) {
    cleaned = parts[0] + "." + parts[1].slice(0, 2);
  }

  return cleaned;
};

export function CurrencyInput({
  value,
  onChange,
  currency = "USD",
  placeholder,
  autoFocus,
  className,
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = React.useState("");

  React.useEffect(() => {
    setDisplayValue(formatWithThousands(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    const rawInput = e.target.value;
    const internalValue = parseToInternal(rawInput);

    // Formatear para display con puntos de miles
    setDisplayValue(formatWithThousands(internalValue));
    onChange(internalValue);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <Input
      type="text"
      inputMode="decimal"
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      placeholder={placeholder || `0,00 ${currency}`}
      autoFocus={autoFocus}
      className={cn("font-medium tabular-nums", className)}
    />
  );
}
