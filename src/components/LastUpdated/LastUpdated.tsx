import { LastUpdatedProps } from "../../interfaces/interfaces";

export const LastUpdated = ({ fullDate }: LastUpdatedProps) => {
  return (
    <div className="text-xs text-muted-foreground text-center space-y-1 py-2">
      <div className="flex justify-center gap-1">
        <span>Última actualización de cambio:</span>
        <span>{fullDate ? fullDate : "Cargando..."}</span>
      </div>
      <div className="flex justify-center gap-1 flex-wrap">
        <span>Datos obtenidos de:</span>
        <span>
          <a
            href="https://dolarhoy.com/"
            target="_blank"
            className="text-primary underline hover:no-underline"
          >
            dolarhoy.com
          </a>
          <span className="pl-1">
            a través de{" "}
            <a
              href="https://dolarapi.com/"
              target="_blank"
              className="text-primary underline hover:no-underline"
            >
              DolarApi
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};
