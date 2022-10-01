import "./Footer.css";

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {

    const handleClickFB = () => {
        window.open("https://www.facebook.com/ragindara/");
    };
    const handleClickGIT = () => {
        window.open("https://github.com/AndriaJandieri");
    };
    const handleClickLNK = () => {
        window.open("https://www.linkedin.com/in/andria-jandieri/");
    };

    return (
        <div className="footer">
            <div className="footer-container">

                <div><p><u>Contact Info:</u></p>

                </div>
                <div className="location">
                    <FaHome size={20} style={{ color: "#faf7ff", marginRight: "2rem" }} />
                    <div>
                        <p>
                            Tbilisi, &nbsp; Georgia.
                        </p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{ color: "#faf7ff", marginRight: "2rem" }} />
                    <div>
                        <p>
                            +995 599 044 425
                        </p>
                    </div>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{ color: "#faf7ff", marginRight: "2rem" }} />
                    <div>
                        <p>
                            jandieri.andria@gmail.com
                        </p>
                    </div>

                </div>
                <hr className="line"></hr>
                <div className="social">
                    <FaFacebook className="soc" onClick={handleClickFB} size={40} style={{ color: "#faf7ff", marginRight: "3rem" }} />
                    <FaGithub className="soc" onClick={handleClickGIT} size={40} style={{ color: "#faf7ff", marginRight: "3rem" }} />
                    <FaLinkedin className="soc" onClick={handleClickLNK} size={40} style={{ color: "#faf7ff", marginRight: "3rem" }} />                    
                </div>
            </div>
        </div>
    )
}

export default Footer