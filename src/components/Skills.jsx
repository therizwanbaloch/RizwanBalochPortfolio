import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiRedux, SiNodedotjs, 
  SiMongodb, SiPostman, SiTailwindcss, SiFirebase,
  SiPostgresql, SiGooglecloud
} from 'react-icons/si';
import { TbDeviceMobileCode } from 'react-icons/tb';
import useTheme from '../context/ThemeContext';

const Skills = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillSet = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "Language" },
    { name: "React Ecosystem", icon: <SiReact />, color: "#61DAFB", category: "Frontend" },
    { name: "Tailwind UI", icon: <SiTailwindcss />, color: "#06B6D4", category: "Design" },
    { name: "Mobile Architect", icon: <TbDeviceMobileCode />, color: "#61DAFB", category: "Mobile" },
    { name: "State Management", icon: <SiRedux />, color: "#764ABC", category: "Frontend" },
    { name: "Backend Systems", icon: <SiNodedotjs />, color: "#339933", category: "Backend" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Database" }, // Added
    { name: "NoSQL Design", icon: <SiMongodb />, color: "#47A248", category: "Database" },
    { name: "Cloud Deployment", icon: <SiGooglecloud />, color: "#4285F4", category: "DevOps" }, // Added
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", category: "Cloud" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }),
  };

  return (
    <section 
      id="skills" 
      ref={ref}
      style={{ 
        backgroundColor: theme.background, 
        borderColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        transition: "background-color 0.5s ease"
      }}
      className="relative py-24 md:py-32 px-4 md:px-16 lg:px-32 overflow-hidden border-t"
    >
      <div className="max-w-[1450px] mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24 px-2">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
          >
            <span 
              className="px-3 py-1.5 font-bold tracking-[0.3em] uppercase border-l-2 mb-6 inline-block text-[10px] md:text-[11px]"
              style={{ 
                color: theme.primary, 
                borderColor: theme.primary,
                backgroundColor: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" 
              }}
            >
              Core Competencies
            </span>
            <h2 
              style={{ color: theme.textMain }} 
              className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8]"
            >
              TECH <br />
              <span className="opacity-10 italic">EXPERTISE.</span>
            </h2>
          </motion.div>
        </div>

        {/* Skills Grid: Forced 2 columns on mobile (grid-cols-2) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-20">
          {skillSet.map((skill, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={idx + 1}
              className="group flex flex-col items-start px-2"
            >
              <div 
                className="text-4xl md:text-6xl mb-6 md:mb-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110"
                style={{ 
                  color: skill.color,
                  filter: isDarkMode 
                    ? `drop-shadow(0 0 15px ${skill.color}30)` 
                    : `drop-shadow(0 0 8px ${skill.color}15)` 
                }}
              >
                {skill.icon}
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span 
                  className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)" }}
                >
                  {skill.category}
                </span>
                <h3 
                  style={{ color: theme.textMain }} 
                  className="text-lg md:text-2xl font-black tracking-tighter uppercase truncate w-full"
                >
                  {skill.name}
                </h3>
                
                <div 
                  className="h-[1px] w-full mt-3 md:mt-4" 
                  style={{ backgroundColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "40px" } : {}}
                    transition={{ delay: 0.5 + (idx * 0.05), duration: 1, ease: "circOut" }}
                    className="h-full"
                    style={{ backgroundColor: theme.primary }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;