import React from 'react';
import './scss/_scss.scss';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ProjectsList from "./ProjectsList"
import CoursesList from "./CoursesList"
import Navigation from "./Navigation"

function Home() {
  return (
    <Router>
      <div className="Home">
        <h1 className="Home__title">Maxime Pie - <span className="Home__title-side-text">Créateur</span></h1>
        <Navigation history={Router}/>
        <Switch>
          <Route path="/myProjects">
            <ProjectsList/>
          </Route>
          <Route path="/myCourses">
            <CoursesList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
