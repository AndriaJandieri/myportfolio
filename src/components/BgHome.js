import "./BgHome.css";
import React from 'react';
import keyboard from "../assets/keyboard.jpg";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const BgHome = () => {

    const [texty] = useTypewriter(
        {
            words: ['Web', 'Game', 'Android'],
            loop: {},
        }
    )

    return (
        <div className="bg-image">
            <div className="mask">
                <img className="img" src={keyboard} alt="keyboard" />
            </div>
            <div className="content">
                <p> Hi, &nbsp;I am</p>
                <p><b>Andria &nbsp;Jandieri</b></p>
                <h1>
                    <span className="type-writer-text">
                        {texty}
                        <Cursor cursorColor="#1b1b1b" />
                    </span>
                    <span>
                        &nbsp;Developer
                    </span>
                </h1>
                <div>
                
                    <Link to="/contact" className="btn">Get in touch</Link>
                    {/* <img className="memeimg" src={memeimg} alt="memeimg" /> */}
                </div>

            </div>
        </div>
    )
}
export default BgHome