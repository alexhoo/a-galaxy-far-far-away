/* Global imports */
import React from 'react'
import { HashRouter as Router, Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

/* Local imports */
import Main from './Main'

/* Component definition */
const Root = (props) => (
	<Router>
		<Route path="/" exact component={Main} />
	</Router>
)

/* PropTypes */
Root.propTypes = {}
Root.defaultProps = {}

/* Local utility functions */

/* Styles */

export default Root

