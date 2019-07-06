import { combineReducers } from 'redux'

const reducers = combineReducers({
    [require('./films').slice]:  require('./films').reducer,
    [require('./people').slice]: require('./people').reducer,

})

export default reducers;