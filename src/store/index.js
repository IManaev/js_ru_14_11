import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import idGenerator from '../middlewares/idGenerator'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = applyMiddleware(logger,idGenerator)
const store = createStore(reducer, {}, composeEnhancers(enhancer))

window.store = store

export default store