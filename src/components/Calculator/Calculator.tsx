import { useState } from "react";

import { HiCurrencyDollar } from "react-icons/hi";

type CalculatorProps = {
  dollarValue: number;
  euroValue: number;
};

export const Calculator = ({ dollarValue, euroValue }: CalculatorProps) => {
  const [usdConversionValue, setUsdConversionValue] = useState(0);
  const [usdToArs, setUsdToArs] = useState(0);

  const [euroConversionValue, setEuroConversionValue] = useState(0);
  const [euroToArs, setEuroToArs] = useState(0);

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
            onChange={(e) => setUsdConversionValue(e.target.valueAsNumber)}
            placeholder="USD"
            min={0}
          />
        </div>
        <div className="result-container">
          <span>$</span>
          <input
            className="input-result"
            type="number"
            value={dollarValue * usdConversionValue}
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
            onChange={(e) => setUsdToArs(e.target.valueAsNumber)}
            placeholder="ARS"
            min={0}
          />
        </div>
        <div className="result-container">
          <span>$</span>
          <input
            className="input-result"
            type="number"
            value={(usdToArs / dollarValue).toFixed(2)}
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
            <HiCurrencyDollar />
          </div>
          <input
            className="input"
            type="number"
            onChange={(e) => setEuroConversionValue(e.target.valueAsNumber)}
            placeholder="EUR"
            min={0}
          />
        </div>
        <div className="result-container">
          <span>$</span>
          <input
            className="input-result"
            type="number"
            value={euroValue * euroConversionValue}
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
            onChange={(e) => setEuroToArs(e.target.valueAsNumber)}
            placeholder="ARS"
            min={0}
          />
        </div>
        <div className="result-container">
          <span>$</span>
          <input
            className="input-result"
            type="number"
            value={(euroToArs / euroValue).toFixed(2)}
          ></input>
          <span>EUR</span>
        </div>
      </div>
    </div>
  );
};
