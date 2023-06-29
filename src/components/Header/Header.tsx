import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="extension-header">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        src="/src/assets/logo.png"
        draggable={false}
        alt="logo"
      ></motion.img>
    </header>
  );
};
