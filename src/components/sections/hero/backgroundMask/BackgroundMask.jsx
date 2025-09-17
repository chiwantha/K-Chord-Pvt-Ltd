"use client";
import { motion } from "framer-motion";
const BackgroundMask = () => {
  return (
    <motion.div
      className="absolute h-full bg-black/90 top-0 backdrop-blur-sm"
      initial={{ width: 0, x: 5 }}
      whileInView={{ width: "50%", x: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    />
  );
};

export default BackgroundMask;
