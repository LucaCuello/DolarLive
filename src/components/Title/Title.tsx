import { motion } from "framer-motion";

type TitleProps = {
  day: number;
  month: number;
  year: string;
  hours: number;
  minutes: number;
  calculator?: boolean;
  euro?: object;
};

export const Title = ({ day, month, year, hours, minutes, calculator, euro }: TitleProps) => {
  return (
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
  );
};
