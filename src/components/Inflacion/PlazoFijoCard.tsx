import { motion } from "framer-motion";
import { PlazoFijoData } from "@/hooks/usePlazoFijo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PlazoFijoCardProps {
  data: PlazoFijoData;
  index: number;
  isTop?: boolean;
}

export function PlazoFijoCard({ data, index, isTop = false }: PlazoFijoCardProps) {
  const tnaFormatted = (data.tnaClientes * 100).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`
        rounded-lg border px-2.5 py-2 transition-all
        ${isTop
          ? "border-foreground/20 bg-foreground text-background"
          : "border-border/60 bg-card hover:border-border"
        }
      `}
    >
      <div className="flex items-center gap-1.5 mb-1">
        {data.logo && (
          <img
            src={data.logo}
            alt={data.entidad}
            className="w-4 h-4 rounded object-contain bg-background"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className={`text-[9px] font-medium truncate cursor-default ${isTop ? "text-background/70" : "text-muted-foreground"}`}>
                {data.entidad}
              </span>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
              {data.entidad}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className={`text-base font-semibold tabular-nums ${isTop ? "text-background" : "text-foreground"}`}>
          {tnaFormatted}%
        </span>
        <span className={`text-[8px] ${isTop ? "text-background/50" : "text-muted-foreground"}`}>
          TNA
        </span>
      </div>
    </motion.div>
  );
}
