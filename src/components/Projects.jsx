import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import useTheme from "../context/ThemeContext";

const Projects = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectsData = [
    {
      title: "Xevron",
      description: "A subscription-based design agency platform featuring high-conversion Webflow architecture and a scalable service-as-a-product business model.",
      link: "xevron-kappa.vercel.app", 
      tech: ["Webflow", "UI/UX", "Brand Strategy", "Design Systems"],
      type: "Productized Service",
      num: "01"
    },
    {
      title: "PKRSPOT",
      description: "A high-performance crypto-to-PKR exchange engine featuring real-time liquidity tracking and automated secure transaction flows.",
      link: "https://pkrspot.vercel.app",
      tech: ["React", "Node.js", "Firebase", "RestAPI"],
      type: "FinTech Platform",
      num: "02"
    },
    {
      title: "Balochistan Bazaar",
      description: "Scalable E-commerce architecture optimized for regional trade logistics, featuring a high-conversion UI and custom checkout logic.",
      link: "https://balochistanbazaar.vercel.app",
      tech: ["MERN Stack", "Redux", "Tailwind"],
      type: "E-Commerce",
      num: "03"
    },
    {
      title: "Vaultflow",
      description: "Enterprise analytics dashboard providing real-time data visualization, digital credit tokenization, and multi-tenant code collaboration.",
      link: "vaultflow-nine.vercel.app",
      tech: ["React", "Analytics", "Data Vis", "Dashboard"],
      type: "B2B SaaS",
      num: "04"
    },
    {
      title: "Mell Family Game",
      description: "Telegram Mini App with a FastAPI backend. Engineered for high user retention with real-time state management across 27 interactive pages.",
      link: "https://mell-family-frontend.vercel.app",
      tech: ["FastAPI", "React", "Telegram API", "Game Engine"],
      type: "Social Web3",
      num: "05"
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }),
  };

  return (
    <section
      id="projects"
      ref={ref}
      style={{ 
        backgroundColor: theme.background,
        borderColor: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
        transition: "background-color 0.5s ease" 
      }}
      className="relative py-32 px-6 md:px-16 lg:px-32 overflow-hidden border-t"
    >
      {/* Centered Structural Line */}
      <div 
        className="absolute left-1/2 top-0 w-[1px] h-full hidden lg:block opacity-20" 
        style={{ backgroundColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }} 
      />

      <div className="max-w-[1450px] mx-auto z-10 relative">
        
        {/* Header Section */}
        <div className="flex flex-col mb-24">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
          >
            <span 
              className="px-4 py-1.5 text-[11px] font-bold tracking-[0.5em] uppercase border-l-2 mb-6 inline-block"
              style={{ 
                color: theme.primary, 
                borderColor: theme.primary, 
                backgroundColor: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" 
              }}
            >
              Selected Portfolio
            </span>
            <h2 style={{ color: theme.textMain }} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
              FEATURED <br />
              <span className="opacity-10 italic">SYSTEMS.</span>
            </h2>
          </motion.div>
        </div>

        {/* Improved Project Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 border-t border-l"
          style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={idx + 1}
              className="group relative p-10 md:p-16 border-r border-b overflow-hidden transition-all duration-700"
              style={{ 
                borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                backgroundColor: "transparent"
              }}
            >
              {/* Dynamic Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" 
                style={{ backgroundColor: theme.primary }} 
              />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <span 
                    className="text-5xl font-black leading-none select-none" 
                    style={{ color: isDarkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)" }}
                  >
                    {project.num}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 border transition-all duration-500 hover:rotate-12 group-hover:scale-110"
                    style={{ 
                        color: theme.primary, 
                        borderColor: isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
                        backgroundColor: isDarkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"
                    }}
                  >
                    <FiArrowUpRight size={22} />
                  </a>
                </div>

                <div className="mb-14">
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-5" style={{ color: theme.primary }}>
                    {project.type}
                  </p>
                  <h3 style={{ color: theme.textMain }} className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:italic transition-all duration-500">
                    {project.title}
                  </h3>
                  <p style={{ color: theme.textSecondary }} className="text-base leading-relaxed font-medium max-w-md opacity-80">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack - Elevated UI */}
                <div 
                  className="flex flex-wrap gap-x-5 gap-y-3 mt-12 pt-8 border-t"
                  style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 border"
                      style={{ 
                        color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)",
                        borderColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;