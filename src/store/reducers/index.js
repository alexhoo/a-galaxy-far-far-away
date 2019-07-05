import { combineReducers } from 'redux'
const reducers = combineReducers({
    [require('./films').slice]: require('./films').reducer,
})

export default reducers;