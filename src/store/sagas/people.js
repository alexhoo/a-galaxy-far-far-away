import { put } from "redux-saga/effects";
import { failureList, successList } from "Reducers/people";
import create from "Services/api";

const api = create("people");

export function* getPeople() {
  try {

    const response = yield api.getAll({});

    if (response.ok) {
      const { results } = response.data;
      yield put(successList(results));
    } else {
      yield put(failureList(response.originalError));
    }
  } catch (e) {
    yield put(failureList(e));
  }
}
