import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="extension-header">
      <motion.img
        initial={{ scale: 0, rotate: 100 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        src="/src/assets/Logo.png"
        draggable={false}
        alt="logo"
      ></motion.img>
    </header>
  );
};
