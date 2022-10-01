import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="CONTACT" text="Any your feedback will be much appreciated" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact