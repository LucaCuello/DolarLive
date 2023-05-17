import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";

import { BsCalculator, BsDownload } from "react-icons/bs";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

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
        <span>Última actualización: {data?.last_update.slice(0, 10)}</span>
      </div>
      <div className="extension-divider"></div>
      <CurrencyComponent
        type="Dólar"
        officialSellValue={data?.oficial.value_sell}
        OfficialBuyValue={data?.oficial.value_buy}
        BlueBuyValue={data?.blue.value_buy}
        BlueSellValue={data?.blue.value_sell}
      />
      <div className="extension-divider"></div>
      <CurrencyComponent
        type="Euro"
        officialSellValue={data?.oficial_euro.value_sell}
        OfficialBuyValue={data?.oficial_euro.value_buy}
        BlueBuyValue={data?.blue_euro.value_buy}
        BlueSellValue={data?.blue_euro.value_sell}
      />
      <div className="extension-divider"></div>
      <div className="btns-container">
        <button>
          <BsCalculator />
          <span>Calculadora</span>
        </button>
        <button>
          <BsDownload />
          <span>Descargar</span>
        </button>
      </div>
      <footer className="extension-footer">
        <span>Desarrollado por Luca Cuello</span>
        <div className="contact-links">
          <a href="https://github.com/LucaCuello" target="_blank">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/luca-cuello41/" target="_blank">
            <SiLinkedin />
          </a>
          <a href="https://twitter.com/LucaCuello_" target="_blank">
            <SiTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
