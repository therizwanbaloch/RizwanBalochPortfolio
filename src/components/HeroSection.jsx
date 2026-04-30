import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi"; // Added Arrow icon
import { FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import profilePic from "../assets/Profile.jpeg";
import useTheme from "../context/ThemeContext";

const Snow = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
    {[...Array(40)].map((_, i) => (
      <span
        key={i}
        className="absolute top-[-10px] w-1 h-1 rounded-full bg-white/20 animate-snow"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${10 + Math.random() * 15}s`,
          filter: "blur(1px)",
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    { icon: <FaReact />, color: "#61DBFB", distance: 130, delay: 0 },
    { icon: <FaNodeJs />, color: "#68A063", distance: 110, delay: 0.5 },
    { icon: <SiMongodb />, color: "#47A248", distance: 150, delay: 1 },
    { icon: <FaHtml5 />, color: "#E34F26", distance: 120, delay: 1.5 },
    { icon: <SiExpress />, color: isDarkMode ? "#fff" : "#000", distance: 100, delay: 2 },
    { icon: <FaJs />, color: "#F7DF1E", distance: 160, delay: 2.5 },
    { icon: <SiPostman />, color: "#FF6C37", distance: 140, delay: 3 },
  ];

  // Animation Variants for cleaner code
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      style={{ backgroundColor: theme.background }}
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-20 overflow-hidden transition-colors duration-500"
    >
      <Snow />

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:max-w-2xl z-10">
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase"
          style={{
            backgroundColor: isDarkMode ? "rgba(99,102,241,0.1)" : "rgba(99,102,241,0.05)",
            color: theme.primary,
            border: `1px solid ${isDarkMode ? "rgba(99,102,241,0.3)" : "rgba(99,102,241,0.2)"}`,
          }}
        >
          Full-Stack Web & Mobile Developer
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          style={{ color: theme.textMain }}
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight"
        >
          Rizwan <span style={{ color: theme.primary }}>Baloch</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          style={{ color: theme.textSecondary }}
          className="text-lg md:text-xl leading-relaxed max-w-lg"
        >
          I build <span className="font-semibold" style={{ color: theme.textMain }}>modern, scalable MERN applications</span> and robust React ecosystems. 
          I also craft <span className="text-green-500 font-bold">React Native</span> mobile apps 
          with high-performance UX.
        </motion.p>

        {/* Desktop Buttons */}
        <motion.div 
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="hidden md:flex gap-5 mt-4"
        >
          <a
            href="#projects"
            style={{ backgroundColor: theme.primary }}
            className="group px-8 py-3.5 rounded-xl text-white font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            Explore Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Resume.pdf"
            download
            style={{ color: theme.textMain, border: `1px solid ${theme.border}` }}
            className="px-8 py-3.5 rounded-xl font-bold hover:bg-white/5 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
          >
            <FiDownload /> Resume
          </a>
        </motion.div>
      </div>

      {/* Right Content - Visual Profile */}
      <div className="relative mt-16 md:mt-0 flex items-center justify-center w-72 h-72 md:w-[450px] md:h-[450px] z-10">
        {/* Animated Glow Background */}
        <div
          className="absolute inset-0 rounded-full blur-[80px] opacity-20 animate-pulse"
          style={{ backgroundColor: theme.primary }}
        />
        
        {/* Profile Image Container */}
        <div
          className="relative z-20 w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          style={{ borderColor: theme.primary }}
        >
          <img
            src={profilePic}
            alt="Rizwan"
            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
          />
        </div>

        {/* Tech Stack Orbit */}
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
              animate={{ rotate: -360 }} // Counter-rotation keeps icons upright
              transition={{
                duration: 30 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                color: tech.color,
                transform: `translate(${tech.distance}px, -${tech.distance}px)`,
              }}
            >
              <span className="text-2xl md:text-3xl">{tech.icon}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Buttons */}
      <motion.div
        custom={4}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="flex md:hidden flex-col gap-4 mt-12 items-center w-full"
      >
        <a
          href="#projects"
          style={{ backgroundColor: theme.primary }}
          className="w-full text-center py-4 rounded-xl text-white font-bold shadow-xl active:scale-95 transition"
        >
          Explore Projects
        </a>
        <a
          href="/Resume.pdf"
          download
          style={{ color: theme.textMain, border: `1px solid ${theme.border}` }}
          className="w-full text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition"
        >
          <FiDownload /> Resume
        </a>
      </motion.div>

      <style>
        {`
          @keyframes snow {
            0% { transform: translateY(-10vh) translateX(0); }
            100% { transform: translateY(110vh) translateX(20px); }
          }
          .animate-snow {
            animation-name: snow;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;