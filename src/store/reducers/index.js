import { combineReducers } from 'redux'

const reducers = combineReducers({
    [require('./films').slice]:  require('./films').reducer,
    [require('./people').slice]: require('./people').reducer,
    [require('./visits').slice]: require('./visits').reducer,
})

export default reducers;