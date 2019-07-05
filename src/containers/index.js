/* Global imports */
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
// import PropTypes from 'prop-types'

/* Local imports */
import Main from './Main'

/* Component definition */
const Root = () => (
	<Router>
		<Route path="/" exact component={Main} />
		{ /* <Route path="/film/:id" component={FilmDetail} /> */ }
	</Router>
)

/* PropTypes */
Root.propTypes = {}
Root.defaultProps = {}

/* Local utility functions */

/* Styles */

export default Root

