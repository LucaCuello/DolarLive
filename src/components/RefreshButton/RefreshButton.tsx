import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { clearAllCache } from "@/utils/cache";

const COOLDOWN_SECONDS = 60;

interface RefreshButtonProps {
  onRefresh: () => void;
}

export const RefreshButton = ({ onRefresh }: RefreshButtonProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  const isDisabled = cooldownRemaining > 0 || isRefreshing;

  useEffect(() => {
    if (cooldownRemaining <= 0) return;

    const timer = setInterval(() => {
      setCooldownRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldownRemaining]);

  const handleRefresh = async () => {
    if (isDisabled) return;

    setIsRefreshing(true);
    clearAllCache();

    try {
      await onRefresh();
    } finally {
      setIsRefreshing(false);
      setCooldownRemaining(COOLDOWN_SECONDS);
    }
  };

  const tooltipText = cooldownRemaining > 0
    ? `Espera ${cooldownRemaining}s`
    : "Actualizar datos";

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            onClick={handleRefresh}
            whileTap={!isDisabled ? { scale: 0.95 } : undefined}
            disabled={isDisabled}
            className={`p-1.5 rounded-lg transition-colors ${
              isDisabled
                ? "text-muted-foreground/40 cursor-not-allowed"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            aria-label={tooltipText}
          >
            <motion.div
              animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
              transition={
                isRefreshing
                  ? { duration: 1, repeat: Infinity, ease: "linear" }
                  : { duration: 0 }
              }
            >
              <RefreshCw size={14} />
            </motion.div>
          </motion.button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
