import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Detail.css"
import { 
  ArrowLeftIcon, 
  CodeBracketIcon, 
  GlobeAltIcon, 
  StarIcon,
  CubeIcon 
} from "@heroicons/react/24/outline";
import Cat from "../picture/cat.png";
import Cat2 from "../picture/cat2.png";
import Figma from "../picture/figmacat.png";
import Data from "../picture/data.png";
import Data2 from "../picture/data-2.png";
import Data3 from "../picture/data-3.png";
import UxUi from "../picture/uxui.png"
import company from "../picture/company.png"
import company_1 from "../picture/company-2.png";
import line from "../picture/line.png";
import line_2 from "../picture/line_2.png";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = {
    1: {
      title: "Cat Breeding Matchmaking App",
      description: "A cross-platform mobile application that leverages the Gale–Shapley Stable Matching Algorithm to optimize cat breeding pairings. This project was published as an IEEE Conference Paper and indexed in Google Scholar.",
      technologies: ["React Native", "Algorithm", "MySQL", "Figma"],
      features: [
        "Stable Matching Algorithm: Implemented the Gale–Shapley algorithm to ensure optimal and stable pairing results.",
        "Cross-Platform Development: Built with React Native to provide a seamless user experience across iOS and Android.",
        "Relational Data Management: Engineered a robust MySQL database architecture to securely manage complex matching data.",
        "User-Centric Design: Developed high-fidelity UX/UI prototypes in Figma, focusing on intuitive navigation."
      ],
      images: [Cat, Cat2,Figma], 
    },
2: {
    title: "Data ETL Pipeline Automation",
    description: "Developed and maintained data-driven systems by building automated ETL pipelines using Apache Airflow, integrating data from multiple sources into PostgreSQL. Processed and validated datasets using Python and SQL to ensure accuracy and reliability, while supporting data workflows and enabling efficient data utilization for application features and reporting.",
    technologies: ["SQL", "PostgreSQL","Apache Airflow" , " Apache Superset","Python"],
    features: [
      "Developed automated ETL pipelines using Apache Airflow to deliver reliable data",
      "Transformed and validated datasets using Python and SQL, ensuring high data quality for user-facing features and dashboards.",
      "Managed and queried relational databases (PostgreSQL, SQL Server) to support data-driven"
    ],
    images: [Data,Data3, Data2], 
    liveLink: "#",
    githubLink: "#"
  },
3: {
    title: "Furniture E-Commerce UX/UI",
    description: "Designed and developed a user-friendly interface for an online furniture store, focusing on intuitive navigation and seamless user experience. Created wireframes, user flows, and high-fidelity prototypes to optimize product browsing and checkout processes, improving usability and overall customer journey.",
    technologies: ["Figma", "Canva"],
    features: [
      "Designed and prototyped a user-friendly interface for an online furniture store, enhancing usability and navigation.",
      "Created wireframes, user flows, and high-fidelity prototypes using Figma to improve product browsing and checkout experience.",
      "Optimized user experience by simplifying navigation and streamlining the online shopping journey."
    ],
    images: [UxUi, company,company_1], 
    liveLink: "#",
    githubLink: "#"
  },
  4: {
      title: "LINE Stickers Design & Creator",
      description: "Designed, illustrated, and published custom character sticker collections on the LINE Creators Market. Focused on expressive visual communication, character consistency, and digital asset commercialization to engage daily chat users.",
      technologies: ["Procreate"],
      features: [
        "Character Conception & Storyboarding: Created unique, relatable character themes tailored for daily messaging.",
        "Graphic & Asset Production: Produced high-resolution digital illustrations optimized to meet LINE Creator Market formatting guidelines (PNG transparencies, specific dimensions).",
        "Commercial Release & Publishing: Successfully submitted, passed review guidelines, and published sticker sets on the official LINE Store for monetization."
      ],
      images: [line,line_2],
      liveLink: "#",
      githubLink: "#"
    }
  };

  const project = projectData[id] || projectData[1];

  return (
    <div className="detail-section">
      <nav className="b-1">
        <button onClick={() => navigate(-1)} className="b-2">
          <ArrowLeftIcon className="back" /> Back
        </button>
        <div className="flex items-center gap-2 ml-2">
          <span className="span" onClick={() => navigate('/')}>Projects</span>
          <span className="span-1">&gt;</span>
          <span className="span-2 text-purple-400">{project.title}</span>
        </div>
      </nav>

      <div className="detail-grid">
  
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="D-text">{project.title}</h1>
              <div className="line"></div>
            </div>
            <p className="description">{project.description}</p>
          </div>

          <div className="space-y-6">
            <h3 className="D-text2">
              <CodeBracketIcon className="code" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-1">
                  <CubeIcon className="cube" />
                  <span className="cube-1">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="star">
              <StarIcon className="star-1" />
            </div>
            
            <h3 className="key">
              <StarIcon className="w-7 h-7 text-yellow-400 fill-yellow-400/20 " />
              Key Features
            </h3>
            
            <ul className="space-y-6">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 group/item">
                  <div className="mt-2.5">
                    <div className="point"></div>
                  </div>
                  <span className="D-text3
}">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-8">
            {project.images.map((img, index) => (
              <div key={index} className="relative group">
                <div className="img-cat"></div>
                <div className="img-cat1">
                  <img 
                    src={img} 
                    alt={`Showcase ${index + 1}`} 
                    className="img-cat3" 
                  />
                </div>
              </div>
            ))}
          </div>

          
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;