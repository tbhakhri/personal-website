import React from "react";
import "./NavBar.css";

export default function NavBar(){
    return(
        <nav className = "navbar">
            <div className ="my-name">
                <h1><a href ="#home-section">Tanya Bhakhri</a></h1>
            </div>
            <div className ="options">
                <ul>
                    <li><a href = "#about-section">about</a></li>
                    <li><a href ="#experience-section">experience</a></li>
                    <li><a href ="#projects-section">projects</a></li>
                    <li><a href ="#contact-section">contact</a></li>
                </ul>
            </div>

            
        </nav>
    )
}

