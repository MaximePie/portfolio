import React from 'react';
import projectsImage from './images/projects.png'
import coursesImage from './images/courses.jpg'
import skillsImage from './images/skills.jpg'
import HomePageSection from './components/molecules/HomePageSection';

import { viewportContext } from './contexts/viewport';

export default function HomePage() {
  const isMobile = React.useContext(viewportContext);

  return (
    <div className="HomePage">
      <HomePageSection
        redirectPath="/myProjects"
        title="Mes projets"
        illustrationPath={projectsImage}
        text="Découvrez mes créations"
      />
      <HomePageSection
        redirectPath="/myCourses"
        title="Mes formations"
        illustrationPath={coursesImage}
        text="Découvrez les formations que je donne"
        isInverted={!isMobile}
      />
      <HomePageSection
        redirectPath="/mySkills"
        title="Mes compétences"
        illustrationPath={skillsImage}
        text="Consultez mes compétences"
      />
      <HomePageSection
        redirectPath="/aboutMe"
        text="Qui suis-je ?"
        isInverted={!isMobile}
        variant="selfPresentation"
      />
    </div>
  );
}
