import { CurrencyData } from "../../interfaces/interfaces";
import { CurrencyComponent } from "../CurrencyComponent/CurrencyComponent";
import { Skeleton } from "@/components/ui/skeleton";

interface CurrenciesGridProps {
  currencies: CurrencyData[];
  loading: boolean;
}

export function CurrenciesGrid({ currencies, loading }: CurrenciesGridProps) {
  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-2.5 py-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <Skeleton key={index} className="w-[190px] h-[74px] rounded-md" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-2.5 py-2">
      {currencies.map((currency) => (
        <CurrencyComponent
          key={currency.nombre}
          type={currency.nombre === "Contado con liquidación" ? "CCL" : currency.nombre}
          buyValue={currency.compra}
          sellValue={currency.venta}
        />
      ))}
    </div>
  );
}
