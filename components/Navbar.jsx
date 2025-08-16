"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setisScroll] = useState(false);
  const sideMenuRef = useRef();
  const lenisRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    // ✅ Navbar background on scroll
    const handleScroll = () => {
      if (scrollY > 50) setisScroll(true);
      else setisScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    // ✅ Init Lenis once
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

    // ✅ Custom smooth scroll for anchor links
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

  return (
    <>
      {/* Background image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20 dark:bg-opacity-50 dark:backdrop-blur-lg"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
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
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-black dark:after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-black dark:after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-black dark:after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-black dark:after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-black dark:after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-Ovo relative after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-black dark:after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="dark mode toggle"
              className="w-6"
            />
          </button>

          {/* Contact Button */}
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

          {/* Mobile Menu Toggle */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
