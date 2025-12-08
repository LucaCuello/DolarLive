import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Coffee, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/LucaCuello",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/luca-cuello41/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/LucaCuello_",
    label: "Twitter",
  },
  {
    icon: Coffee,
    href: "https://cafecito.app/lucacuello",
    label: "Cafecito",
  },
  {
    icon: Mail,
    href: "mailto:lucagcuello@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col items-center gap-2 pt-3 pb-2"
      >
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <link.icon className="w-3.5 h-3.5" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </motion.footer>
    </TooltipProvider>
  );
};
