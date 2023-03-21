import React from "react";
import "./Home.css";
import imageofme from "../../images/IMG_OF_ME.png";

export default function Home(){
    return(
        <div className = "homeholder">
            
            <div className= "textholder">
            
                <div className = "title">
                    <h1>Hi! I'm Tanya.</h1>
                </div>
                
                <div className = "description">
                    I'm a <span>computer science</span> and <span>cognitive science major</span> at UC Berkeley.
                </div>
            
            </div>

            <div className = "picofme">
                <img className="me" src={imageofme} id="imgofme"></img>
            </div>


        </div>
    
    )

}