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

    // 🔑 Allow native scroll on elements with `.project-modal-content`
    lenis.on("scroll", (e) => {
      const target = e.target;
      if (target.closest(".project-modal-content")) {
        e.preventDefault = false; // don’t hijack modal scrolling
      }
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
