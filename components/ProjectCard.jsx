"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";

const ProjectCard = ({ isDarkMode, isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
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

          {/* Modal wrapper */}
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
              className="w-full max-w-2xl bg-white dark:bg-darkTheme rounded-2xl shadow-lg p-8 relative max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Image */}
              <div className="w-full h-56 relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white font-Ovo">
                {project.title}
              </h2>

              {/* Description */}
              <ul className="grid gap-3 text-md text-gray-700 dark:text-gray-300 mb-8 pl-4 list-disc">
                {project.details?.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {/* Live Demo */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-2.5 border border-gray-400 rounded-full hover:bg-lightHover dark:hover:bg-darkHover dark:border-white/50 flex items-center gap-2 text-md font-Ovo transition duration-300"
                >
                  Live Demo
                  <Image
                    src={
                      isDarkMode
                        ? assets.right_arrow_bold_dark
                        : assets.right_arrow_bold
                    }
                    alt="arrow"
                    className="w-4 group-hover:translate-x-1 transition-transform"
                  />
                </a>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-2.5 border border-gray-400 rounded-full hover:bg-lightHover dark:hover:bg-darkHover dark:border-white/50 flex items-center gap-2 text-md font-Ovo transition duration-300"
                >
                  Github
                  <Image
                    src={
                      isDarkMode
                        ? assets.right_arrow_bold_dark
                        : assets.right_arrow_bold
                    }
                    alt="arrow"
                    className="w-4 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectCard;
