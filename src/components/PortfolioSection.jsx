import { useState } from "react";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Techstack from "./Techstack";
import { AcademicCapIcon, TrophyIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState("projects");

    const tabs = [
        { 
            id: "projects", 
            label: "Projects", 
            icon: AcademicCapIcon 
        },
        { 
            id: "certificates", 
            label: "Certificates", 
            icon: TrophyIcon
        },
        { 
            id: "tech", 
            label: "Tech Stack", 
            icon: ComputerDesktopIcon 
        },
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-title">
                    Portfolio Showcase
                </h2>
                <p className="portfolio-subtitle">
                    ✨ Explore my journey through projects, certifications, and technical expertise. ✨
                </p>
            </div>

            <div className="tab-container">
                {tabs.map((tab) => {
                    const Icon = tab.icon; 
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`tab-btn ${
                                activeTab === tab.id ? "tab-active" : "tab-inactive"
                            }`}
                        >
                            <Icon className="tab-icon" />
                            <span className="label">
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-500">
                {activeTab === "projects" && <Projects />}
                {activeTab === "certificates" && <Certificates />}
                {activeTab === "tech" && <Techstack/>}
            </div>
        </section>
    );
};

export default PortfolioSection;