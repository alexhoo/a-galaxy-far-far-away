import { put } from 'redux-saga/effects'

import { 
    failureDetail,
    failureList,
    successDetail,
    successList, 
 } from 'Reducers/films'
import create from 'Services/api'

const api = create('films')

export function * getFilms({ payload = {} }) {
    const { search } = payload

    try {
        const response = yield api.getAll({ search })

        if (response.ok) {
            const { results } = response.data
            yield put(successList(results))
        } else {
            yield put(failureList(response.originalError))
        }

    } catch (e) {
        yield put(failureList(e))
    }
}

export function * getFilmDetail({ payload: id }) {
    try {
      const response = yield api.getOne(id, { })
  
      if (response.ok) {
        const { data } = response
        yield put(successDetail(data))
      } else {
        yield put(failureDetail(response.originalError))
      }
    } catch (e) {
      yield put(failureDetail(e))
    }
  }