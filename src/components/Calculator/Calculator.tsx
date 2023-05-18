import { useState } from "react";

import { HiCurrencyDollar } from "react-icons/hi";

type CalculatorProps = {
  dollarValue: number;
  euroValue: number;
};

export const Calculator = ({ dollarValue, euroValue }: CalculatorProps) => {
  const [usdValue, setUsdValue] = useState(0);
  const [arsValue, setArsValue] = useState(0);

  return (
    <div className="calculator-container">
      <div className="calculator-title">
        <h2>Dólar blue</h2>
        <span>1 dólar = ${dollarValue} ARS</span>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <HiCurrencyDollar />
          </div>
          <input
            className="input"
            type="number"
            onChange={(e) => setUsdValue(e.target.valueAsNumber)}
            placeholder="USD"
            min={0}
          />
        </div>
        <div className="result-container">
          <span>$</span>
          <input
            className="input-result"
            type="number"
            value={dollarValue * usdValue}
          ></input>
          <span>ARS</span>
        </div>
      </div>
      <div className="conversor-container">
        <div className="input-container">
          <div className="coin-container">
            <HiCurrencyDollar />
          </div>
          <input
            className="input"
            type="number"
            onChange={(e) => setArsValue(e.target.valueAsNumber)}
            placeholder="ARS"
            min={0}
          />
        </div>
        <div className="result-container">
          <span>$</span>
          <input
            className="input-result"
            type="number"
            value={(arsValue / dollarValue).toFixed(2)}
          ></input>
          <span>USD</span>
        </div>
      </div>
    </div>
  );
};
