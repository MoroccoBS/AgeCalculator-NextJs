import { motion } from "framer-motion";

interface DisplayElementProps {
  value: string;
  type: string;
}

export default function DisplayElement({ value, type }: DisplayElementProps) {
  const formattedValue = value === "" ? "--" : value === "0" ? "00" : value;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className="w-full flex md:text-8xl sm:text-7xl text-5xl italic cursor-default"
    >
      <motion.h1 layoutId={type} className="text-Purple">
        {formattedValue}
      </motion.h1>
      <h1 className="text">{type}</h1>
    </motion.div>
  );
}
