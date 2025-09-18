import React from 'react';
import ThaliPK from '../assets/Thali.png';
import Boutique from '../assets/Boutique.png';
import CaféWebsite from '../assets/CaféWebsite.png';
import Pub from '../assets/Pub.png';
import LocalMarketplace from '../assets/LocalMarketplace.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ProjectsPage = () => {
  const projectList = [
    {
      name: 'Local Restaurant Website – Pakistan',
      image: ThaliPK,
      link: 'https://www.thaliipk.com/',
      description:
        'Developed a responsive and user-friendly restaurant website for a Pakistani brand to boost online orders and brand visibility.',
    },
    {
      name: 'Online Boutique Store – USA',
      image: Boutique,
      link: 'https://www.shopwithshari.net/',
      description:
        'Built an engaging e-commerce platform for a boutique brand to showcase and sell products online, increasing their reach and sales.',
    },
    {
      name: 'Bakery & Café Website – USA',
      image: CaféWebsite,
      link: 'https://www.2tarts.com/',
      description:
        'Created a modern, mobile-optimized website for a US-based bakery & café to attract more customers and simplify their online menu browsing.',
    },
    {
      name: 'Pub & Restaurant Platform – USA',
      image: Pub,
      link: 'https://littlepub.com/',
      description:
        'Developed a professional restaurant platform for an American pub to improve user experience and drive reservations.',
    },
    {
      name: 'Multi-brand Local Marketplace – USA',
      image: LocalMarketplace,
      link: 'https://madeinkc.co/',
      description:
        'Designed a marketplace platform for multiple local brands in the USA to showcase products and increase online sales.',
    },
  ];

  return (
    <>
      <Navbar />
      <section id="Projects" className="py-16 px-8 bg-black">
        <h2 className="text-4xl font-bold text-orange-500 mb-4 text-center">
          All Projects
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Only some of our projects are shown here to give you a glimpse of what we build.
        </p>

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

              {/* Orange paragraph */}
              <p className="text-center text-orange-500 text-sm font-medium">
                Click to view project live →
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-white hover:text-orange-500 text-black font-semibold py-3 px-8 rounded-md transition duration-300"
          >
            Request a Service →
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
