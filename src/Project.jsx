import React from 'react';
import flashcardstormImage from './images/flashcarstorm.png';

export default function Project() {
  return (
    <div className="Project">
      <div className="Project__details">
        <h1 className="Project__title">Flashcardstorm</h1>
        <p className="Project__description">
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
          Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !
        </p>
      </div>
      <img src={flashcardstormImage} alt="Image de présentation de Flashcardstorm" className="Project__image"/>
    </div>
  );
}
