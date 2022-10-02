import "./Navbar.css";

import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeNavColor = () => {
        (window.scrollY >= 100) ? setColor(true) : setColor(false);
    }

    window.addEventListener("scroll", changeNavColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1 className="logo-aj">
                    AndriaJandieri
                </h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link className="nav-btn" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-btn" to="/about">About</Link>
                </li>
                <li>
                    <Link className="nav-btn" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="nav-btn" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className="cv-btn"
                        to="/resume/AndriaJandieri-CV.pdf"
                        target="_blank"
                        download>
                        Download CV</Link>

                </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>

                {click ? (<FaTimes size={40} style={{ color: "#faf7ff" }} />) : (<FaBars size={40} style={{ color: "#faf7ff" }} />)}

            </div>
        </div>
    )
}

export default Navbar