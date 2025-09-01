import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_pj42j4j", "template_tdis61b", form, "PKpVN9FZYcF6v5ZfU")
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", phone: "", service: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-lg w-full space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-bold text-white text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Contact Us
        </motion.h2>

        {[
          { name: "name", type: "text", placeholder: "Your Name" },
          { name: "email", type: "email", placeholder: "Your Email" },
          { name: "phone", type: "tel", placeholder: "Your Phone" },
        ].map((field, index) => (
          <motion.input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-900 text-white border border-white focus:border-orange-500 outline-none"
            required
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
          />
        ))}

        <motion.select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-gray-900 text-white border border-white focus:border-orange-500 outline-none"
          required
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <option value="">Select Service</option>
          <option value="app">Web App Development</option>
          <option value="design">Front-end Development</option>
          <option value="backend">Back-end Development</option>
          <option value="fullstack">Full-Stack Development</option>
          <option value="other">Not Included (other)</option>
        </motion.select>

        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-gray-900 text-white border border-white focus:border-orange-500 outline-none"
          required
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="w-full p-3 rounded-xl bg-orange-500 hover:bg-white hover:text-orange-500 text-black font-semibold shadow-md transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
      );
};

export default ContactForm;
