import React from "react";

const TechStack = () => {
  const techStacks = [
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, 
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Apache Airflow", icon: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  ];

  return (
    <section className="w-full bg-[#030014] px-6 pt-4 pb-16 relative overflow-hidden flex flex-col items-center">
      
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none -z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {techStacks.map((tech, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0e0a2b]/60 border border-purple-500/20 backdrop-blur-lg transition-all duration-300 hover:bg-[#150f3d]/80 hover:border-purple-400/60 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer"
            >
              
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" 
                />
              </div>

              <span className="relative z-10 text-gray-300 group-hover:text-white font-medium text-xs md:text-sm tracking-wide text-center transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;