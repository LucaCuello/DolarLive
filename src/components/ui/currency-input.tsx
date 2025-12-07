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

const formatter = new Intl.NumberFormat("es-AR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function formatForDisplay(value: string): string {
  if (!value) return "";
  const num = parseFloat(value);
  if (isNaN(num)) return "";
  return formatter.format(num);
}

function parseInput(input: string): string {
  let cleaned = input.replace(/[^\d,]/g, "");
  if (!cleaned) return "";

  cleaned = cleaned.replace(",", ".");
  const match = cleaned.match(/^(\d*)\.?(\d{0,2})/);

  if (match) {
    let integer = match[1] || "";
    const decimal = match[2];

    if (integer.length > 1) {
      integer = integer.replace(/^0+/, "") || "0";
    }

    if (!integer && decimal) {
      integer = "0";
    }

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
  placeholder,
  autoFocus,
  className,
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = React.useState("");

  React.useEffect(() => {
    setDisplayValue(formatForDisplay(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    const rawInput = e.target.value;
    const parsedValue = parseInput(rawInput);
    setDisplayValue(formatForDisplay(parsedValue));
    onChange(parsedValue);
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
      placeholder={placeholder || currency}
      autoFocus={autoFocus}
      className={cn("font-medium", className)}
    />
  );
}
