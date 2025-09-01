import React from 'react';
import { motion } from 'framer-motion';


import FrontendImage from '../assets/Frontend.jpeg';
import BackendImage from '../assets/Backend.jpeg';
import FullstackImage from '../assets/Fullstack.jpeg';
import RestapiImage from '../assets/Restapi.png';


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
      title: 'Frontend Development',
      img: FrontendImage,
      desc: 'Building responsive and interactive user interfaces using the latest frontend technologies like React, HTML, CSS, and JavaScript.',
    },
    {
      title: 'Backend Development',
      img: BackendImage,
      desc: 'Developing scalable server-side applications, API integrations, and database management with Node.js, Express, and MongoDB.',
    },
    {
      title: 'REST API Development',
      img: RestapiImage,
      desc: 'Creating robust RESTful APIs to handle complex business logic, data storage, and third-party integrations.',
    },
    {
      title: 'Full Stack Development',
      img: FullstackImage,
      desc: 'End-to-end development with expertise in both frontend and backend technologies, delivering complete web solutions.',
    },
  ];

  return (
    <section id="Services" className="bg-black py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Services I Provide
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? variantsFromBottom : variantsFromTop}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black p-6 rounded-lg border-2 border-white shadow-xl hover:shadow-orange-500 hover:border-orange-500 transition-all transform hover:scale-105"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-semibold text-center text-white mb-4">{service.title}</h3>
            <p className="text-center text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
