"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils"; // ✅ helper

const categories = ["All", "Web", "ML", "Java"]; // 🟢 Tabs

const Work = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All"); // 🟢 Default

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsProjectOpen(true);
  };

  // 🟢 Filter projects based on category
  const filteredProjects =
    activeCategory === "All"
      ? workData
      : workData.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        {/* Section heading */}
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          My portfolio
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          My latest work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in web, Java, and ML development.
        </motion.p>

        <div className="flex justify-center gap-4 mb-10 relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "relative px-6 py-3 rounded-full border transition text-base font-medium",
                activeCategory === cat
                  ? "text-white dark:text-black"
                  : "border-gray-400 text-black dark:text-gray-300 hover:bg-lightHover dark:hover:bg-darkHover"
              )}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className="absolute inset-0 rounded-full bg-black dark:bg-white"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center my-10 dark:text-black"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleProjectClick(project)}
                className="w-[280px] h-[280px] sm:w-[250px] sm:h-[250px] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>

                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <Image src={assets.send_icon} alt="" className="w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more button */}
        {/* Show more button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          onClick={() => setActiveCategory("All")} // ✅ Reset category to All
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Show more
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Right arrow"
            className="w-4"
          />
        </motion.button>
      </motion.div>

      {/* Modal with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {isProjectOpen && (
          <ProjectCard
            isDarkMode={isDarkMode}
            isOpen={isProjectOpen}
            project={selectedProject}
            onClose={() => setIsProjectOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;
