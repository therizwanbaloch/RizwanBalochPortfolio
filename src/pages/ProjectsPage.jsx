import React from 'react';
import EcommerceImage from '../assets/Ecommerce.jpeg';
import LMSImage from '../assets/LMS.jpeg';
import FoodDeliveryImage from '../assets/FoodDelivery.jpeg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ProjectsPage = () => {
  
  const projectList = [
    {
      name: 'E-Commerce (AI Powered)',
      image: EcommerceImage,
      link: 'https://your-ecommerce-project-link.com',
      description: 'A smart e-commerce platform using AI for personalized recommendations and dynamic pricing.',
    },
    {
      name: 'LMS (AI Powered)',
      image: LMSImage,
      link: 'https://your-lms-project-link.com',
      description: 'An AI-integrated Learning Management System that adapts to learners’ pace and style.',
    },
    {
      name: 'Food Delivery App (AI Powered)',
      image: FoodDeliveryImage,
      link: 'https://your-fooddelivery-project-link.com',
      description: 'An AI-driven food delivery app with real-time tracking and predictive ordering.',
    },
  ];

  return (
    <>
    <Navbar/>
    <section id="Projects" className="py-16 px-8 bg-black">
      {/*  Heading */}
      <h2 className="text-4xl font-bold text-orange-500 mb-10 text-center">
        Projects I’ve Built
      </h2>

      {/* Projects  ka section*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-zinc-900 p-6 rounded-lg border-2 border-white shadow-xl hover:shadow-orange-500 hover:border-white transition-all transform hover:scale-105"
          >
            
            <div className="w-full h-40 overflow-hidden rounded-md mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition duration-500 ease-in-out filter group-hover:filter-none blur-sm"
              />
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-semibold text-center text-white mb-2">
              {project.name}
            </h3>
            <p className="text-center text-gray-400 text-sm mb-3">
              {project.description}
            </p>
            <p className="text-center text-orange-400 font-medium">
              Click to view live demo →
            </p>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <a
          href="/projects" 
          className="inline-block bg-orange-500 hover:bg-white hover:text-orange-500 text-black font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          Some Projects Are Coming Soon...
        </a>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ProjectsPage;
