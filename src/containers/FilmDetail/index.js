/* Global imports */
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "crocks";

/* Local imports */
import {
  getCurrent as getCurrentFilmDetail,
  requestDetail as requestFilmDetail,
  getFetching as getCurrentFilmDetailLoading,
} from "Reducers/films";
import {
  addItem as addVisit,
} from "Reducers/visits";
import FilmDetail from "./FilmDetail.jsx";

/* Local utility functions */

const mapStateToProps = state => ({
  filmDetail: getCurrentFilmDetail(state),
  loading:    getCurrentFilmDetailLoading(state),
})

const mapDispatchToProps = dispatch => ({
  getFilmById: id => dispatch(requestFilmDetail(id)),
  addVisit: url => dispatch(addVisit(url))
});
/* Styles */

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(FilmDetail);
