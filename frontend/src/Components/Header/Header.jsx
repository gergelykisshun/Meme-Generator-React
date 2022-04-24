import React from "react";
import './Header.css'
import trollface from './trollface-removebg.png'


function Header(){
    return(
        <header>
            <div className="logo-container">
                <img src={trollface} alt="trollface" />
                <a href="#home-section">Meme Generator</a>
                <a href="#newsletter-section">Sign up</a>
            </div>
            <h2>React Course - Project 3</h2>
        </header>
    )
}

export default Header;