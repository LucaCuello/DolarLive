import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoCalculatorOutline } from "react-icons/io5";
import {
  PiBackspaceLight,
  PiPushPinSimpleLight,
  PiPushPinSimpleSlashLight,
} from "react-icons/pi";
import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LastUpdated } from "./components/Title/LastUpdated";
import { CurrencyData } from "./interfaces/interfaces";
import { getStorageViewValue, storageView } from "./utils/utils";

function App() {
  const [dolar, setDolar] = useState<CurrencyData[]>([]);
  const [euro, setEuro] = useState<CurrencyData | null>(null);
  const [card, setCard] = useState<CurrencyData | null>(null);
  const [calculator, setCalculator] = useState(false);
  const [test, setTest] = useState(false);

  const getStorageView = () => {
    const storage = localStorage.getItem("IsCalculatorSticky");
    if (storage) {
      setCalculator(storage === "true");
    }
  };

  useEffect(() => {
    const URLS = {
      dollars: "https://dolarapi.com/v1/dolares",
      euro: "https://dolarapi.com/v1/cotizaciones/eur",
      card: "https://dolarapi.com/v1/dolares/tarjeta",
    };

    const getDolars = async () => {
      try {
        const { data } = await axios.get(URLS.dollars);
        const sortedData = data.sort((a: CurrencyData, b: CurrencyData) => {
          if (a.nombre === "Blue") return -1;
          if (b.nombre === "Blue") return 1;
          return 0;
        });
        setDolar(sortedData);
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
      } catch (err) {
        console.log("Hubo un error al obtener el valor del euro", err);
      }
    };

    getStorageView();
    getDolars();
    getOtherCurrencies();
  }, []);

  const date = new Date(dolar[0]?.fechaActualizacion),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear().toString().slice(2),
    hours = date.getHours();
  const formattedDate = `${day}/${month}/${year} a las ${hours}hs`;

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
      <AnimatePresence>
        {!calculator ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="currencies-container"
          >
            {dolar.map((dolar: any) => (
              <CurrencyComponent
                key={dolar.nombre}
                type={
                  dolar.nombre == "Contado con liquidación"
                    ? "CCL"
                    : dolar.nombre
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
          </motion.div>
        ) : null}
      </AnimatePresence>
      {calculator ? <Calculator currencies={dolar} /> : null}
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
          {!calculator ? <IoCalculatorOutline /> : <PiBackspaceLight />}
          <span>{!calculator ? "Calculadora" : "Atrás"}</span>
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
              <PiPushPinSimpleSlashLight />
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
              <PiPushPinSimpleLight />
              Fijar calculadora
            </motion.button>
          )
        ) : null}
      </div>
      <LastUpdated fullDate={formattedDate} />
      <Footer />
    </div>
  );
}

export default App;
