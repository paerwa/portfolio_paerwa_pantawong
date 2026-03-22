import React from 'react';
import '../styles/Splash.css'; 

const SplashScreen = ({ isExiting }) => {
  return (
    <div className="splash-container">
      <div className={`flex flex-col items-center justify-center transition-all ${isExiting ? 'fade-out-all' : ''}`}>
        
        <div className="splash-glow"></div>

        <div className="flex space-x-6 mb-10 animate-bounce">
          <div className="icon-circle">&lt;/&gt;</div>
          <div className="icon-circle">👤</div>
          <div className="icon-circle">🐙</div>
        </div>

        <div className="text-center px-4">
          <h1 className="splash-title fade-in-text">Welcome To My</h1>
          <h2 className="gradient-text fade-in-text delay-text">Portfolio Website</h2>
        </div>

        <div className="splash-link">
          🌐 Portfolio.com
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;