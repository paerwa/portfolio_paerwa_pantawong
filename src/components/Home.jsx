import React, { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import Typewriter from 'typewriter-effect';
import { ArrowTopRightOnSquareIcon,ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import About from './About'
import PortfolioSection from "./PortfolioSection";
import Contact from "./Contact";
import '../styles/Home.css';

const Home = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = { threshold: 0.6 }; 

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navLinks = ['home', 'about', 'portfolio', 'contact'];

    return (
        <div className="home-container">
            <div className="home-glow"></div>
            
            <nav className="navbar">
                <div className="logo">PORTFOLIO</div>

                <div className="nav-desktop">
                    {navLinks.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`nav-item ${activeSection === item ? 'active' : ''}`}
                        >
                            {item === 'about' ? 'About Me' : item === 'skill' ? 'Skills' : item === 'portfolio' ? 'Portfolio' : item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>

                <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                </button>

                <div className={`nav-mobile ${isMenuOpen ? 'show' : ''}`}>
                    {navLinks.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`nav-item-mobile ${activeSection === item ? 'active' : ''}`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
            </nav>

            <section id="home" className="hero-section">
                <main className="hero-content-wrapper">
                    <div className="hero-text-area"> 
                        <div className="badge">✨ Ready to Innovate</div>
                        
                        <h1 className="text1">
                            Full-stack <br/>
                            <span className="text2">Developer</span> 
                        </h1>

                        <div className="typewriter-container">
                            <Typewriter
                                options={{
                                    strings: ['Digital Business Student', 'Eager to Learn New Tech', 'Solution Oriented Developer'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80,
                                }}
                            />
                        </div>
                        
                        <p className="text3">
                            Menciptakan Website Yang Inovatif, Fungsional,<br className="hidden md:block"/>
                            dan User-Friendly untuk Solusi Digital.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-project" onClick={() => scrollToSection('portfolio')}> Projects 
                                <ArrowTopRightOnSquareIcon className="arrowup"></ArrowTopRightOnSquareIcon> </button>

                            <button 
                                className="btn-contact" 
                                onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/Resume (1).pdf'; 
                                link.download = 'Resume_Paerwa_Pantawong.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            >
                            download resume 
                            <ArrowDownTrayIcon className="arrowdown" />
                            </button>

                        </div>

                    </div> 

                    <div className="hero-animation">
                        <DotLottieReact
                            src="https://lottie.host/fb613d27-d2c4-4a64-8f60-63ffcf1aed13/Od05mcJa6p.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </main> 
            </section>

            <section id="about">
                <About />
            </section>

            <section id="portfolio">
                <PortfolioSection />
            </section>

            <section id="contact" className="section-placeholder">
                <Contact/>
            </section>
        </div> 
    );
};

export default Home;