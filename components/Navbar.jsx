"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconHome2,
  IconBriefcase,
  IconId,
  IconMail,
  IconTools,
  IconSettings,
} from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setisScroll] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lenisRef = useRef(null);

  const closeMenu = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 50) setisScroll(true);
      else setisScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1,
        normalizeWheel: true,
      });

      function raf(time) {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      const link = e.currentTarget || e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();

        if (href === "#top") {
          lenisRef.current?.scrollTo(0);
        } else {
          const target = document.querySelector(href);
          if (target) {
            lenisRef.current?.scrollTo(target);
          }
        }

        closeMenu();
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.82, y: 6 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 360, damping: 26, mass: 0.8 },
    },
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <div
          className={`absolute inset-0 -z-10 ${
            isScroll || isMobileOpen
              ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20 dark:bg-opacity-50 dark:backdrop-blur-lg"
              : ""
          }`}
        />

        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a
              href="#top"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="dark mode toggle"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </a>
          <button
            className="relative block md:hidden ml-3 w-9 h-9 text-black dark:text-white"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-expanded={isMobileOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-200 ease-in-out origin-center ${
                isMobileOpen ? "mt-0 rotate-45" : "-mt-2"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-in-out ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-200 ease-in-out origin-center ${
                isMobileOpen ? "mt-0 -rotate-45" : "mt-2"
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {/* FIX: Removed opacity from the transition to make the background blur appear instantly. */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full px-5 lg:px-8 xl:px-[8%] pt-0 transition-[max-height] duration-300 ease-out overflow-hidden ${
            isMobileOpen ? "max-h-[560px]" : "max-h-0"
          }`}
        >
          <div className="rounded-b-3xl border border-gray-500/20 bg-white/50 backdrop-blur-lg dark:bg-darkTheme/50 dark:border-white/10 shadow-sm">
            <motion.ul
              className="flex flex-col gap-3 p-4"
              variants={listVariants}
              initial="hidden"
              animate={isMobileOpen ? "show" : "hidden"}
            >
              <motion.li variants={cardVariants}>
                <a
                  href="#top"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-gray-500/20 bg-white dark:bg-darkHover dark:border-white/10 px-5 py-4 font-Ovo shadow-sm text-lg"
                >
                  <span>Home</span>
                  <IconHome2 size={26} className="opacity-80" />
                </a>
              </motion.li>
              <motion.li variants={cardVariants}>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-gray-500/20 bg-white dark:bg-darkHover dark:border-white/10 px-5 py-4 font-Ovo shadow-sm text-lg"
                >
                  <span>About me</span>
                  <IconId size={26} className="opacity-80" />
                </a>
              </motion.li>
              <motion.li variants={cardVariants}>
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-gray-500/20 bg-white dark:bg-darkHover dark:border-white/10 px-5 py-4 font-Ovo shadow-sm text-lg"
                >
                  <span>Skills</span>
                  <IconTools size={26} className="opacity-80" />
                </a>
              </motion.li>
              <motion.li variants={cardVariants}>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-gray-500/20 bg-white dark:bg-darkHover dark:border-white/10 px-5 py-4 font-Ovo shadow-sm text-lg"
                >
                  <span>Services</span>
                  <IconSettings size={26} className="opacity-80" />
                </a>
              </motion.li>
              <motion.li variants={cardVariants}>
                <a
                  href="#work"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-gray-500/20 bg-white dark:bg-darkHover dark:border-white/10 px-5 py-4 font-Ovo shadow-sm text-lg"
                >
                  <span>My Work</span>
                  <IconBriefcase size={26} className="opacity-80" />
                </a>
              </motion.li>
              <motion.li variants={cardVariants}>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-gray-500/20 bg-white dark:bg-darkHover dark:border-white/10 px-5 py-4 font-Ovo shadow-sm text-lg"
                >
                  <span>Contact me</span>
                  <IconMail size={26} className="opacity-80" />
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
