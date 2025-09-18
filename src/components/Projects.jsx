import React from 'react';
import { Link } from 'react-router-dom';
import ThaliPK from '../assets/Thali.png';
import Boutique from '../assets/Boutique.png';
import CafeWebsite from '../assets/CaféWebsite.png';

const Projects = () => {
  const projectList = [
    {
      name: 'Local Restaurant Website – Pakistan',
      image: ThaliPK,
      link: 'https://www.thaliipk.com/',
      description:
        'A modern, mobile-friendly restaurant website built to boost online orders and brand presence.',
    },
    {
      name: 'Online Boutique Store – USA',
      image: Boutique,
      link: 'https://www.shopwithshari.net/',
      description:
        'An elegant e-commerce platform helping boutique brands showcase & sell products online.',
    },
    {
      name: 'Bakery & Café Website – USA',
      image: CafeWebsite,
      link: 'https://www.2tarts.com/',
      description:
        'A fresh, responsive site for a US-based bakery to attract more customers and simplify menus.',
    },
  ];

  return (
    <section id="Projects" className="py-16 px-8 bg-black">
      <h2 className="text-4xl font-bold text-orange-500 mb-10 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900/80 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-orange-500/40 hover:border-orange-400 transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition duration-500 ease-in-out sm:blur-sm sm:group-hover:blur-0"
              />
            </div>

            <h3 className="text-xl font-semibold text-center text-white mb-2">
              {project.name}
            </h3>

            <p className="text-center text-gray-300 text-sm mb-2">
              {project.description}
            </p>

            <p className="text-center text-orange-500 text-sm font-medium">
              Click to view project live →
            </p>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="inline-block bg-orange-500 hover:bg-white hover:text-orange-500 text-black font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          View Full Projects →
        </Link>
      </div>
    </section>
  );
};

export default Projects;
