export interface CurrencyData {
  venta: number;
  compra: number;
  moneda: string;
  nombre: string;
  casa: string;
  fechaActualizacion: string;
}

export interface LastUpdatedProps {
  fullDate: string;
}

export interface CalculatorProps {
  currencies: CurrencyData[];
}
