import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";

import { motion } from "framer-motion";

import { BsCalculator } from "react-icons/bs";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { TiArrowBackOutline } from "react-icons/ti";

import { Calculator } from "./components/Calculator/Calculator";

function App() {
  const [euro, setEuro] = useState<any>(null);
  const [dolar, setDolar] = useState<any>(null);
  const [calculator, setCalculator] = useState(false);

  const URLEuro = "https://api.bluelytics.com.ar/v2/latest";
  const URLDolar = "https://dolar-api-argentina.vercel.app/v1/dolares/";

  useEffect(() => {
    const getEuro = async () => {
      try {
        const fetchData = await fetch(URLEuro),
          json = await fetchData.json(),
          response = await json;
        setEuro(response);
      } catch (err) {
        console.log(err);
      }
    };

    const getDolar = async () => {
      try {
        const fetchData = await fetch(URLDolar),
          json = await fetchData.json(),
          response = await json;

        const dolarOficial = response[0];
        const dolarBlue = response[1];
        const responseObject = {
          dolarOficial,
          dolarBlue,
        };
        setDolar(responseObject);
      } catch (err) {
        console.log(err);
      }
    };

    getEuro();
    getDolar();
  }, []);

  const lastUpdate = new Date(euro?.last_update),
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
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1>{!calculator ? "Cotización actual" : "Calculadora blue"}</h1>
        <span>Última actualización de cambio:</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: euro ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
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
            officialSellValue={dolar?.dolarOficial.venta}
            OfficialBuyValue={dolar?.dolarOficial.compra}
            BlueSellValue={dolar?.dolarBlue.venta}
            BlueBuyValue={dolar?.dolarBlue.compra}
          />
          <div className="extension-divider"></div>
          <CurrencyComponent
            type="Euro"
            officialSellValue={euro?.oficial_euro.value_sell}
            OfficialBuyValue={euro?.oficial_euro.value_buy}
            BlueSellValue={euro?.blue_euro.value_sell}
            BlueBuyValue={euro?.blue_euro.value_buy}
          />{" "}
        </>
      ) : null}
      {calculator ? (
        <Calculator
          dollarValue={+dolar?.dolarBlue.venta}
          euroValue={+euro?.blue_euro.value_sell}
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
