/* Global imports */
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// import PropTypes from 'prop-types'
//import { AnimatedSwitch as Switch } from "react-router-transition";

/* Local imports */
import Main from "./Main";
import FilmDetail from "./FilmDetail";

/* Component definition */
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/detail/:id" component={FilmDetail} />
    </Switch>
  </Router>
);

/* PropTypes */
Root.propTypes = {};
Root.defaultProps = {};

/* Local utility functions */

/* Styles */

export default Root;
