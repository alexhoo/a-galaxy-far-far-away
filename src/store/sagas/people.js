import { put, select } from "redux-saga/effects";
import { failureList, successList, getList as getPeopleList } from "Reducers/people";
import create from "Services/api";

const api = create("people");

export function* getPeople() {
  try {

    const selectedPeople = yield select(getPeopleList)
    
    if (selectedPeople && selectedPeople.length > 0) {
      yield put(successList(selectedPeople)) 
      
    } else {

      const response = yield api.getAll({});
      
      if (response.ok) {
        
        const { results } = response.data;
        
        yield put(successList(results));
      } else {
        yield put(failureList(response.originalError));
      }
    } 


  } catch (e) {
    yield put(failureList(e));
  }
}
