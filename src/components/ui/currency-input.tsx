import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface CurrencyInputProps {
  value: string;
  onChange?: (value: string) => void;
  currency?: "USD" | "ARS";
  readOnly?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

// Formatea un número para mostrar en formato argentino (1.234,56)
function formatForDisplay(value: string): string {
  if (!value || value === "") return "";

  // Separar parte entera y decimal
  const parts = value.split(".");
  const integerPart = parts[0] || "0";
  const decimalPart = parts[1];

  // Agregar separadores de miles (puntos)
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Si hay parte decimal, agregar con coma
  if (decimalPart !== undefined) {
    return `${formattedInteger},${decimalPart}`;
  }

  return formattedInteger;
}

// Parsea el input del usuario (acepta coma como decimal, punto como miles)
function parseInput(input: string): string {
  // Remover todo excepto números, coma y punto
  let cleaned = input.replace(/[^\d.,]/g, "");

  // Si hay coma, es el separador decimal (formato argentino)
  // Remover puntos (separadores de miles) y reemplazar coma por punto
  if (cleaned.includes(",")) {
    cleaned = cleaned.replace(/\./g, ""); // Remover puntos de miles
    cleaned = cleaned.replace(",", "."); // Coma a punto decimal
  }

  // Validar que sea un número válido con máximo 2 decimales
  const match = cleaned.match(/^(\d*)\.?(\d{0,2})/);
  if (match) {
    const integer = match[1] || "0";
    const decimal = match[2];
    if (decimal) {
      return `${integer}.${decimal}`;
    }
    return integer;
  }

  return "";
}

export function CurrencyInput({
  value,
  onChange,
  currency = "USD",
  readOnly = false,
  placeholder,
  autoFocus,
  className,
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = React.useState("");

  // Sincronizar displayValue cuando cambia value externamente
  React.useEffect(() => {
    setDisplayValue(formatForDisplay(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange || readOnly) return;

    const rawInput = e.target.value;

    // Remover prefijo $ y sufijo de moneda para procesar
    const cleanedInput = rawInput
      .replace(/^\$\s*/, "")
      .replace(/\s*(USD|ARS)$/i, "")
      .trim();

    // Parsear y validar
    const parsedValue = parseInput(cleanedInput);

    // Actualizar el valor formateado para mostrar
    setDisplayValue(formatForDisplay(parsedValue));

    // Enviar el valor numérico (con punto decimal)
    onChange(parsedValue);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // Seleccionar todo el texto al hacer focus
    e.target.select();
  };

  const suffix = currency === "USD" ? " USD" : " ARS";
  const displayWithCurrency = displayValue ? `$${displayValue}${suffix}` : "";

  return (
    <Input
      type="text"
      value={readOnly ? displayWithCurrency : displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      readOnly={readOnly}
      disabled={readOnly}
      placeholder={placeholder || currency}
      autoFocus={autoFocus}
      className={cn(
        "font-medium",
        readOnly && "bg-muted cursor-default",
        className
      )}
    />
  );
}
