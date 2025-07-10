"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import Skills from "@/components/Skills";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills />
      <Services
        isDarkMode={isDarkMode}
        onReadMore={(service) => setSelectedService(service)}
      />
      <Work
        isDarkMode={isDarkMode}
        onProjectClick={(project) => setSelectedProject(project)}
      />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />

      {/* Project card popup */}
      <ProjectCard
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        isDarkMode={isDarkMode}
      />

      {/* Service card popup */}
      <ServiceCard
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        isDarkMode={isDarkMode}
      />
    </>
  );
}
