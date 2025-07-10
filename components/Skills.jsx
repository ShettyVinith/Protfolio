"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/assets/assets";
import Image from "next/image";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Tech Stack
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Technologies I use to build and scale beautiful, performant, and
        responsive digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl hover:shadow-md dark:border-white/20 dark:hover:bg-darkHover transition duration-300"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain shrink-0"
            />
            <p className="text-gray-700 dark:text-white font-Ovo text-md break-words leading-snug">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
