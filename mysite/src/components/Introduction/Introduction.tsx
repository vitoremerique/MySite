import React from 'react';
import './Introduction.css';
import foto from "../../img/profile.jpeg"
const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="introduction">
      <div className="intro-content">
        <h1>
          {`{ Hello, I am `}

          <span className="highlight">Vitor Emerique</span>
          {` };`}
        </h1>
        <p>Welcome to my portfolio website!</p>
      </div>
      <div className="intro-photo">
        <img
          src={foto}
          alt="Vitor Emerique"
          className="profile-photo"
        />
      </div>
      
    </section>
  );
};

export default Introduction;
