import React, { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon, FiArrowUpRight } from "react-icons/fi";
import useTheme from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      style={{
        backgroundColor: isDarkMode ? theme.background : "#ffffff", // Solid BG for reliability
        borderBottom: `1px solid ${isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
      }}
      className="sticky top-0 z-[100] w-full transition-all duration-500"
    >
      <div className="mx-auto max-w-[1450px] px-6 md:px-16 lg:px-32">
        <div className="flex h-24 items-center justify-between relative z-[110]">
          
          {/* Logo Section */}
          <button
            onClick={() => handleScroll("home")}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div
              style={{ backgroundColor: theme.primary }}
              className="flex h-11 w-11 items-center justify-center text-white font-black text-xl transition-all duration-500 group-hover:rotate-[90deg]"
            >
              R
            </div>
            <div className="flex flex-col leading-[0.8] text-left">
              <span style={{ color: theme.textMain }} className="text-lg font-black uppercase tracking-tighter">
                Rizwan
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40" style={{ color: theme.textMain }}>
                Baloch
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  style={{ color: theme.textMain }}
                  className="group relative py-2"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] opacity-50 group-hover:opacity-100 transition-all duration-300">
                    {link.label}
                  </span>
                  <span 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ backgroundColor: theme.primary }}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-8 border-l pl-10" style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
              <button onClick={toggleTheme} style={{ color: theme.textMain }} className="opacity-50 hover:opacity-100">
                {isDarkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
              </button>
              <a
                href="/Resume.pdf"
                className="group flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.3em] px-8 py-4 transition-all relative"
                style={{ backgroundColor: theme.textMain, color: theme.background }}
              >
                Resume <FiArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-6 md:hidden">
            <button onClick={toggleTheme} style={{ color: theme.textMain }} className="opacity-60">
              {isDarkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>
            <button onClick={toggleMenu} style={{ color: theme.textMain }} className="relative z-[120]">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - Fixed Background and Visibility */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ 
          backgroundColor: theme.background,
          height: '100vh',
          width: '100vw'
        }}
      >
        <div className="flex flex-col h-full px-10 pt-32"> {/* pt-32 accounts for the navbar height */}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="group flex items-center justify-between py-7 border-b"
              style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}
            >
              <span style={{ color: theme.textMain }} className="text-4xl font-black uppercase tracking-tighter">
                {link.label}
              </span>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border" style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                <FiArrowUpRight size={20} style={{ color: theme.primary }} />
              </div>
            </button>
          ))}
          
          <div className="mt-auto pb-10">
             <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 opacity-30" style={{ color: theme.textMain }}>
               Available for worldwide projects
             </p>
             <a
              href="Resume.pdf"
              className="block w-full py-6 text-center text-xs font-black uppercase tracking-[0.4em]"
              style={{ backgroundColor: theme.primary, color: "#ffffff" }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;