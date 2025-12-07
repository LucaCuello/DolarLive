import { RangoTiempo } from "@/hooks/useDolarHistorico";

interface RangeSelectorProps {
  value: RangoTiempo;
  onChange: (rango: RangoTiempo) => void;
}

const rangos: { value: RangoTiempo; label: string }[] = [
  { value: "1M", label: "1M" },
  { value: "3M", label: "3M" },
  { value: "6M", label: "6M" },
  { value: "1A", label: "1A" },
];

export function RangeSelector({ value, onChange }: RangeSelectorProps) {
  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-0.5">
      {rangos.map((rango) => (
        <button
          key={rango.value}
          onClick={() => onChange(rango.value)}
          className={`
            px-2 py-0.5 text-[10px] font-medium rounded-md transition-all
            ${value === rango.value
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          {rango.label}
        </button>
      ))}
    </div>
  );
}
