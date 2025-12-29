import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiRedux, SiNodedotjs, 
  SiMongodb, SiPostman, SiTailwindcss 
} from 'react-icons/si';
import { TbDeviceMobileCode } from 'react-icons/tb';
import useTheme from '../context/ThemeContext';

const Skills = () => {
  const { theme, isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillSet = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "React Native", icon: <TbDeviceMobileCode />, color: "#61DAFB" },
    { name: "Redux / Context", icon: <SiRedux />, color: "#764ABC" },
    { name: "Node + Express", icon: <SiNodedotjs />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "API Testing", icon: <SiPostman />, color: "#FF6C37" },
  ];

  const binaryParticles = Array.from({ length: 30 });

  return (
    <section 
      id="skills" 
      ref={ref}
      style={{ backgroundColor: theme.background }}
      className="relative py-24 px-6 md:px-16 lg:px-24 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        {binaryParticles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono font-bold"
            style={{ 
              color: theme.primary,
              left: Math.random() * 100 + '%',
              fontSize: Math.random() * 12 + 10 + 'px',
              filter: 'blur(0.5px)'
            }}
            animate={{
              y: [-100, 1000],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -20
            }}
          >
            {Math.round(Math.random())}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div 
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 style={{ color: theme.textMain }} className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
            Technical <span style={{ color: theme.primary }}>Arsenal.</span>
          </h2>
          <div className="h-1.5 w-24 rounded-full mx-auto md:mx-0" style={{ backgroundColor: theme.primary }}></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillSet.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ 
                y: -10,
                rotateY: 10,
                boxShadow: `0 25px 50px -12px ${skill.color}40`
              }}
              style={{ 
                backgroundColor: theme.surface + 'cc', 
                border: `1px solid ${theme.border}`,
                backdropFilter: 'blur(10px)',
                perspective: "1000px"
              }}
              className="group p-10 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 transition-all duration-500 cursor-default"
            >
              <div 
                className="text-6xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                style={{ color: isDarkMode ? skill.color : theme.textMain }}
              >
                {skill.icon}
              </div>
              <span 
                style={{ color: theme.textMain }} 
                className="text-xs font-black uppercase tracking-[0.2em] text-center opacity-80 group-hover:opacity-100"
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;