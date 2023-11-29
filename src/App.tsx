import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlinePushpin } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";
import { LuPinOff } from "react-icons/lu";
import { TiArrowBackOutline } from "react-icons/ti";
import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
// import { Title } from "./components/Title/Title";
import { CurrencyData } from "./interfaces/interfaces";
import { getStorageViewValue, storageView } from "./utils/utils";

function App() {
  const [dolar, setDolar] = useState([]);
  const [euro, setEuro] = useState<CurrencyData | null>(null);
  const [card, setCard] = useState<CurrencyData | null>(null);
  const [calculator, setCalculator] = useState(false);
  const [test, setTest] = useState(false);
  const URLS = {
    dollars: "https://dolarapi.com/v1/dolares",
    euro: "https://dolarapi.com/v1/cotizaciones/eur",
    card: "https://dolarapi.com/v1/dolares/tarjeta",
  };

  const getStorageView = () => {
    const storage = localStorage.getItem("IsCalculatorSticky");
    if (storage) {
      setCalculator(storage === "true");
    }
  };

  useEffect(() => {
    const getDolars = async () => {
      try {
        const { data } = await axios.get(URLS.dollars);
        console.log(data);
        setDolar(data);
      } catch (err) {
        console.log("Hubo un error al obtener el valor del dolar", err);
      }
    };
    const getOtherCurrencies = async () => {
      try {
        const euro = (await axios.get(URLS.euro)).data;
        const card = (await axios.get(URLS.card)).data;
        setEuro(euro);
        setCard(card);
        console.log(euro, card);
      } catch (err) {
        console.log("Hubo un error al obtener el valor del euro", err);
      }
    };

    getStorageView();
    getDolars();
    getOtherCurrencies();
  }, []);

  // const lastUpdate = new Date(euro?.last_update),
  //   day = lastUpdate.getDate(),
  //   month = lastUpdate.getMonth() + 1,
  //   year = lastUpdate.getFullYear().toString().slice(2),
  //   hours = lastUpdate.getHours(),
  //   minutes = lastUpdate.getMinutes();

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
      <div className="extension-divider"></div>
      {!calculator ? (
        <div className="currencies-container">
          {dolar.map((dolar: any) => (
            <CurrencyComponent
              key={dolar.nombre}
              type={
                dolar.nombre == "Contado con liquidación" ? "CCL" : dolar.nombre
              }
              buyValue={dolar.compra}
              sellValue={dolar.venta}
            />
          ))}
          {card && (
            <CurrencyComponent
              type={card.nombre}
              buyValue={card.compra}
              sellValue={card.venta}
            />
          )}
          {euro && (
            <CurrencyComponent
              type={`${euro.nombre} ${euro.casa}`}
              buyValue={euro.compra}
              sellValue={euro.venta}
            />
          )}
        </div>
      ) : null}
      {calculator ? <Calculator dollarValue={400} euroValue={300} /> : null}
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
