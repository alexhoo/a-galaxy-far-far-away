/* Global imports */
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'crocks'

/* Local imports */

import {
	getList as getVisitList,
} from 'Reducers/visits'

import SideBarMenu from './SideBarMenu'

/* Local utility functions */

const mapStateToProps = state => ({
	visits: getVisitList(state),
})

/* Styles */

const enhance = compose(
	withRouter,
	connect(mapStateToProps)
)

export default enhance(SideBarMenu);
