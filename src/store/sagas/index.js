import { all, takeLatest } from 'redux-saga/effects'

export default function * () {
  yield all([
    takeLatest(
      require('Reducers/films').requestList.type,
      require('./films').getFilms
    ),
    takeLatest(
      require('Reducers/films').requestDetail.type,
      require('./films').getFilmDetail
    ),
    takeLatest(
      require('Reducers/people').requestList.type,
      require('./people').getPeople
    ),	
	])
}