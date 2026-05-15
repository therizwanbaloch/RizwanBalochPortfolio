import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import useTheme from "../context/ThemeContext";

const Experience = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  // FIX 1: Set explicit item-amount check viewport bounding for accurate triggers
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const experienceData = [
    {
      role: "Web Operations Lead",
      company: "AWARE2ACT.YOUTH",
      duration: "Present",
      type: "Current Role",
      description: "Directing comprehensive website operations and ecosystem maintenance. Leading architectural enhancements, frontend feature engineering, and state optimization using React to ensure continuous deployment stability, security, and dynamic high-performance user journeys.",
      tech: ["React", "Web Operations", "Ecosystem Management", "Frontend Architecture"],
      num: "01"
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }),
  };

  return (
    <section
      id="experience"
      ref={ref}
      style={{ 
        backgroundColor: theme.background,
        borderColor: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
        transition: "background-color 0.5s ease",
      }}
      // FIX 2: Standardized tracking vertical layouts across sections (py-32 -> py-20 lg:py-24)
      className="relative py-20 lg:py-24 px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden border-t isolate z-30"
    >
      {/* Structural visual grid alignment axis line mirroring Projects */}
      <div 
        className="absolute left-1/2 top-0 w-[1px] h-full hidden lg:block opacity-20 pointer-events-none" 
        style={{ backgroundColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }} 
      />

      <div className="max-w-[1400px] mx-auto z-10 relative">
        {/* FIX 3: Reduced heavy title card margin (mb-24 -> mb-16) to avoid layout elongation */}
        <div className="flex flex-col mb-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
          >
            <span 
              className="px-4 py-1.5 text-[10px] font-black tracking-[0.4em] uppercase border-l-2 mb-5 inline-block"
              style={{ 
                color: theme.primary, 
                borderColor: theme.primary, 
                backgroundColor: isDarkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)" 
              }}
            >
              Professional History
            </span>
            {/* FIX 4: Clamped display typography size scales down for optimal space distribution */}
            <h2 style={{ color: theme.textMain }} className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
              WORK <br />
              <span className="opacity-10 italic">EXPERIENCE.</span>
            </h2>
          </motion.div>
        </div>

        <div 
          className="grid grid-cols-1 border-t border-l"
          style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
        >
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={idx + 1}
              // FIX 5: Tightened padding inside cards for crisp responsive block sizing
              className="group relative p-8 md:p-12 lg:p-14 border-r border-b overflow-hidden transition-all duration-700"
              style={{ 
                borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                backgroundColor: "transparent"
              }}
            >
              {/* Dynamic hover color-splash overlay effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-700 pointer-events-none" 
                style={{ backgroundColor: theme.primary }} 
              />
              
              <div className="relative z-20">
                {/* FIX 6: Lowered overly massive spacer margins to match brutalist grids */}
                <div className="flex justify-between items-start mb-10">
                  <span 
                    className="text-4xl md:text-5xl font-black leading-none select-none transition-transform duration-500 group-hover:scale-105 inline-block" 
                    style={{ color: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.05)" }}
                  >
                    {exp.num}
                  </span>
                  
                  {/* Status Indicator Tag matching design guidelines */}
                  <div 
                    className="flex items-center gap-2 px-3.5 py-1.5 border text-[9px] font-black uppercase tracking-widest backdrop-blur-xs"
                    style={{ 
                      color: theme.primary,
                      borderColor: theme.primary,
                      backgroundColor: isDarkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme.primary }}></span>
                    {exp.type}
                  </div>
                </div>

                <div className="mb-8">
                  <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: theme.textSecondary }}>
                    <FiCalendar size={11} style={{ color: theme.primary }} /> {exp.duration}
                  </p>
                  <h3 style={{ color: theme.textMain }} className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-3 group-hover:translate-x-1 transition-transform duration-500">
                    {exp.role}
                  </h3>
                  <p className="text-sm md:text-base font-bold tracking-tight mb-4 opacity-75" style={{ color: theme.primary }}>
                    {exp.company}
                  </p>
                  <p style={{ color: theme.textSecondary }} className="text-sm md:text-base leading-relaxed font-light max-w-4xl opacity-80">
                    {exp.description}
                  </p>
                </div>

                {/* Tech Badges container matching structural portfolio tags */}
                <div 
                  className="flex flex-wrap gap-x-3 gap-y-2 mt-8 pt-6 border-t"
                  style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                >
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 border backdrop-blur-xs"
                      style={{ 
                        color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)",
                        borderColor: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                        backgroundColor: isDarkMode ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)"
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

export default Experience;