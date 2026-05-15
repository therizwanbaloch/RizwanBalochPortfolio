import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience'; // Imported your new section
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Experience /> 
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;