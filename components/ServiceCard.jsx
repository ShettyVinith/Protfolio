"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";

const ServiceCard = ({ isOpen, onClose, service, isDarkMode }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && service && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Modal Wrapper */}
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <motion.div
              key="card"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-white dark:bg-darkTheme rounded-2xl shadow-lg p-8 pt-12 relative pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center 
                           rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 
                           dark:hover:bg-gray-600 transition"
              >
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt="close"
                  className="w-4 h-4"
                />
              </button>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white font-Ovo">
                {service.title}
              </h3>

              {/* Long Description */}
              <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-Ovo">
                {service.descriptionLong}
              </p>

              {/* Bullet Points */}
              <ul className="grid gap-3 text-md text-gray-700 dark:text-gray-300 pl-2">
                {service.points?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Image
                      src={
                        isDarkMode ? assets.check_black_icon : assets.check_icon
                      }
                      alt="check"
                      className="w-4 mt-1"
                    />
                    <span className="font-Ovo">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceCard;
