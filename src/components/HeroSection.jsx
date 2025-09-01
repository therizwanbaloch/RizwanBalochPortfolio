import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profilePic from '../assets/Profile.jpg'; 
import resumeFile from '../assets/Profile.jpg'; 

const HeroSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: true, margin: '-100px' });
  const isRightInView = useInView(rightRef, { once: true, margin: '-100px' });

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-black overflow-hidden">
      {/* Left section*/}
      <motion.div
        ref={leftRef}
        className="w-full md:w-[70%] flex flex-col justify-center px-6 md:px-16 py-10 text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <p className="text-white text-xl md:text-3xl font-medium">
          Hello There!
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-orange-500 mt-2 leading-tight">
          I'm Rizwan Baloch
        </h1>

        <p className="text-white text-base md:text-2xl mt-6 max-w-2xl">
          I am a Full-Stack MERN Developer — skilled in both Front-End and Back-End development. I build responsive, modern, and efficient web applications using MongoDB, Express.js, React, and Node.js.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={resumeFile}
            download="Rizwan-Baloch-Resume"
            className="inline-block bg-orange-500 text-black font-semibold rounded-lg px-8 py-3 hover:bg-white hover:text-orange-500 transition duration-300"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="inline-block border border-orange-500 text-orange-500 font-semibold rounded-lg px-8 py-3 hover:bg-orange-500 hover:text-black transition duration-300"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Profile image  */}
      <motion.div
        ref={rightRef}
        className="w-full md:w-[30%] flex justify-center items-center bg-black py-10 md:py-0"
        initial={{ opacity: 0, x: 100 }}
        animate={isRightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
