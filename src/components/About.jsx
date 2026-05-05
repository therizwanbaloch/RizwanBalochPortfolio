import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUser, FiCode, FiSmartphone, FiDatabase } from 'react-icons/fi';
import useTheme from '../context/ThemeContext';

const About = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'Experience', value: '1+', icon: <FiCode /> },
    { label: 'Apps Built', value: '12+', icon: <FiSmartphone /> },
    { label: 'Happy Clients', value: '10+', icon: <FiUser /> },
    { label: 'Stack Focus', value: 'MERN', icon: <FiDatabase /> },
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
      id="about"
      ref={ref}
      style={{ 
        backgroundColor: theme.background, 
        borderColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        transition: "background-color 0.5s ease" 
      }}
      // FIXED: Added 'isolate' and z-index to block interference from HeroSection
      className="relative py-24 px-6 md:px-16 lg:px-32 overflow-hidden border-t isolate z-30"
    >
      <div 
        className="absolute -right-20 top-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none -z-10"
        style={{ backgroundColor: theme.primary }}
      />

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center relative">
        
        <div className="grid grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1 relative z-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={idx}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ 
                backgroundColor: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", 
                border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)"}` 
              }}
              className="p-8 md:p-10 rounded-none flex flex-col items-center justify-center text-center shadow-xl transition-all"
            >
              <div style={{ color: theme.primary }} className="text-3xl md:text-4xl mb-4">{stat.icon}</div>
              <h3 style={{ color: theme.textMain }} className="text-3xl md:text-5xl font-black mb-2 tracking-tighter">{stat.value}</h3>
              <p style={{ color: theme.textSecondary }} className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-8 order-1 lg:order-2 relative z-20">
          <motion.div custom={0} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInUp}>
            <h2 style={{ color: theme.textMain }} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-6">
              THE <span className="italic opacity-20">ENGINEER</span> <br /> 
              BEHIND <span style={{ color: theme.primary }}>THE CODE</span>
            </h2>
            <div className="h-[1px] w-full opacity-10 mb-8" style={{ backgroundColor: theme.textMain }}></div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="border-l-2 pl-8"
            style={{ borderColor: theme.primary }}
          >
            <p style={{ color: theme.textSecondary }} className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
              I am <span className="font-bold" style={{ color: theme.textMain }}>Rizwan Baloch</span>, a Senior Full-Stack Developer dedicated to building 
              high-performance digital ecosystems.
            </p>
            <p style={{ color: theme.textSecondary }} className="text-lg opacity-80 leading-relaxed mb-8">
              Based in Pakistan, I collaborate with global partners using the MERN stack and React Native.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Scalable Architecture', 'Cloud Integration', 'Premium UI/UX'].map((tag) => (
                <span 
                  key={tag}
                  style={{ 
                    border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                    color: theme.textMain,
                    backgroundColor: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"
                  }}
                  className="px-4 py-2 text-[10px] font-black uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;