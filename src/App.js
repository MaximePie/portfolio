import React from 'react';
import './scss/_scss.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ProjectsList from "./ProjectsList"
import CoursesList from "./CoursesList"
import Navigation from "./Navigation"
import HomePage from "./HomePage"

function Home() {
  AOS.init();
  return (
    <Router>
      <div className="Home">
        <h1
          className={"Home__title " + (document.location.pathname === '/' ? 'Home__title--delayed' : '')}
        >
          <a href="/home" className="Home__title-link">
            Maxime Pie - <span className="Home__title-side-text">Créateur</span>
          </a>
        </h1>
        {document.location.pathname === '/' && (
          <div className="Home__title--hero-container">
            <h1 className="Home__title Home__title--hero">
              Maxime Pie - <span className="Home__title-side-text">Créateur</span>
              <div className="Home__title--hero-hide"/>
            </h1>
          </div>
        )}
        <Navigation history={Router}/>
        <Switch>
          <Route path="/myProjects">
            <ProjectsList/>
          </Route>
          <Route path="/myCourses">
            <CoursesList/>
          </Route>
          <Route path={["/home", "/"]}>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
