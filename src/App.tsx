import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

// Icons
import { AiOutlinePushpin } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";
import { LuPinOff } from "react-icons/lu";
import { TiArrowBackOutline } from "react-icons/ti";

// Components
import { Calculator } from "./components/Calculator/Calculator";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";

function App() {
  const [euro, setEuro] = useState<any>(null);
  const [dolar, setDolar] = useState<any>(null);
  const [calculator, setCalculator] = useState(false);
  const [test, setTest] = useState(false);

  const URLEuro = "https://api.bluelytics.com.ar/v2/latest";
  const URLDolar = "https://dolarapi.com/v1/dolares/";

  const storageView = (state: boolean) => {
    localStorage.setItem("IsCalculatorSticky", state.toString());
  };

  const getStorageView = () => {
    const storage = localStorage.getItem("IsCalculatorSticky");
    if (!storage) return;
    if (storage === "true") {
      setCalculator(true);
    } else {
      setCalculator(false);
    }
  };

  const getStorageViewValue = () => {
    const storage = localStorage.getItem("IsCalculatorSticky");
    if (!storage) return;
    return storage === "true";
  };

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

    getStorageView();
    getEuro();
    getDolar();
  }, []);

  const lastUpdate = new Date(euro?.last_update),
    day = lastUpdate.getDate(),
    month = lastUpdate.getMonth() + 1,
    year = lastUpdate.getFullYear().toString().slice(2),
    hours = lastUpdate.getHours(),
    minutes = lastUpdate.getMinutes();

  const variants = {
    hidden: { scale: 0 },
    visible: () => ({
      scale: 1,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
    test: () => ({
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
  };

  return (
    <div className="extension-container">
      <Header />
      <Title day={day} month={month} year={year} hours={hours} minutes={minutes} calculator={calculator} euro={euro} />

      <div className="extension-divider"></div>
      {!calculator ? (
        <>
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
          />
        </>
      ) : null}
      {calculator ? <Calculator dollarValue={+dolar?.dolarBlue.venta} euroValue={+euro?.blue_euro.value_sell} /> : null}
      <div className="extension-divider"></div>
      <div className="btns-container">
        <motion.button
          initial="hidden"
          animate="visible"
          variants={variants}
          onClick={() => {
            setCalculator(!calculator);
          }}
        >
          {!calculator ? <BsCalculator /> : <TiArrowBackOutline />}

          <span>{!calculator ? "Calculadora blue" : "Atrás"}</span>
        </motion.button>

        {calculator ? (
          getStorageViewValue() ? (
            <motion.button
              initial="hidden"
              animate="visible"
              variants={variants}
              onClick={() => {
                storageView(false);
                getStorageView();
                setTest(false);
              }}
            >
              <LuPinOff />
              Desfijar
            </motion.button>
          ) : (
            <motion.button
              initial="hidden"
              animate={test ? "test" : "visible"}
              variants={variants}
              onClick={() => {
                storageView(true);
                getStorageView();
                setTest(true);
              }}
            >
              <AiOutlinePushpin />
              Fijar calculadora
            </motion.button>
          )
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
