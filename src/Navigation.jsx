import React from 'react';
import {Link, useLocation} from "react-router-dom";

export default function Navigation(props) {

  /**
   * Savoir si le lien est sélectionné.
   * Quand on clique, il faut dire au composant quel lien est sélectionné.
   * La différence est l'url.
   */

  const { pathname } = useLocation();

  const [selectedPath, setSelectedPath] = React.useState(pathname);

  return (
    <div className="Navigation">
      <Link
        to="/myProjects"
        className={"Navigation__link " + (selectedPath === '/myProjects' ? "Navigation__link--selected" : "")}
        onClick={() => {setSelectedPath('/myProjects')}}
      >
        Mes projets
      </Link>
      <Link
        to="/myCourses"
        className={"Navigation__link " + (selectedPath === '/myCourses' ? "Navigation__link--selected" : "")}
        onClick={() => {setSelectedPath('/myCourses')}}
      >
        Mes formations
      </Link>
    </div>
  );
}
