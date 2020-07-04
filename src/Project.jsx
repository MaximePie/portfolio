import React from 'react';
import flashcardstormImage from './images/flashcarstorm.png';

export default function Project() {
  return (
    <div className="Project">
      <div className="Project__details">
        <h1 className="Project__title">
          Flashcardstorm
          <span className="Project__title-badge">
            <i className="fas fa-star Project__title-badge-icon"></i>
            La favorite
          </span>
        </h1>
        <p className="Project__description">
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
        </p>
        <div className="Project__actions">
          <a href="https://flashcardstorm.herokuapp.com/" className="Project__action"> Découvrez l'application</a>
          <a
            href="https://github.com/MaximePie/Flashcardstorm"
            className="Project__action Project__action--secondary"
          >
            Code source
          </a>
        </div>
      </div>
      <div className="Project__image-container">
        <div className="Project__image-action-container">
          <a href="https://flashcardstorm.herokuapp.com/" className="Project__image-action">
            <i className="fas fa-question-circle Project__image-action-icon"/>
            Découvrir
          </a>
        </div>
        <img src={flashcardstormImage} alt="Image de présentation de Flashcardstorm" className="Project__image"/>
      </div>
    </div>
  );
}
