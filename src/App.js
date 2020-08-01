import React from 'react';
import './scss/_scss.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { viewportContext } from './contexts/viewport'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ProjectsList from "./ProjectsList"
import ContactPage from "./components/pages/ContactPage"
import Navigation from "./Navigation"
import HomePage from "./HomePage"

function Home() {
  AOS.init();

  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const [isMobile, setMobileStatus] = React.useState(viewportWidth < 1000);


  window.onresize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    console.log(viewportWidth);
    setMobileStatus(viewportWidth < 1000)
  };

  return (
    <viewportContext.Provider value={isMobile}>
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
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </viewportContext.Provider>
  );
}


export default Home;
