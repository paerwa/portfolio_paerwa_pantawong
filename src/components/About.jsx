import React from "react";
import { EnvelopeIcon, PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import ProfileImg from "../picture/profile.jpg";
import "../styles/About.css";

const About = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      const offset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const skills = ["React", "Node.js", "Python", "Apache Airflow"];

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

            {/* ส่วน Skill Badges */}
            <div className="flex flex-wrap gap-2.5 my-5">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-1.5 rounded-full bg-[#1b143a] text-purple-200 border border-purple-500/20 text-xs sm:text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* ปุ่ม Get in touch */}
            <button 
              onClick={scrollToContact} 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-indigo-500/40 text-white text-sm font-semibold hover:bg-indigo-600/20 transition-all duration-300 shadow-md cursor-pointer mt-2"
            >
              Get in touch
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="profile-wrapper">
            <div className="glow-ring"></div>
            <img src={ProfileImg} alt="Profile" className="profile-circle-img" />
          </div>

        </div>


      </div>
    </section>
  );
};

export default About;