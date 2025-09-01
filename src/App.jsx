import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import HiringPage from './pages/HiringPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/reviews" element={<ReviewsPage/>} />
        <Route path="/hireme" element={<HiringPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
