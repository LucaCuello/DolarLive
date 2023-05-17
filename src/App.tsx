import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";

function App() {
  const [data, setData] = useState<any>(null);

  const URL = "https://api.bluelytics.com.ar/v2/latest";

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(URL),
        json = await fetchData.json(),
        response = await json;

      setData(response);
    };

    getData();
  }, []);

  return (
    <div className="extension-container">
      <header className="extension-header">
        <img src="/src/assets/logo.png" draggable={false} alt="logo"></img>
      </header>
      <div className="extension-title">
        <h1>Cotización actual</h1>
        <span>Última actualización: 01/01/2023</span>
      </div>
      <div className="extension-divider"></div>
      <CurrencyComponent type="Dólar" />
      <div className="extension-divider"></div>
      <CurrencyComponent type="Euro" />
      <div className="extension-divider"></div>

      {/* <p>Valor venta: ${data?.oficial.value_sell} ARS</p>
      <p>Valor compra: ${data?.oficial.value_buy} ARS</p> */}
    </div>
  );
}

export default App;
