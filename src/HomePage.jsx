import React from 'react';
import projectsImage from './images/projects.png'
import coursesImage from './images/courses.jpg'
import skillsImage from './images/skills.jpg'
import HomePageSection from './components/molecules/HomePageSection';

export default function HomePage() {

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
        isInverted
      />
      <HomePageSection
        redirectPath="/mySkills"
        title="Mes compétences"
        illustrationPath={skillsImage}
        text="Consultez mes compétences"
      />
      <HomePageSection
        redirectPath="/myProjects"
        title="Mes projets"
        illustrationPath={projectsImage}
        text="Découvrez mes créations"
        isInverted
      />
    </div>
  );
}
