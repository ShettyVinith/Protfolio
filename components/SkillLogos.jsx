"use client";
import React from "react";
import { skillsLogoData } from "@/assets/assets";
import Image from "next/image";

const SkillLogos = () => {
  const skills = [
    // Top row spread
    {
      icon: skillsLogoData[0].icon,
      name: "HTML5",
      x: "-25%",
      y: "15%",
      delay: 0,
      duration: 12,
    },
    {
      icon: skillsLogoData[1].icon,
      name: "CSS3",
      x: "115%",
      y: "35%",
      delay: 1,
      duration: 15,
    },
    {
      icon: skillsLogoData[2].icon,
      name: "JavaScript",
      x: "-5%",
      y: "70%",
      delay: 2,
      duration: 13,
    },

    // Upper-mid diagonals
    {
      icon: skillsLogoData[3].icon,
      name: "React",
      x: "8%",
      y: "20%",
      delay: 3,
      duration: 16,
    },
    {
      icon: skillsLogoData[4].icon,
      name: "React Bootstrap",
      x: "70%",
      y: "22%",
      delay: 4,
      duration: 14,
    },

    // Middle spread
    {
      icon: skillsLogoData[5].icon,
      name: "Express.js",
      x: "-18%",
      y: "45%",
      delay: 5,
      duration: 17,
    },
    {
      icon: skillsLogoData[6].icon,
      name: "MongoDB",
      x: "85%",
      y: "48%",
      delay: 6,
      duration: 12,
    },
    {
      icon: skillsLogoData[9].icon,
      name: "Java",
      x: "23%",
      y: "40%",
      delay: 7,
      duration: 16,
    },

    // Lower diagonals
    {
      icon: skillsLogoData[7].icon,
      name: "MySQL",
      x: "90%",
      y: "10%",
      delay: 8,
      duration: 15,
    },
    {
      icon: skillsLogoData[10].icon,
      name: "Git",
      x: "60%",
      y: "60%",
      delay: 9,
      duration: 18,
    },

    // Bottom row spread
    {
      icon: skillsLogoData[8].icon,
      name: "PostgreSQL",
      x: "75%",
      y: "85%",
      delay: 10,
      duration: 13,
    },
    {
      icon: skillsLogoData[11].icon,
      name: "C++",
      x: "-38%",
      y: "80%",
      delay: 11,
      duration: 14,
    },
    {
      icon: skillsLogoData[12].icon,
      name: "Bootstrap",
      x: "125%",
      y: "85%",
      delay: 11,
      duration: 14,
    },
    {
      icon: skillsLogoData[13].icon,
      name: "python",
      x: "15%",
      y: "90%",
      delay: 11,
      duration: 14,
    },
    {
      icon: skillsLogoData[14].icon,
      name: "figma",
      x: "35%",
      y: "70%",
      delay: 3,
      duration: 14,
    },
    {
      icon: skillsLogoData[15].icon,
      name: "PHP",
      x: "105%",
      y: "65%",
      delay: 2,
      duration: 14,
    },
    {
      icon: skillsLogoData[16].icon,
      name: "Tailwind CSS",
      x: "130%",
      y: "10%",
      delay: 3,
      duration: 14,
    },
  ];

  return (
    <div className="absolute inset-0 -z-10">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="floating-skill absolute w-16 h-16" // ⬅ bigger size
          style={{
            left: skill.x,
            top: skill.y,
            animationDelay: `${skill.delay}s`,
            animationDuration: `${skill.duration}s`,
          }}
          title={skill.name}
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain opacity-20 hover:opacity-100 transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default SkillLogos;
