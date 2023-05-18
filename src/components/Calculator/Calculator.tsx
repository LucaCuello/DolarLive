import { useState } from "react";

type CalculatorProps = {
  dollarValue: number;
  euroValue: number;
};

export const Calculator = ({ dollarValue, euroValue }: CalculatorProps) => {
  const [usdValue, setUsdValue] = useState(0);
  const [arsValue, setArsValue] = useState(0);

  return (
    <div className="calculator-container">
      <h2>1 USD = ${dollarValue} ARS</h2>
      <input
        type="number"
        onChange={(e) => setUsdValue(e.target.valueAsNumber)}
        placeholder="Ingrese cantidad en USD"
      />
      <span>
        $ {isNaN(dollarValue * usdValue) ? "0" : (dollarValue * usdValue).toFixed(2)}{" "}
        ARS
      </span>

      <input
        type="number"
        onChange={(e) => setArsValue(e.target.valueAsNumber)}
        placeholder="Ingrese cantidad en ARS"
      />
      <span>
        $ {isNaN(arsValue / dollarValue) ? "0" : (arsValue / dollarValue).toFixed(2)}{" "}
        USD
      </span>
    </div>
  );
};
