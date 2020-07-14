import React from 'react';
import Collapsible from "react-collapsible";

export default function Project(props) {

  const { title, description, imagePath, githubLink, applicationLink, badge } = props;

  const [isCollapsed, setCollapseStatus] = React.useState(false);

  return (
    <div className="Project" data-aos="fade-up">
      <div className="Project__details">
        <h1 className="Project__title">
          {title}
        </h1>
        <span className="Project__badge">
          <i className="fas fa-star Project__badge-icon"/>
          {badge}
        </span>
        <Collapsible
          trigger={isCollapsed ? "Replier" : "Afficher des détails"}
          onOpening={() => {setCollapseStatus(true)}}
          onClosing={() => {setCollapseStatus(false)}}
        >
          <div className="Project__description">
            {description.map(descriptionLine => {
              return <p className="Project__description-element">{descriptionLine}</p>
            })}
          </div>
        </Collapsible>
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
