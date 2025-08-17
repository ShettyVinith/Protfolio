"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import SkillLogos from "./SkillLogos";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const Header = () => {
  const dockItems = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="w-5 h-5" />,
      href: "https://github.com/ShettyVinith",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/shettyvinith/",
    },
    {
      title: "Email",
      icon: <IconMail className="w-5 h-5" />,
      href: "mailto:vinithshetty9372@gmail.com",
    },
  ];

  return (
    <div className="relative w-11/12 max-w-5xl mx-auto h-screen flex items-center justify-center">
      {/* Floating background skills */}
      <SkillLogos />

      <div className="flex gap-6 items-center flex-col md:flex-row">
        {/* Desktop Dock (left side) */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex flex-col"
        >
          <FloatingDock
            items={dockItems}
            desktopClassName="flex-col h-auto w-2 px-2 py-4 items-center gap-3 dark:bg-darkTheme/80"
            mobileClassName="flex-col"
          />
        </motion.div>

        {/* Main content */}
        <div className="text-center flex flex-col items-center gap-4 flex-1">
          <motion.div
            className="flex md:hidden justify-center items-center gap-6 mb-6"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {dockItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-darkHover hover:scale-110 transition-transform"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={item.title}
              >
                {/* Bigger icons on mobile */}
                <div className="flex items-center justify-center text-neutral-700 dark:text-neutral-200">
                  {React.cloneElement(item.icon, {
                    className: "h-6 w-6 md:h-6 md:w-6",
                  })}
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <Image
              src={assets.profile_img}
              alt="profile"
              className="rounded-full w-32 cursor-pointer"
            />
          </motion.div>
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo"
          >
            Hi! I'm Vinith Shetty
            <Image src={assets.hand_icon} alt="hand" className="w-6" />
          </motion.h3>
          {/* Title */}
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
          >
            Full-Stack Developer based in Udupi.
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl mx-auto font-Ovo"
          >
            I am a passionate coder, tech enthusiast, and problem solver who
            loves building web applications and digital experiences that make an
            impact.
          </motion.p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
            >
              Contact me{" "}
              <Image
                src={assets.right_arrow_white}
                alt="arrow"
                className="w-4"
              />
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              download="Vinith.pdf"
              href="/Vinith.pdf"
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
            >
              My Resume{" "}
              <Image
                src={assets.download_icon}
                alt="download"
                className="w-4"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
