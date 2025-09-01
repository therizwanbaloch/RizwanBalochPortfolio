import React from 'react';
import { motion } from 'framer-motion';

import EcommerceImage from '../assets/Ecommerce.jpeg';
import LMSImage from '../assets/LMS.jpeg';
import FoodDeliveryImage from '../assets/FoodDelivery.jpeg';

const Projects = () => {
  const projectList = [
    {
      name: 'E-Commerce (AI Powered)',
      image: EcommerceImage,
      link: 'https://your-ecommerce-project-link.com',
      description:
        'A smart e-commerce platform using AI for personalized recommendations and dynamic pricing.',
    },
    {
      name: 'LMS (AI Powered)',
      image: LMSImage,
      link: 'https://your-lms-project-link.com',
      description:
        'An AI-integrated Learning Management System that adapts to learners’ pace and style.',
    },
    {
      name: 'Food Delivery App (AI Powered)',
      image: FoodDeliveryImage,
      link: 'https://your-fooddelivery-project-link.com',
      description:
        'An AI-driven food delivery app with real-time tracking and predictive ordering.',
    },
  ];

  return (
    <motion.section
      id="Projects"
      className="py-12 px-4 sm:px-6 md:px-8 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      <motion.h2
        className="text-4xl font-bold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
         My Projects
      </motion.h2>

      {/* i am creating projects section here..*/}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {projectList.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-zinc-900 p-5 rounded-xl border-2 border-white shadow-xl hover:shadow-orange-500 hover:border-white transition-all transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Images */}
            <div className="w-full h-40 sm:h-48 overflow-hidden rounded-md mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition duration-500 ease-in-out filter group-hover:filter-none blur-sm"
              />
            </div>

            {/* Information of thae project here........... */}
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-white mb-2">
              {project.name}
            </h3>
            <p className="text-center text-gray-400 text-sm mb-3 px-1">
              {project.description}
            </p>
            <p className="text-center text-orange-400 font-medium text-sm">
              Click to view live demo →
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="/projects"
          className="inline-block bg-orange-500 hover:bg-white hover:text-orange-500 text-black font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          View All Projects
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
