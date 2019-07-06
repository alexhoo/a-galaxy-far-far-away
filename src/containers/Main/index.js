/* Global imports */
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'crocks'

/* Local imports */
import { 
	requestList as requestFilmsList,
	getList as getFilmList,
	getFetching as getFilmListFetching,
} from 'Reducers/films'

import { 
	requestList as requestPeopleList,
	getList as getPeopleList,
	getFetching as getPeopleListFetching,
} from 'Reducers/people'

import {
	getList as getVisitList
} from 'Reducers/visits'

import Main from './Main.jsx'

/* Local utility functions */

const mapStateToProps = state => ({
	films: 	       getFilmList(state),
	loading:       getFilmListFetching(state),
	loadingPeople: getPeopleListFetching(state),
	people:        getPeopleList(state),
	visits:        getVisitList(state)
})

const mapDispatchToProps = (dispatch) => ({
	getFilms:  (params) => dispatch(requestFilmsList(params)),
	getPeople: () => dispatch(requestPeopleList()),
})
/* Styles */

const enhance = compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(Main);
