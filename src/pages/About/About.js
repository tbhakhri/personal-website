import React from "react";
import "./About.css";

export default function About(){

    return (

        <div className = "about-holder">

        <div className = "about-heading">
            
            <h2>About</h2>
        
        </div>

        <div className ="about-content">

        <div className = "about-info">
            <p className = "about-stuff">
                Before I was even interested in Computer Science, I wanted to be everything from a marine biologist to a rocket scientist. I eventually settled on studying CS because I enjoy problem-solving and logical thinking. I also know that the ever-evolving nature of the tech industry will constantly keep me entertained with a new challenge or skill to learn.
            </p>

            <p className = "about-stuff">
                In terms of my career, I'm still finding my niche within tech, but as of now, I plan to work as a software engineer. I'm also interested in learning more about artificial intelligence, machine learning, and quantum computing during college. Outside of computer science, I'm interested in physics, classical music, and poetry. 
            </p>

            <p className = "about-stuff">
                Thanks for getting to know me! Feel free to take a look around and reach out!
            </p>
        </div>

        <div className="about-card">

            <div className = "about-card-inner">

                <div className = "about-card-front">

                    <h2>Here's what I've worked with:</h2>
                    
                    <li>Python</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>MATLAB</li>
                    <li>Simulink</li>
                </div>

                <div className = "about-card-back">
                    <div className = "abt-back-content">
                        <h2>Here's some classes I've taken:</h2>
                        <li>CS61A - The Structure and Interpretation of Computer Programs</li>
                        <li>CS70 - Discrete Mathematics and Probability Theory</li>
                        <li>Math 54 - Linear Algebra and Differential Equations</li>
                        <li>Math 53 - Multivariable Calculus</li>
                        <li>Data 8 - Introduction to Data Science</li>
                    </div>
                    
                </div>
    

            </div>
                    
         </div>

        </div>

    </div>

    )
    
}
