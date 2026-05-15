import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useInView, AnimatePresence } from "framer-motion";
import useTheme from "../context/ThemeContext";

const ContactForm = () => {
  const { theme, isDarkMode } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [toast, setToast] = useState({ show: false, type: "", text: "" });

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (type, text) => {
    setToast({ show: true, type, text });
    setTimeout(() => setToast({ show: false, type: "", text: "" }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_pj42j4j", "template_tdis61b", form, "PKpVN9FZYcF6v5ZfU")
      .then(
        () => {
          showToast("success", "INQUIRY RECEIVED SUCCESSFULLY.");
          setForm({ name: "", email: "", phone: "", service: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          showToast("error", "SYSTEM ERROR. PLEASE RETRY.");
        }
      );
  };

  const adaptiveBorder = isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <section
      id="contact"
      // FIX 1: Consolidated duplicate style attributes into one clean object to prevent layout breakdown
      style={{ borderColor: adaptiveBorder, backgroundColor: theme.background, transition: "background-color 0.5s ease" }}
      // FIX 2: Optimized vertical padding bounds (py-32 -> py-20 lg:py-24) to resolve aggressive component height bloat
      className="relative py-20 lg:py-24 px-6 md:px-16 lg:px-32 flex flex-col items-center justify-center overflow-hidden border-t"
    >
      {/* Technical Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(${adaptiveBorder} 1px, transparent 1px), linear-gradient(90deg, ${adaptiveBorder} 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-[1450px] w-full mx-auto relative z-10">
        {/* FIX 3: Tightened inner grid gap dimensions for elegant, non-overflowing field structures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="px-4 py-1.5 text-[10px] font-black tracking-[0.4em] uppercase border-l-2 mb-5 inline-block"
              style={{ color: theme.primary, borderColor: theme.primary }}
            >
              Contact Protocol
            </span>
            {/* FIX 4: Clamped massive brutalist typography scaling rules safely */}
            <h2 style={{ color: theme.textMain }} className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
              START A <br />
              <span className="opacity-10 italic">PROJECT.</span>
            </h2>
            <p style={{ color: theme.textSecondary }} className="text-base md:text-lg max-w-sm leading-relaxed opacity-70 font-medium">
              I am currently accepting inquiries for high-performance web systems and full-stack architecture.
            </p>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            // FIX 5: Balanced form content inner box padding for crisp, space-efficient rendering
            className="border-l border-t p-6 md:p-10"
            style={{ borderColor: adaptiveBorder, backgroundColor: isDarkMode ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { name: "name", type: "text", placeholder: "NAME" },
                  { name: "email", type: "email", placeholder: "EMAIL ADDR" },
                  { name: "phone", type: "tel", placeholder: "PHONE NO." },
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "transparent",
                        color: theme.textMain,
                        borderColor: adaptiveBorder,
                      }}
                      className="w-full p-3.5 border-b outline-none focus:border-b-2 transition-all font-bold tracking-widest placeholder:text-[10px] placeholder:tracking-[0.2em] placeholder:opacity-30"
                    />
                  </div>
                ))}

                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "transparent",
                      color: theme.textMain,
                      borderColor: adaptiveBorder,
                    }}
                    className="w-full p-3.5 border-b outline-none appearance-none font-bold tracking-widest text-[10px]"
                  >
                    <option value="" className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>SELECT SERVICE</option>
                    <option value="app" className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>WEB APP DEV</option>
                    <option value="frontend" className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>FRONT-END UI/UX</option>
                    <option value="backend" className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>BACKEND SYSTEMS</option>
                  </select>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="PROJECT DESCRIPTION"
                rows="3" // FIX 6: Compressed rows count from 4 down to 3 to optimize viewport space balance safely
                value={form.message}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "transparent",
                  color: theme.textMain,
                  borderColor: adaptiveBorder,
                }}
                className="w-full p-3.5 border-b outline-none transition-all font-bold tracking-widest resize-none placeholder:text-[10px] placeholder:tracking-[0.2em] placeholder:opacity-30"
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ backgroundColor: theme.primary, color: "#fff" }}
                style={{ 
                    border: `1px solid ${theme.primary}`,
                    color: theme.primary,
                    backgroundColor: 'transparent'
                }}
                className="w-full p-4 text-[11px] font-black uppercase tracking-[0.5em] transition-all duration-300"
              >
                INITIALIZE MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 left-6 p-5 border-l-4 font-black tracking-widest text-[10px] z-[1000]"
            style={{
              backgroundColor: theme.background,
              color: theme.textMain,
              borderColor: toast.type === "success" ? "#4ade80" : "#f87171",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
            }}
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;