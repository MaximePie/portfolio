import React from 'react';
import projectsImage from './images/projects.png'
import Particles from "react-particles-js";
import {bubbleParticles} from './particles';

export default function HomePage() {

  return (
    <div className="HomePage">
      <div className="HomePage__section">
        <div className="HomePage__section-illustration">
          <img src={projectsImage} alt="Image d'illustration" className="HomePage__section-illustration-image"/>
          <h2 className="HomePage__section-illustration-title">
            <a href="/myProjects" className="HomePage__section-illustration-link">
              Mes projets
            </a>
          </h2>
          <Particles
            className="HomePage__section-illustration-particles"
            params={bubbleParticles} />
        </div>
        <div className="HomePage__section-details">
          <p className="HomePage__section-details-text">Découvrez mes projets</p>
          <a href="/myProjects" className="HomePage__section-details-link">
            <i className="fas fa-search HomePage__section-details-link-icon"/>
            Explorer
          </a>
        </div>
      </div>
    </div>
  );
}
