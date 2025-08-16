"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olá",
  "やあ",
  "Hallå",
  "مرحبا",
  "Guten tag",
  "Hallo",
  "नमस्ते",
];

export default function Intro() {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!show) return;

    if (index < greetings.length - 1) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 180); // fast switching
      return () => clearInterval(interval);
    }

    const timeout = setTimeout(() => {
      setShow(false); // hide after last greeting
    }, 400);

    return () => clearTimeout(timeout);
  }, [index, show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-black dark:bg-darkTheme"
        >
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.12 }}
            className="text-5xl font-bold text-gray-800 dark:text-gray-300"
          >
            • {greetings[index]}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
