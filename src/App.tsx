import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import { IoCalculatorOutline } from "react-icons/io5";
import {
  PiBackspaceLight,
  PiPushPinSimpleLight,
  PiPushPinSimpleSlashLight,
} from "react-icons/pi";
import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";
import { CurrencyComponent } from "./components/CurrencyComponent/CurrencyComponent";
import { Divider } from "./components/Divider/Divider";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LastUpdated } from "./components/LastUpdated/LastUpdated";
import { CurrencyData } from "./interfaces/interfaces";
import { getStorageViewValue, storageView } from "./utils/utils";

function App() {
  const [dolar, setDolar] = useState<CurrencyData[]>([]);
  const [calculator, setCalculator] = useState(false);
  const [isCalculatorPinned, setIsCalculatorPinned] = useState(false);

  const getStorageView = () => {
    const storage = localStorage.getItem("IsCalculatorSticky");
    if (storage) {
      setCalculator(storage === "true");
    }
  };

  useEffect(() => {
    const URLS = {
      dollars: "https://dolarapi.com/v1/dolares",
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

    getStorageView();
    getDolars();
  }, []);

  useLayoutEffect(() => {
    const greenLights = document.querySelectorAll('[id^="green"]');
    const redLights = document.querySelectorAll('[id^="red"]');

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(greenLights, {
      duration: 0.5,
      fill: "#FA352D",
      ease: "easeIn",
      stagger: 0.1,
    }).to(redLights, {
      duration: 0.5,
      fill: "#9CBE34",
      ease: "easeIn",
      stagger: 0.1,
      delay: 0.1,
    });
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
    fadeOut: () => ({
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
  };

  return (
    <div className="extension-container">
      <Header />
      <Divider />
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
          </motion.div>
        ) : null}
      </AnimatePresence>
      {calculator ? <Calculator currencies={dolar} /> : null}
      <Divider />
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
                setIsCalculatorPinned(false);
              }}
            >
              <PiPushPinSimpleSlashLight />
              Desfijar
            </motion.button>
          ) : (
            <motion.button
              initial="hidden"
              animate={isCalculatorPinned ? "fadeOut" : "visible"}
              variants={variants}
              onClick={() => {
                storageView(true);
                getStorageView();
                setIsCalculatorPinned(true);
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
