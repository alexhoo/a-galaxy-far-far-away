/* Global imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Segment } from 'semantic-ui-react';

/* Local imports */

/* Component definition */
const Main = props => {
console.log("TCL: props", props)
	return (
	<Grid container columns="3">
		<Grid.Column>
			<Segment>1</Segment>
		</Grid.Column>
		<Grid.Column width={8}>
			<Segment>2</Segment>
		</Grid.Column>
		<Grid.Column>
			<Segment>3</Segment>
		</Grid.Column>
	</Grid>
)
};
/* PropTypes */
Main.propTypes = {}
Main.defaultProps = {}

/* Local utility functions */

/* Styles */

export default Main