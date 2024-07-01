import React from 'react';
import './about.css'

function About() {
    return (
        <>
             <section className="about" id="about">
        <div className="max-width">
            <h1 className="about-head title">About us</h1>
            <div className="about-content">
              <div className="left column">
                <img src="./src/assets/profile-2.jpeg" alt="" />
              </div>
              <div className="right column">
              <div className="text">About over services <span>Raw</span></div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolorum assumenda nam ipsum repudiandae facere officiis distinctio, saepe illo cumque soluta impedit quaerat excepturi accusantium ratione. Doloremque vel perferendis iusto non eum similique amet quas provident tempora magni et dolores nemo eos inventore minus cum itaque ratione veritatis quam corrupti pariatur saepe illo, accusantium natus. Saepe sapiente inventore voluptas nobis cum harum voluptate, quaerat consectetur delectus eum, hic illum tempore!</p>
              <div className="CV">
                <a href="#">Download CV</a>
              </div>
              </div>
            </div>
        </div>
    </section> 
        </>
    );
}

export default About;