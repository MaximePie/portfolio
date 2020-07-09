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
        <div className="Home__header">
          <h1
            className="Home__title"
          >
            <a href="/" className="Home__title-link">
              Maxime Pie - <span className="Home__title-side-text">Créateur</span>
            </a>
          </h1>
          <Navigation history={Router}/>
        </div>
        <Switch>
          <Route path="/myProjects">
            <ProjectsList/>
          </Route>
          <Route path="/myCourses">
            <CoursesList/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
