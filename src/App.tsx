import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";

import { motion } from "framer-motion";

import { BsCalculator } from "react-icons/bs";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { TiArrowBackOutline } from "react-icons/ti";

import { Calculator } from "./components/Calculator/Calculator";

function App() {
  const [data, setData] = useState<any>(null);
  const [calculator, setCalculator] = useState(false);

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

  const lastUpdate = new Date(data?.last_update),
    day = lastUpdate.getDate(),
    month = lastUpdate.getMonth() + 1,
    year = lastUpdate.getFullYear().toString().slice(2),
    hours = lastUpdate.getHours(),
    minutes = lastUpdate.getMinutes();

  return (
    <div className="extension-container">
      <header className="extension-header">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          src="/src/assets/logo.png"
          draggable={false}
          alt="logo"
        ></motion.img>
      </header>
      <motion.div
        className="extension-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <h1>{!calculator ? "Cotización actual" : "Calculadora blue"}</h1>
        <span>Última actualización de cambio:</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: data ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          {isNaN(day) ? "" : `${day}/${month}/${year} a las ${hours}:${minutes}hs`}
        </motion.span>
      </motion.div>
      <div className="extension-divider"></div>
      {!calculator ? (
        <>
          {" "}
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
          />{" "}
        </>
      ) : null}
      {calculator ? (
        <Calculator
          dollarValue={+data?.blue.value_sell}
          euroValue={+data?.blue_euro.value_sell}
        />
      ) : null}
      <div className="extension-divider"></div>
      <div className="btns-container">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          onClick={() => {
            setCalculator(!calculator);
          }}
        >
          {!calculator ? <BsCalculator /> : <TiArrowBackOutline />}

          <span>{!calculator ? "Calculadora blue" : "Atrás"}</span>
        </motion.button>
      </div>
      <footer className="extension-footer">
        <span>
          Developed by <span id="name-highlight">Luca Cuello</span>
        </span>
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
