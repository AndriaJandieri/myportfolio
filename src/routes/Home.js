
import "../components/PageNames.css"
import React from 'react';

import Navbar from '../components/Navbar';
import BgHome from '../components/BgHome';
import Footer from '../components/Footer';
import AndroidProj from '../components/AndroidProj';
import Proj from '../components/Proj';
import GameProj from '../components/GameProj';
import ContactForm from '../components/ContactForm';

import ScrollingArrow from "../components/styles/ScrollingArrow";


const Home = () => {
    return (
        <div>
            <Navbar />
            <BgHome />
            <ScrollingArrow/>
            <hr></hr>
            <h1 className="page-name">PROJECTS</h1>
            <AndroidProj/>
            <Proj />
            <GameProj />
            <hr></hr>
            <h1 className="page-name">CONTACT</h1>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home