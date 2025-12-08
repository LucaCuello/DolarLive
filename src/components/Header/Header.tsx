import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useApiStatus } from "../../hooks/useDolarApi";
import { Theme } from "../../utils/utils";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  const { isAvailable } = useApiStatus();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-center justify-between py-2"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
          <span className="text-background font-semibold text-sm">$</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-foreground">DolarLive</span>
          <span className="text-[10px] text-muted-foreground -mt-0.5">Cotizaciones en tiempo real</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <motion.button
          onClick={onToggleTheme}
          whileTap={{ scale: 0.95 }}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
        >
          {theme === "light" ? (
            <Moon size={14} className="text-muted-foreground" />
          ) : (
            <Sun size={14} className="text-muted-foreground" />
          )}
        </motion.button>
        <div className="flex items-center gap-1.5">
          {isAvailable === null ? (
            <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
          ) : isAvailable ? (
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          ) : (
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          )}
          <span className="text-[10px] text-muted-foreground font-medium">
            {isAvailable === null ? "..." : isAvailable ? "Live" : "Offline"}
          </span>
        </div>
      </div>
    </motion.header>
  );
};
