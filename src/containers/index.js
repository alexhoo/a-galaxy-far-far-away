/* Global imports */
import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";

// import PropTypes from 'prop-types'

/* Local imports */
import Main from "./Main";
import FilmDetail from "./FilmDetail";

/* Component definition */
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/detail/:id" component={FilmDetail} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

/* PropTypes */
Root.propTypes = {};
Root.defaultProps = {};

/* Local utility functions */
const NoMatch = () => (
  <>
    <NonExistingRoute>
      <span>No Match!, are you lost ?</span>
	 <Link to="/"> Go Back!</Link>
    </NonExistingRoute>
  </>
);

/* Styles */

const NonExistingRoute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  span {
	  padding: 0px 5px;
  }
  a {
    display:block;
  }
`;

export default Root;
