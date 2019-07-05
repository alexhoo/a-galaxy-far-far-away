import { put } from 'redux-saga/effects'

import { successList, failureList } from 'Reducers/films'
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
