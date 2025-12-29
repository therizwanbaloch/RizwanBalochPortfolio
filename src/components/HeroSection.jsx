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
      className="relative min-h-screen flex flex-col md:flex-row items-center md:items-start px-6 md:px-16 lg:px-24 pt-28 md:pt-24 overflow-hidden transition-colors duration-500"
    >
      {/* Left Side - Text */}
      <div className="flex-1 flex flex-col items-center md:items-start gap-6 z-10 text-center md:text-left">
        {/* 1. Top Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ color: theme.textSecondary }}
          className="text-lg md:text-xl font-semibold"
        >
          Full-stack Web & Mobile App Developer
        </motion.h2>

        {/* 2. Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: theme.textMain }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter"
        >
          Rizwan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400">
            Baloch.
          </span>
        </motion.h1>

        {/* 3. Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: theme.textSecondary }}
          className="text-lg md:text-xl max-w-xl leading-relaxed"
        >
          I specialize in building <span className="font-bold">full-stack web applications</span> using the MERN Stack and <span className="font-bold text-blue-500">modern React ecosystems</span>.  
          Additionally, I craft <span className="font-bold text-green-500">mobile applications with React Native</span>, ensuring smooth, reusable, and high-performance experiences across devices.
        </motion.p>
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="flex-1 relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] mt-8 md:mt-0 order-4 md:order-2"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Glowing background */}
        <div className="absolute inset-0 rounded-full blur-[120px] opacity-25 z-0" style={{ backgroundColor: theme.primary }} />

        {/* Profile */}
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

        {/* Orbiting icons */}
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
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-6 order-5 md:order-3 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="#projects"
          style={{ backgroundColor: theme.primary }}
          className="flex items-center justify-center gap-3 text-white font-bold rounded-full px-10 py-5 shadow-xl hover:scale-105 transition"
        >
          Explore Projects
        </a>
        <a
          href="/Resume.pdf"
          download="Rizwan_Baloch_Resume.pdf"
          className="flex items-center justify-center gap-3 font-bold rounded-full px-10 py-5 transition hover:bg-gray-500/5"
          style={{ border: `2px solid ${theme.border}`, color: theme.textMain }}
        >
          <FiDownload /> Get Resume
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
