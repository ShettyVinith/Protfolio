"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const ProjectCard = ({ isDarkMode, isOpen, onClose, project }) => {
  // 🔒 Lock background scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // also lock <html>
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
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
        {/* Card */}
        <motion.div
          key="card"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl bg-white dark:bg-darkTheme rounded-2xl shadow-lg relative pointer-events-auto
                     max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center 
             rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 
             dark:hover:bg-gray-600 transition z-10"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              width={16}
              height={16}
            />
          </button>

          {/* Scrollable content */}
          <div
            className="modal-scroll flex-1 overflow-y-auto overscroll-contain p-8"
            data-lenis-prevent
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white font-Ovo">
              {project.title}
            </h2>

            {/* Image */}
            <div className="w-full h-56 relative mb-6 rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Sections */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300 font-Ovo">
              {project.overview && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Project Overview
                  </h3>
                  <p className="leading-relaxed">{project.overview}</p>
                </div>
              )}

              {project.features?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-pink-100 dark:bg-gray-800 
                                   text-pink-600 dark:text-pink-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.results && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Results &amp; Impact
                  </h3>
                  <p className="leading-relaxed">{project.results}</p>
                </div>
              )}
            </div>

            {/* Footer buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start mt-8">
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-6 w-max flex items-center justify-between gap-2 
             bg-black/80 text-white rounded-full hover:bg-black 
             duration-500 dark:bg-transparent dark:border dark:border-white/50 
             dark:hover:bg-darkHover font-Ovo"
                >
                  View Code
                  <Image
                    src={assets.right_arrow_white}
                    alt=""
                    className="w-4"
                  />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-6 w-max flex items-center justify-between gap-2 
             bg-black/80 text-white rounded-full hover:bg-black 
             duration-500 dark:bg-transparent dark:border dark:border-white/50 
             dark:hover:bg-darkHover font-Ovo"
                >
                  Live Demo
                  <Image
                    src={assets.right_arrow_white}
                    alt=""
                    className="w-4"
                  />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
