import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import profilePic from "../assets/Profile.jpeg";
import useTheme from "../context/ThemeContext";

const HeroSection = () => {
  const { theme, isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const techStack = [
    { icon: <FaReact />, color: "#61DBFB", pos: "top-6 left-[-10px]", delay: 0 },
    { icon: <FaNodeJs />, color: "#68A063", pos: "top-24 right-[-10px]", delay: 0.4 },
    { icon: <SiMongodb />, color: "#47A248", pos: "bottom-20 left-[-12px]", delay: 0.8 },
    { icon: <FaHtml5 />, color: "#E34F26", pos: "bottom-10 right-[-8px]", delay: 1.2 },
    { icon: <SiExpress />, color: isDarkMode ? "#fff" : "#000", pos: "top-1/2 right-[-16px]", delay: 1.6 },
    { icon: <FaJs />, color: "#F7DF1E", pos: "bottom-4 left-[-16px]", delay: 2 },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      style={{ backgroundColor: theme.background }}
      className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 overflow-hidden pt-24 md:pt-0 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="h-[2px] w-12" style={{ backgroundColor: theme.primary }} />
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.3em]" style={{ color: theme.primary }}>
              Full Stack Developer
            </p>
          </div>
          <h1
            style={{ color: theme.textMain }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-8"
          >
            Rizwan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400">
              Baloch.
            </span>
          </h1>
          <p
            style={{ color: theme.textSecondary }}
            className="text-lg md:text-xl max-w-xl md:mx-0 leading-relaxed mb-12"
          >
            I craft high-performance digital products using the <span className="font-bold">MERN Stack</span> and modern{" "}
            <span className="font-bold text-blue-500">React ecosystems</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              style={{ backgroundColor: theme.primary }}
              className="flex items-center justify-center gap-3 text-white font-bold rounded-full px-10 py-5 shadow-xl hover:scale-105 transition"
            >
              Explore Projects
            </a>
            <a
              href="/Resume.pdf"
              download="Rizwan_Baloch.pdf"
              className="flex items-center justify-center gap-3 font-bold rounded-full px-10 py-5 transition hover:bg-gray-500/5"
              style={{
                border: `2px solid ${theme.border}`,
                color: theme.textMain,
              }}
            >
              <FiDownload /> Get CV
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-full blur-[120px] opacity-25 z-0" style={{ backgroundColor: theme.primary }} />
            <div
              className="relative z-10 w-full h-full rounded-full overflow-hidden border-[3px]"
              style={{ borderColor: theme.primary, backgroundColor: theme.surface }}
            >
              <img
                src={profilePic}
                alt="Rizwan Baloch"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className={`absolute ${tech.pos} p-3 md:p-4 rounded-2xl shadow-xl text-2xl md:text-4xl backdrop-blur-md z-20`}
                style={{
                  backgroundColor: isDarkMode ? "rgba(30,41,59,0.85)" : "rgba(255,255,255,0.85)",
                  color: tech.color,
                  border: `1px solid ${theme.border}`,
                }}
                animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: tech.delay, ease: "easeInOut" }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
