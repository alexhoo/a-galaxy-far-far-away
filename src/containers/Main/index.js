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
import Main from './Main.jsx'

/* Local utility functions */

const mapStateToProps = state => ({
	films: 	 getFilmList(state),
	loading: getFilmListFetching(state),
})

const mapDispatchToProps = (dispatch) => ({
	getFilms: (params) => dispatch(requestFilmsList(params)),
})
/* Styles */

const enhance = compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(Main);
