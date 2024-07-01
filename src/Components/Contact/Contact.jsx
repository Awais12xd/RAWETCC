import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css'
function Contact() {
    return (
        <>
             <section className="contact" id="contact">
        <div className="max-width">
            <div className="title contact-head">Contact Me</div>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit temporibus dolor, ratione, quas maiores expedita vitae odit pariatur ad ipsa ut id explicabo enim officiis asperiores accusantium voluptatum possimus?</p>
                    <div className="info">
                        <div className="icon"><i className="fa-solid fa-user"></i></div>
                        <div className="info-content">
                            <div className="cont1">Name</div>
                            <div className="cont2">Awais Ali</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                        <div className="info-content">
                            <div className="cont1">Address</div>
                            <div className="cont2">Lahore,Pakistan</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                        <div className="info-content">
                            <div className="cont1">Email</div>
                            <div className="cont2">abc@gmail.com</div>
                        </div>
                    </div>

                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field two">
                            <div className="name">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="email">
                                <input type="email" placeholder="Email" />
                            </div>
                        </div>
                            <div className="field">
                                <input type="text" placeholder="Subject" />
                            
                            </div>
                            <div className="field">
                            <textarea  placeholder="Describe project..."></textarea></div>
                            <div className="submit-btn">
                                <Link> Send Message</Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
     </section> 
        </>
    );
}

export default Contact;