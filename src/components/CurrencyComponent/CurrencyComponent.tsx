import { motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { CurrencyComponentProps } from "../../interfaces/interfaces";
import { errorTooltipStyles } from "../../utils/utils";

export const CurrencyComponent = ({
  type,
  buyValue,
  sellValue,
}: CurrencyComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="currency-container"
    >
      <div className="type-container">
        <h2>
          {type === "Euro oficial" ? null : "Dólar"} {type}
        </h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          {sellValue != null ? (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="price-value"
            >
              ${Math.round(sellValue)} ARS
            </motion.span>
          ) : (
            <div
              className="error-container"
              data-tooltip-id="errorTooltip"
              data-tooltip-content="Error en el servidor. Intente nuevamente más tarde."
            >
              <MdError className="error-icon" />
              <span>Error</span>
            </div>
          )}
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          {buyValue != null ? (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="price-value"
            >
              ${Math.round(buyValue)} ARS
            </motion.span>
          ) : (
            <div
              className="error-container"
              data-tooltip-id="errorTooltip"
              data-tooltip-content="Error en el servidor. Intente nuevamente más tarde."
            >
              <MdError className="error-icon" />
              <span>Error</span>
            </div>
          )}
        </div>
      </div>
      <Tooltip
        id="errorTooltip"
        opacity={1}
        classNameArrow="tooltip-arrow"
        style={errorTooltipStyles}
      />
    </motion.div>
  );
};
