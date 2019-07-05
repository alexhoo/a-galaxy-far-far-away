/* Global imports */
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'crocks'

/* Local imports */
import Main from './Main'

/* Local utility functions */

const mapStateToProps = state => ({
	films: state.films
})

/* Styles */

const enhance = compose(
	withRouter,
	connect(mapStateToProps)
)

export default enhance(Main);
