"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // keep utils.js same as in Acernity

export const CategoryTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex justify-center gap-4 mb-10 relative">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={cn(
            "relative px-5 py-2 rounded-full border transition text-sm font-medium",
            activeCategory === cat
              ? "text-white dark:text-black"
              : "border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-lightHover dark:hover:bg-darkHover"
          )}
        >
          {/* Background animation for active tab */}
          {activeCategory === cat && (
            <motion.div
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="absolute inset-0 rounded-full bg-black dark:bg-white"
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
};
