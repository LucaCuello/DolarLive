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
    <div className="w-[190px] bg-card border border-border rounded-md p-3">
      <h2 className="text-sm font-semibold text-foreground mb-2">
        {type === "Euro oficial" ? null : "Dólar"} {type}
      </h2>
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Venta:</span>
        {sellValue != null ? (
          <span className="font-medium text-foreground">
            ${Math.round(sellValue)} ARS
          </span>
        ) : (
          <div
            className="flex items-center gap-1 text-destructive cursor-help"
            data-tooltip-id="errorTooltip"
            data-tooltip-content="Error en el servidor. Intente nuevamente más tarde."
          >
            <MdError className="w-4 h-4" />
            <span>Error</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center text-sm mt-1">
        <span className="text-muted-foreground">Compra:</span>
        {buyValue != null ? (
          <span className="font-medium text-foreground">
            ${Math.round(buyValue)} ARS
          </span>
        ) : (
          <div
            className="flex items-center gap-1 text-destructive cursor-help"
            data-tooltip-id="errorTooltip"
            data-tooltip-content="Error en el servidor. Intente nuevamente más tarde."
          >
            <MdError className="w-4 h-4" />
            <span>Error</span>
          </div>
        )}
      </div>
      <Tooltip
        id="errorTooltip"
        opacity={1}
        classNameArrow="tooltip-arrow"
        style={errorTooltipStyles}
      />
    </div>
  );
};
