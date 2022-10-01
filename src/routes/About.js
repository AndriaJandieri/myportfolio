import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="ABOUT" text="My name is Andria Jandieri and I'm Self-Taught Programmer." />
      <Skills />
      <Footer />
    </div>
  )
}

export default About