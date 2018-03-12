import Router from "../lib/router"

const INITIAL_STATE = Router.router.getStateForAction(
  Router.router.getActionForPathAndParams("Quest")
)

export default (state = INITIAL_STATE, action) => {
  const nextState = Router.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
