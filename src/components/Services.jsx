import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaRedoAlt,
  FaTools,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const variantsFromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const variantsFromTop = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const services = [
    {
      title: "Website Design",
      icon: <FaPaintBrush className="text-6xl text-orange-500 mx-auto mb-4" />,
      desc: "Modern, responsive and user-friendly website designs tailored to your brand.",
    },
    {
      title: "Website Redesign",
      icon: <FaRedoAlt className="text-6xl text-orange-500 mx-auto mb-4" />,
      desc: "Revamping old or outdated websites with a fresh, professional look.",
    },
    {
      title: "Website Maintenance",
      icon: <FaTools className="text-6xl text-orange-500 mx-auto mb-4" />,
      desc: "Ongoing support, updates and fixes to keep your site secure and running smoothly.",
    },
    {
      title: "Custom Web Solutions",
      icon: <FaRocket className="text-6xl text-orange-500 mx-auto mb-4" />,
      desc: "Building tailor-made web applications that fit your unique business needs.",
    },
  ];

  return (
    <section id="Services" className="bg-black py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Services I Provide
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? variantsFromBottom : variantsFromTop}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-lg hover:shadow-orange-500/30 hover:border-orange-500 transition-all transform hover:scale-105 flex flex-col justify-between"
          >
            <div>
              {service.icon}
              <h3 className="text-2xl font-semibold text-center text-white mb-3">
                {service.title}
              </h3>
              <p className="text-center text-gray-400">{service.desc}</p>
            </div>
            {/* CTA button */}
            <Link
              to="/contact"
              className="mt-6 inline-block bg-orange-500 text-black font-semibold rounded-lg px-6 py-2 text-center hover:bg-white hover:text-orange-500 transition duration-300"
            >
              Request Service
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
