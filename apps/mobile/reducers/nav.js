import Screens from "../screens"

const INITIAL_STATE = Screens.router.getStateForAction(
  Screens.router.getActionForPathAndParams("Quest")
)

export default (state = INITIAL_STATE, action) => {
  const nextState = Screens.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
