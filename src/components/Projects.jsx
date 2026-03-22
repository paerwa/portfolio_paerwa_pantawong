import React from "react";
import "../styles/Project.css";
import CatImg from "../picture/cat.png"
import Pipeline from "../picture/pipeline.png"
import UxUi from "../picture/uxui.png"
import { useNavigate } from "react-router-dom";
import { ArrowTopRightOnSquareIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";


const Projects = () => {
  const navigate = useNavigate();
  const projectList = [
    {
      id: 1,
      title: "Cat Breeding Matchmaking App", 
      fullTitle: "A Multi-Criteria Decision-Making Approach for Cat Breeding Matchmaking Using AHP and the Gale – Shapley Algorithm",
      description: "Developed a cross-platform mobile app using React Native to match compatible cats. Published in IEEE.",
      tags: ["React Native", "Algorithm", "MySQL"],
      link: "https://ieeexplore.ieee.org/abstract/document/11145830",
      isFeatured: true,
      image: CatImg
    },
    {
      id: 2,
      title: "Data ETL Pipeline Automation",
      subtitle: "Internship at Wealth Management System Limited",
      description: "Built automated ETL pipelines using Apache Airflow and Python to manage financial datasets.",
      tags: ["Airflow", "PostgreSQL", "Python"],
      link: "#",
      isFeatured: false,
      image: Pipeline
    },
    {
      id: 3,
      title: "Furniture E-Commerce UX/UI",
      subtitle: "User-friendly Interface Design",
      description: "Created high-fidelity prototypes and user flows for a seamless online shopping experience.",
      tags: ["XD", "UX/UI", "Prototype"],
      link: "#",
      isFeatured: false,
      image: UxUi
    }
  ];

  return (
    <div className="projects-grid">
      {projectList.map((project) => (
        <div key={project.id} className="project-card">

          <div className="project-image-container">
            <img src={project.image} alt={project.title} className="project-image" />
            {project.isFeatured && (
              <span className="featured-badge">🌟 IEEE Published</span>
            )}
          </div>

          <div className="project-content">
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-actions">

              {project.id === 1 && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-ieee"
                >
                  View IEEE Paper
                  <ArrowTopRightOnSquareIcon className="icon-top"/>
                </a>
              )
              }

              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="btn-details"
              >
              View Details
              <ArrowLongRightIcon className="icon-arrow" />
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;