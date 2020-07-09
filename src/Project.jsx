import React from 'react';

export default function Project(props) {

  const { title, description, imagePath, githubLink, applicationLink, badge } = props;

  return (
    <div className="Project" data-aos="fade-up">
      <div className="Project__details">
        <h1 className="Project__title">
          {title}
          <span className="Project__title-badge">
            <i className="fas fa-star Project__title-badge-icon"></i>
            {badge}
          </span>
        </h1>
        <div className="Project__description">
          {description.map(descriptionLine => {
            return <p className="Project__description-element">{descriptionLine}</p>
          })}
        </div>
        <div className="Project__actions">
          {applicationLink && (
            <a href={applicationLink} className="Project__action">
              <i className="fas fa-search Project__action-icon"/>
              Découvrir
            </a>
          )}
          <a
            href={githubLink}
            className="Project__action Project__action--secondary"
          >
            <i className="fab fa-github-alt Project__action-icon"/>
            Code source
          </a>
        </div>
      </div>
      <div className="Project__image-container">
        <div className="Project__image-action-container">
          {applicationLink && (
            <a href={applicationLink} className="Project__image-action">
              <i className="fas fa-question-circle Project__image-action-icon"/>
              Découvrir l'application
            </a>
          )}
        </div>
        <img
          src={imagePath}
          alt={"Image de présentation de " + title}
          className={"Project__image " + (!applicationLink && "Project__image--no-link")}
        />
      </div>
    </div>
  );
}
