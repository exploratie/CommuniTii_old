import { RootNav } from "../lib/router"

const ActionForSignIn = RootNav.router.getActionForPathAndParams("SignedInNav")
const ActionForSignOut = RootNav.router.getActionForPathAndParams("SignIn")

const stateForSignIn = RootNav.router.getStateForAction(ActionForSignIn)
const stateForSignOut = RootNav.router.getStateForAction(ActionForSignOut)

const INITIAL_STATE = {
  signedOut: stateForSignOut,
  signedIn: stateForSignIn
}

// TODO: Setup login and log out procedures
export default (state = INITIAL_STATE, action) => {
  // const nextState = SignedOutRouter.router.getStateForAction(action, state)
  // // Simply return the original `state` if `nextState` is null or undefined.
  // return nextState || state
  switch (action.type) {
    case "@@redux/INIT":
      return {
        ...state,
        signedIn: RootNav.router.getStateForAction(
          ActionForSignIn,
          stateForSignOut
        )
      }
    default:
      return {
        ...state,
        signedIn: RootNav.router.getStateForAction(action, state.signedIn)
      }
  }
}
