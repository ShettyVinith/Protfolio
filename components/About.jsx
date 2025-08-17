"use client";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* LEFT SIDE CONTENT (Introduction, About me, Description) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 order-1 lg:order-2 flex flex-col"
        >
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-lg font-Ovo text-center lg:text-left"
          >
            Introduction
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 lg:mb-4 text-5xl font-Ovo text-center lg:text-left"
          >
            About me
          </motion.h2>

          {/* IMAGE (comes after heading on mobile, side-by-side on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-64 sm:w-80 rounded-3xl max-w-none mx-auto mb-6 lg:hidden"
          >
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full rounded-3xl"
            />
          </motion.div>

          {/* Description */}
          <p className="mb-10 max-w-2xl font-Ovo text-left">
            I am Vinith Shetty, a passionate Full Stack Developer. I love
            crafting modern, responsive, and scalable web applications that
            solve real-world problems. With hands-on project experience, I focus
            on writing clean, efficient code and building impactful digital
            solutions while constantly learning and evolving as a developer.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl font-sans"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo text-center lg:text-left dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5 flex-wrap"
          >
            {toolsData.map((tool, index) => {
              const icon = tool.dark && isDarkMode ? tool.dark : tool.light;
              return (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white"
                >
                  <Image src={icon} alt="Tool" className="w-5 sm:w-7" />
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* RIGHT SIDE IMAGE (only visible on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none order-2 lg:order-1 hidden lg:block"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
