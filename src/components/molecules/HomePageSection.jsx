import React from 'react';
import Particles from "react-particles-js";
import {bubbleParticles} from "../../particles";

export default function HomePageSection(props) {
  const {redirectPath, title, illustrationPath, text, isInverted} = props
  return (
    <div className={"HomePageSection " + (isInverted ? 'HomePageSection--inverted' : '')}>
      {!isInverted && (
        <>
          <div className="HomePageSection__illustration" data-aos="fade-up">
            <img src={illustrationPath} alt="Image d'illustration" className="HomePageSection__illustration-image"/>
            <h2 className="HomePageSection__illustration-title">
              <a href={redirectPath} className="HomePageSection__illustration-link">
                {title}
              </a>
            </h2>
            <Particles
              className="HomePageSection__illustration-particles"
              params={bubbleParticles} />
          </div>
          <div className="HomePageSection__details">
            <p className="HomePageSection__details-text">{text}</p>
            <a href={redirectPath} className="HomePageSection__details-link">
              <i className="fas fa-search HomePageSection__details-link-icon"/>
              Explorer
            </a>
          </div>
        </>
      )}
      {isInverted && (
        <>
          <div className="HomePageSection__details">
            <p className="HomePageSection__details-text">{text}</p>
            <a href={redirectPath} className="HomePageSection__details-link">
              <i className="fas fa-search HomePageSection__details-link-icon"/>
              Explorer
            </a>
          </div>
          <div className="HomePageSection__illustration" data-aos="fade-up">
            <img src={illustrationPath} alt="Image d'illustration" className="HomePageSection__illustration-image"/>
            <h2 className="HomePageSection__illustration-title">
              <a href={redirectPath} className="HomePageSection__illustration-link">
                {title}
              </a>
            </h2>
            <Particles
              className="HomePageSection__illustration-particles"
              params={bubbleParticles} />
          </div>
        </>
      )}
    </div>
  );
}