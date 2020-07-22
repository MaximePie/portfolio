import React from 'react';
import Collapsible from "react-collapsible";
import {viewportContext} from "./contexts/viewport";
import Button from './components/atoms/Button';

export default function Project(props) {

  const isMobile = React.useContext(viewportContext);

  const {title, description, imagePath, githubLink, applicationLink, badge, isPreview} = props;

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
        {isMobile && (
          <Collapsible
            trigger={isCollapsed ? "Replier" : "Afficher des détails"}
            onOpening={() => {
              setCollapseStatus(true)
            }}
            onClosing={() => {
              setCollapseStatus(false)
            }}
          >
            <div className="Project__description">
              {description.map(descriptionLine => {
                return <p className="Project__description-element">{descriptionLine}</p>
              })}
            </div>
          </Collapsible>
        )}
        {!isMobile && (
          <div className="Project__description">
            {description.map(descriptionLine => {
              return <p className="Project__description-element">{descriptionLine}</p>
            })}
          </div>
        )}
        <div className="Project__actions">
          {applicationLink && (
            <Button
              href={applicationLink}
              className="Project__action"
              icon="search"
              text="Découvrir"
            />
          )}
          {githubLink && (
            <Button
              href={githubLink}
              className="Project__action"
              icon="github-alt"
              text="Code source"
              variant="secondary"
              isFabIcon
            />
          )}
          {isPreview && (
            <Button
              icon="pen"
              text="Me contacter"
              href={"/contact"}
            />
          )}
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
          {isPreview && (
            <a href={"/contact"} className="Project__image-action Project__image-action--preview">
              <i className="fas fa-play Project__image-action-icon"/>
              Me contacter
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
