import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  locaGrams: require('./locaGrams').default
})

export default rootReducer
