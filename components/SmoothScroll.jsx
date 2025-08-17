"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      gestureOrientation: "vertical",
      normalizeWheel: true,
      smoothTouch: false,
    });

    // ✅ Safe scroll handler (don’t assume e.target exists)
    lenis.on("scroll", () => {
      // If you want to allow native scroll inside `.project-modal-content`,
      // better handle it with CSS `overscroll-behavior` instead of lenis.on("scroll").
    });

    // Handle anchor links with Lenis scrollTo
    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href) return;

        if (href === "#" || href === "#home") {
          e.preventDefault();
          lenis.scrollTo(0); // scroll to top
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target);
        }
      });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
