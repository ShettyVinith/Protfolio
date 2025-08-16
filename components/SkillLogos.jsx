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
      pos: {
        default: ["-25%", "15%"],
        sm: ["-15%", "12%"],
        md: ["-10%", "14%"],
        lg: ["-5%", "15%"],
      },
      delay: 0,
      duration: 12,
    },
    {
      icon: skillsLogoData[1].icon,
      name: "CSS3",
      pos: {
        default: ["115%", "35%"],
        sm: ["95%", "28%"],
        md: ["90%", "32%"],
        lg: ["85%", "35%"],
      },
      delay: 1,
      duration: 15,
      hideMobile: true,
    },
    {
      icon: skillsLogoData[2].icon,
      name: "JavaScript",
      pos: {
        default: ["-5%", "70%"],
        sm: ["5%", "65%"],
        md: ["10%", "68%"],
        lg: ["15%", "70%"],
      },
      delay: 2,
      duration: 13,
    },

    // Upper-mid diagonals
    {
      icon: skillsLogoData[3].icon,
      name: "React",
      pos: {
        default: ["8%", "20%"],
        sm: ["10%", "18%"],
        md: ["15%", "20%"],
        lg: ["20%", "22%"],
      },
      delay: 3,
      duration: 16,
    },
    {
      icon: skillsLogoData[4].icon,
      name: "React Bootstrap",
      pos: {
        default: ["70%", "22%"],
        sm: ["65%", "20%"],
        md: ["60%", "22%"],
        lg: ["55%", "24%"],
      },
      delay: 4,
      duration: 14,
    },

    // Middle spread
    {
      icon: skillsLogoData[5].icon,
      name: "Express.js",
      pos: {
        default: ["-18%", "45%"],
        sm: ["-10%", "42%"],
        md: ["-5%", "45%"],
        lg: ["0%", "48%"],
      },
      delay: 5,
      duration: 17,
    },
    {
      icon: skillsLogoData[6].icon,
      name: "MongoDB",
      pos: {
        default: ["85%", "48%"],
        sm: ["75%", "45%"],
        md: ["70%", "47%"],
        lg: ["65%", "50%"],
      },
      delay: 6,
      duration: 12,
    },
    {
      icon: skillsLogoData[9].icon,
      name: "Java",
      pos: {
        default: ["23%", "40%"],
        sm: ["20%", "38%"],
        md: ["22%", "40%"],
        lg: ["25%", "42%"],
      },
      delay: 7,
      duration: 16,
      hideMobile: true,
    },

    // Lower diagonals
    {
      icon: skillsLogoData[7].icon,
      name: "MySQL",
      pos: {
        default: ["90%", "10%"],
        sm: ["80%", "12%"],
        md: ["75%", "15%"],
        lg: ["70%", "18%"],
      },
      delay: 8,
      duration: 15,
    },
    {
      icon: skillsLogoData[10].icon,
      name: "Git",
      pos: {
        default: ["60%", "60%"],
        sm: ["55%", "58%"],
        md: ["58%", "60%"],
        lg: ["60%", "62%"],
      },
      delay: 9,
      duration: 18,
    },

    // Bottom row spread
    {
      icon: skillsLogoData[8].icon,
      name: "PostgreSQL",
      pos: {
        default: ["75%", "85%"],
        sm: ["70%", "82%"],
        md: ["72%", "84%"],
        lg: ["75%", "86%"],
      },
      delay: 10,
      duration: 13,
      hideMobile: true,
    },
    {
      icon: skillsLogoData[11].icon,
      name: "C++",
      pos: {
        default: ["-38%", "80%"],
        sm: ["-28%", "75%"],
        md: ["-20%", "78%"],
        lg: ["-15%", "80%"],
      },
      delay: 11,
      duration: 14,
    },
    {
      icon: skillsLogoData[12].icon,
      name: "Bootstrap",
      pos: {
        default: ["125%", "85%"],
        sm: ["110%", "80%"],
        md: ["100%", "83%"],
        lg: ["95%", "85%"],
      },
      delay: 11,
      duration: 14,
      hideMobile: true,
    },
    {
      icon: skillsLogoData[13].icon,
      name: "Python",
      pos: {
        default: ["15%", "90%"],
        sm: ["18%", "88%"],
        md: ["20%", "90%"],
        lg: ["22%", "92%"],
      },
      delay: 11,
      duration: 14,
    },
    {
      icon: skillsLogoData[14].icon,
      name: "Figma",
      pos: {
        default: ["35%", "70%"],
        sm: ["30%", "68%"],
        md: ["32%", "70%"],
        lg: ["35%", "72%"],
      },
      delay: 3,
      duration: 14,
      hideMobile: true,
    },
    {
      icon: skillsLogoData[15].icon,
      name: "PHP",
      pos: {
        default: ["105%", "65%"],
        sm: ["95%", "62%"],
        md: ["90%", "64%"],
        lg: ["85%", "65%"],
      },
      delay: 2,
      duration: 14,
      hideMobile: true,
    },
    {
      icon: skillsLogoData[16].icon,
      name: "Tailwind CSS",
      pos: {
        default: ["130%", "10%"],
        sm: ["110%", "8%"],
        md: ["100%", "10%"],
        lg: ["95%", "12%"],
      },
      delay: 3,
      duration: 14,
      hideMobile: true,
    },
  ];

  return (
    <div className="absolute inset-0 -z-10">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`floating-skill absolute ${
            skill.name === "PHP"
              ? "w-16 h-16 sm:w-24 sm:h-24"
              : "w-12 h-12 sm:w-16 sm:h-16"
          } ${skill.hideMobile ? "hidden sm:block" : ""}`}
          style={{
            left: `clamp(${skill.pos.default[0]}, ${
              skill.pos.sm?.[0] || skill.pos.default[0]
            }, ${skill.pos.lg?.[0] || skill.pos.default[0]})`,
            top: `clamp(${skill.pos.default[1]}, ${
              skill.pos.sm?.[1] || skill.pos.default[1]
            }, ${skill.pos.lg?.[1] || skill.pos.default[1]})`,
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
