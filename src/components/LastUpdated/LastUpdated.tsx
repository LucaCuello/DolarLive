import { motion } from "framer-motion";
import { LastUpdatedProps } from "../../interfaces/interfaces";

export const LastUpdated = ({ fullDate }: LastUpdatedProps) => {
  return (
    <motion.div
      className="lastupdated-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="lastupdated">
        <span>Última actualización de cambio:</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: fullDate ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {fullDate ? fullDate : "Cargando..."}
        </motion.span>
      </div>
      <div className="lastupdated-data">
        <span>Datos obtenidos de:</span>
        <span>
          <a href="https://dolarhoy.com/" target="_blank">
            https://dolarhoy.com/
          </a>
          <span style={{ paddingLeft: "4px" }}>
            a través de{" "}
            <a href="https://dolarapi.com/" target="_blank">
              DolarApi
            </a>
          </span>
        </span>
      </div>
    </motion.div>
  );
};
