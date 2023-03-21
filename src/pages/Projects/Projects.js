import React from "react";
import "./Projects.css";
import quiz from "../../images/personality-quiz.png";

export default function Projects(){

    return(
        <div className = "projects">

            <div className="projects-heading">
                <h2>Projects</h2>
            </div>

            <div className="project-container">

                <div className="proj-card">

                    <div className = "proj-card-inner">

                        <div className = "proj-card-front">
                            <h1>Personality Quiz</h1>
                        </div>

                        <div className = "proj-card-back">
                            <div className = "back-content">
                                <img className = "quiz-images"src ={quiz}></img>
                                <p>
                                    I created a quiz that generates a color that represents a user's personality based on their answers to 
                                    a series of questions.
                                </p>
                                <a href = "https://tbhakhri.github.io/mentored_sp23_rampup_tanya/">Take a look!</a>
                            </div>
                            
                        </div>
            

                    </div>
                    
                </div>

            </div>

        </div>


    )
    
}
