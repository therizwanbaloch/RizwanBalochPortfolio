import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiFramer, SiRedux } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import profilePic from "../assets/Profile.png"; 
import useTheme from "../context/ThemeContext";

const HeroSection = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const colors = useMemo(() => ({
    bg: isDarkMode ? "#020617" : "#f8fafc",
    textMain: isDarkMode ? "#ffffff" : "#0f172a",
    textSecondary: isDarkMode ? "#94a3b8" : "#475569",
    border: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    accent: theme.primary || "#6366f1",
    badgeBg: isDarkMode ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0.05)",
  }), [isDarkMode, theme.primary]);

  const techStack = [
    { icon: <FaJs />, color: "#F7DF1E", x: -80, y: -250 },
    { icon: <FaReact />, color: "#61DBFB", x: 100, y: -200 },
    { icon: <SiFirebase />, color: "#FFCA28", x: 180, y: -80 },
    { icon: <TbDeviceMobileCode />, color: colors.accent, x: 190, y: 80 },
    { icon: <SiRedux />, color: "#764ABC", x: 120, y: 220 },
    { icon: <FaNodeJs />, color: "#68A063", x: -20, y: 280 },
    { icon: <SiMongodb />, color: "#47A248", x: -160, y: 180 },
    { icon: <SiFramer />, color: colors.textMain, x: -190, y: 20 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      ref={ref}
      style={{ backgroundColor: colors.bg, transition: "background-color 0.5s ease" }}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20 overflow-hidden isolate"
    >
      <motion.div 
        className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* TEXT CONTENT */}
        <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-none">
          <motion.div
            variants={itemVariants}
            className="px-4 py-2 font-bold tracking-[0.2em] uppercase border-l-4 mb-8 text-[12px]"
            style={{
              backgroundColor: colors.badgeBg,
              color: colors.accent,
              borderColor: colors.accent,
            }}
          >
            Full-Stack Web & Mobile Architect
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{ color: colors.textMain }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter leading-[0.85] mb-10"
          >
            RIZWAN <br />
            <span className="opacity-10 italic">BALOCH</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{ color: colors.textSecondary, borderColor: colors.border }}
            className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl border-l-2 pl-6 mb-12"
          >
            Engineering <span style={{ color: colors.textMain }} className="font-semibold">scalable MERN ecosystems</span>. 
            I specialize in high-performance architectures and premium <span style={{ color: colors.accent }} className="font-bold">React Native</span> solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pointer-events-auto">
            <a
              href="#projects"
              style={{ backgroundColor: colors.accent }}
              className="relative z-30 inline-flex px-8 py-4 text-white font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all items-center gap-3 shadow-lg shadow-indigo-500/20"
            >
              EXPLORE SYSTEMS <FiArrowRight size={18} />
            </a>
            <a
              href="/Resume.pdf"
              download
              style={{ color: colors.textMain, borderColor: colors.border }}
              className="relative z-30 inline-flex px-8 py-4 border font-bold text-xs tracking-widest uppercase hover:bg-black/5 dark:hover:bg-white/5 transition-all items-center gap-3"
            >
              GET RESUME <FiDownload size={18} />
            </a>
          </motion.div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative z-20 flex justify-center lg:justify-end items-center pointer-events-none">
          {/* Ambient Glow */}
          <div 
            className="absolute w-[450px] h-[450px] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ backgroundColor: colors.accent }}
          />

          {/* Floating Tech Stack */}
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 0.6, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="absolute z-10 hidden lg:block pointer-events-none"
              style={{
                color: tech.color,
                left: `calc(50% + ${tech.x}px)`,
                top: `calc(50% + ${tech.y}px)`,
              }}
            >
              <motion.span 
                className="text-4xl block"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                {tech.icon}
              </motion.span>
            </motion.div>
          ))}

          {/* Profile Picture Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 w-full max-w-[420px] group pointer-events-auto"
          >
            <div 
              className="absolute -inset-4 border border-dashed opacity-40 rotate-3 transition-all duration-700 pointer-events-none"
              style={{ borderColor: colors.accent }}
            />
            <div 
              className="absolute -inset-2 border border-solid opacity-30 group-hover:-rotate-3 transition-all duration-1000 pointer-events-none"
              style={{ borderColor: colors.textMain }}
            />

            <div className="relative overflow-hidden bg-slate-900/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              <img
                src={profilePic}
                alt="Rizwan Baloch"
                className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.03]"
              />
              
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: colors.accent }} />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: colors.accent }} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] opacity-10 pointer-events-none" style={{ backgroundColor: colors.textMain }} />
    </section>
  );
};

export default HeroSection;