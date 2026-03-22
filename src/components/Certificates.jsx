import React from "react";
import { AcademicCapIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import "../styles/Certificates.css";
import IEEE from "../picture/ieee.png";
import Cisco from "../picture/cisco.png";
import AI from "../picture/ai.png";
import Governan from "../picture/gover.png";
import Statistics from "../picture/statistics.png";
import presentation1 from "../picture/p2.png";
import presentation2 from "../picture/p1.png";
import presentation3 from "../picture/p3.png";



const Certificates = () => {
  const certList = [
    {
      id: 1,
      title: "6th International Conference on Big Data Analytics and Practices (IBDAP) ",
      issuer: "IBDAP 2025 is now published in IEEE Xplore",
      date: "2025",
      image: IEEE, 
      link: "#"
    },
    {
      id: 2,
      title: "Cisco Networking Academy program",
      issuer: "Courses - University of Phayao",
      date: "2025",
      image: Cisco,
      link: "#"
    },
    {
      id: 3,
      title: "AI Tools for Tourism",
      issuer: "Google",
      date: "2025",
      image: AI,
      link: "#"
    },
    {
      id:4,
      title:"Data Governance Essentials",
      issuer:"Google",
      date:"2025",
      image: Governan ,
      link: "#"
    },
    {
      id:5,
      title:"How to read statistics as a PRO",
      issuer:"Google",
      date:"2025",
      image: Statistics,
      link: "#"
    },
    {
      id:6,
      title:"ผลการเรียนดีเด่น",
      issuer:"University of Phayao",
      date:"2023",
      image: presentation2,
      link: "#"
    },
    {
      id:7,
      title:"ผลการเรียนดีเด่น",
      issuer:"University of Phayao",
      date:"2023",
      image: presentation1,
      link: "#"
    },
    {
      id:8,
      title:"ผลการเรียนดีเด่น",
      issuer:"University of Phayao",
      date:"2023",
      image: presentation3,
      link: "#"
    },
    
    
  ];

  return (
    <div className="cer-section">

      <div className="cert-grid">
        {certList.map((cert) => (
          <div key={cert.id} className="cert-card-group">
            
            <div className="pic">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="pic-1"
              />
            </div>

            {/* ข้อมูลใบเซอร์ */}
            <div className="cert">
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                {cert.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{cert.issuer}</span>
                <span className="bg-gray-800 px-2 py-0.5 rounded text-[10px] text-gray-300">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;