import "./Contact.css";
import github from "../../images/github.png"
import email from "../../images/gmail.png"
import linkedin from "../../images/linkedin.png"

export default function Contact(){
    return(
        <div className = "contactholder">
            <div className ="contact-heading">
                <h2>Let's Connect!</h2>
                <p>I'd love to chat. Let's get in touch!</p>
            </div>
            <div className = "contacts">
                <p>
                    <a href="mailto:tanya.bhakhri@gmail.com">
                        <img src={email} className ="email"></img>
                    </a>
                </p>

                <p>
                    <a href="https://www.linkedin.com/in/tanya-bhakhri-6113ba248/">
                        <img src={linkedin} className ="linkedin"></img>
                    </a>
                </p>

                <p>
                    <a href="https://github.com/tbhakhri">
                        <img src={github} className ="github"></img>
                    </a>
                </p>
            </div>
            
        </div>
    )
}