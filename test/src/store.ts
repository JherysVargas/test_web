import { createStore, combineReducers } from 'redux'

import { home } from './reducers/'

const reducers = { home }

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer)

export { store }