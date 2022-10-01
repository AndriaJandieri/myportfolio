import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Proj from '../components/Proj';
import GameProj from '../components/GameProj';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="PROJECTS" text="Some of my recent works" />
      <Proj />
      <GameProj/>
      <Footer />
    </div>
  )
}

export default Projects