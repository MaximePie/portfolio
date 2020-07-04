import React from 'react';
import flashcardstormImage from './images/flashcarstorm.png';
import educhubImage from './images/educhub.jpg';

import Project from './Project';

export default function ProjectsList() {
  return (
    <div className="ProjectsList">
      <Project
        title="Flashcardstorm"
        description={
          "Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !" +
          "Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !" +
          "Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer ! " +
          "Redécouvrez l'apprentissage avec cette appli révolutionnaire, vous allez adorer !"
        }
        applicationLink="https://flashcardstorm.herokuapp.com/"
        badge="La favorite"
        githubLink="https://github.com/MaximePie/Flashcardstorm"
        imagePath={flashcardstormImage}
      />
      <Project
        title="EducHub GIPSI"
        description={
          "Boîte à outils indispensable pour libérer son cerveau et se réconcillier avec l'éducation." +
          "Boîte à outils indispensable pour libérer son cerveau et se réconcillier avec l'éducation." +
          "Boîte à outils indispensable pour libérer son cerveau et se réconcillier avec l'éducation." +
          "Boîte à outils indispensable pour libérer son cerveau et se réconcillier avec l'éducation." +
          "Boîte à outils indispensable pour libérer son cerveau et se réconcillier avec l'éducation."
        }
        applicationLink="http://educhub.herokuapp.com/"
        badge="La révolutionnaire"
        githubLink="https://github.com/MaximePie/GIPSI"
        imagePath={educhubImage}
      />
    </div>
  );
}
