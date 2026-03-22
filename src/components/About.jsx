import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import ProfileImg from "../picture/profile.jpg";
import "../styles/About.css";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="text-header">
          <h2 className="title">About Me</h2>
          <div className="title-1">
            ✨Transforming ideas into digital experiences✨
          </div>
        </div>

        <div className="info-wrapper">

          <div className="info-text">
            <h3 className="info-text1">Hello, I'm</h3>
            <h3 className="info-text2">Paerwa Pantawong</h3>
            <p className="info-text3">
              A recent graduate in Digital Business from the Faculty of Information and Communication Technology, with a strong interest in full-stack development. Passionate about building responsive and user-friendly web applications that meet both business and user needs.
            </p>
          </div>

          <div className="profile-wrapper">
            <div className="glow-ring"></div>
            <img src={ProfileImg} className="profile-circle-img" />
          </div>

        </div>

        <div className="contact-wrapper">

          <div className="contact-card">
            <EnvelopeIcon className="icon" />
            <p className="contact-text">paerwapantwong@gmail.com</p>
          </div>

          <div className="contact-card">
            <PhoneIcon className="icon" />
            <p className="contact-text">061-607-3426</p>
          </div>

        </div>

      </div>
      
    </section>

    
  );
};

export default About;