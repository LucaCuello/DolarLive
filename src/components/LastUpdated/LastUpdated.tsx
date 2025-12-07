import { motion } from "framer-motion";
import { LastUpdatedProps } from "../../interfaces/interfaces";

export const LastUpdated = ({ fullDate }: LastUpdatedProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="text-center py-2 mt-4 border-t border-border/40"
    >
      <p className="text-[10px] text-muted-foreground leading-relaxed">
        Actualizado: <span className="font-medium">{fullDate || "..."}</span>
        <span className="mx-1.5 text-border">|</span>
        Fuente:{" "}
        <a
          href="https://dolarapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground/60 hover:text-foreground transition-colors"
        >
          DolarApi
        </a>
      </p>
    </motion.div>
  );
};
