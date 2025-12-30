import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import profilePic from "../assets/Profile.jpeg";
import useTheme from "../context/ThemeContext";

const Snow = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
    {[...Array(50)].map((_, i) => (
      <span
        key={i}
        className="absolute top-[-10px] w-[2px] h-[2px] rounded-full bg-white/30 animate-snow"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 12}s`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const techStack = [
    { icon: <FaReact />, color: "#61DBFB", distance: 120, delay: 0 },
    { icon: <FaNodeJs />, color: "#68A063", distance: 100, delay: 0.5 },
    { icon: <SiMongodb />, color: "#47A248", distance: 140, delay: 1 },
    { icon: <FaHtml5 />, color: "#E34F26", distance: 110, delay: 1.5 },
    { icon: <SiExpress />, color: isDarkMode ? "#fff" : "#000", distance: 90, delay: 2 },
    { icon: <FaJs />, color: "#F7DF1E", distance: 150, delay: 2.5 },
    { icon: <SiPostman />, color: "#FF6C37", distance: 120, delay: 3 },
  ];

  return (
    <section
      id="home"
      ref={ref}
      style={{ backgroundColor: theme.background }}
<<<<<<< HEAD
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
=======
      className="relative min-h-[85vh] flex flex-col md:flex-row items-center px-6 md:px-16 lg:px-24 pt-12 md:pt-16 overflow-hidden transition-colors duration-500"
    >
      {/* Snow effect */}
      <Snow />

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:max-w-xl z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="px-6 py-2 rounded-full font-semibold"
          style={{
            backgroundColor: isDarkMode
              ? "rgba(99,102,241,0.15)"
              : "rgba(99,102,241,0.1)",
            color: theme.primary,
            border: `1px solid ${theme.border}`,
          }}
        >
          Full-Stack Web & Mobile Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ color: theme.textMain }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
>>>>>>> 9183bd3 (ui chnages)
        >
          Rizwan{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
            Baloch
          </span>
        </motion.h1>

<<<<<<< HEAD
        {/* 3. Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ color: theme.textSecondary }}
          className="text-lg md:text-xl max-w-xl leading-relaxed"
=======
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ color: theme.textSecondary }}
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-md md:max-w-xl"
>>>>>>> 9183bd3 (ui chnages)
        >
          I build <b>modern, scalable MERN applications</b> and robust React ecosystems. 
          I also craft <span className="text-green-500 font-bold">React Native</span> mobile apps 
          with high-performance UX and interactive interfaces.
        </motion.p>
<<<<<<< HEAD
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
=======

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 mt-4">
          <a
            href="#projects"
            style={{ backgroundColor: theme.primary }}
            className="px-8 py-3 rounded-full text-white font-bold shadow-xl hover:scale-105 transition"
          >
            Explore Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            style={{ color: theme.textMain, border: `2px solid ${theme.border}` }}
            className="px-8 py-3 rounded-full font-bold hover:bg-gray-500/5 transition flex items-center gap-2"
          >
            <FiDownload /> Resume
          </a>
        </div>
      </div>

      {/* Right Content - Image & Orbiting Icons */}
      <div className="relative mt-10 md:mt-0 mx-auto w-72 h-72 md:w-[380px] md:h-[380px] z-10">
        <div
          className="absolute inset-0 rounded-full blur-[100px] opacity-25"
          style={{ backgroundColor: theme.primary }}
        />
        <div
          className="relative z-10 w-full h-full rounded-full overflow-hidden border-[3px]"
          style={{ borderColor: theme.primary }}
        >
          <img
            src={profilePic}
            alt="Rizwan"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition"
>>>>>>> 9183bd3 (ui chnages)
          />
        </div>

        {/* Orbiting icons */}
<<<<<<< HEAD
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
=======
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40 + i * 5, // slower rotation
              repeat: Infinity,
              ease: "linear",
              delay: tech.delay,
            }}
          >
            <div
              className="absolute text-3xl md:text-5xl" // slightly bigger
              style={{
                color: tech.color,
                transform: `translate(${tech.distance}px, -${tech.distance}px)`,
              }}
            >
              {tech.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex md:hidden flex-col sm:flex-row gap-4 mt-8 items-center w-full justify-center"
>>>>>>> 9183bd3 (ui chnages)
      >
        <a
          href="#projects"
          style={{ backgroundColor: theme.primary }}
<<<<<<< HEAD
          className="flex items-center justify-center gap-3 text-white font-bold rounded-full px-10 py-5 shadow-xl hover:scale-105 transition"
=======
          className="px-10 py-4 rounded-full text-white font-bold shadow-xl hover:scale-105 transition"
>>>>>>> 9183bd3 (ui chnages)
        >
          Explore Projects
        </a>
        <a
          href="/Resume.pdf"
<<<<<<< HEAD
          download="Rizwan_Baloch_Resume.pdf"
          className="flex items-center justify-center gap-3 font-bold rounded-full px-10 py-5 transition hover:bg-gray-500/5"
          style={{ border: `2px solid ${theme.border}`, color: theme.textMain }}
        >
          <FiDownload /> Get Resume
        </a>
      </motion.div>
=======
          download
          style={{ color: theme.textMain, border: `2px solid ${theme.border}` }}
          className="px-10 py-4 rounded-full font-bold hover:bg-gray-500/5 transition flex items-center gap-2"
        >
          <FiDownload /> Resume
        </a>
      </motion.div>

      <style>
        {`
          @keyframes snow {
            to { transform: translateY(110vh); }
          }
          .animate-snow {
            animation-name: snow;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
>>>>>>> 9183bd3 (ui chnages)
    </section>
  );
};

export default HeroSection;
