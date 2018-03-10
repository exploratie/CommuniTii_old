import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"

import reducers from "../reducers"
import { middleware as navMiddleware } from "../lib/navHelpers"

export default (preloadedState = {}) => {
  const rootReducer = combineReducers(reducers)

  const devMiddlewares = [require("redux-immutable-state-invariant").default()]
  const prodMiddlewares = [navMiddleware]

  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...prodMiddlewares, ...(__DEV__ && devMiddlewares))
  )(createStore)

  return createStoreWithMiddleware(rootReducer, preloadedState)
}
