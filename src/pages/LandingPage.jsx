import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing/>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
