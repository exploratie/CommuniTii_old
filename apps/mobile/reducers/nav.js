import {
  SignedInNav as SignedInRouter,
  SignedOutNav as SignedOutRouter
} from "../lib/router"

const ActionForSignIn = SignedInRouter.router.getActionForPathAndParams("Quest")
const ActionForSignOut = SignedOutRouter.router.getActionForPathAndParams(
  "SignIn"
)

const stateForSignIn = SignedInRouter.router.getStateForAction(ActionForSignIn)
const stateForSignOut = SignedOutRouter.router.getStateForAction(
  ActionForSignOut
)

const INITIAL_STATE = {
  signedOut: stateForSignOut,
  signedIn: stateForSignIn
}

// // TODO: Figure out redux architecture how to pass firebase auth state to nav reducer
// TODO: Debug error in nested root handling
// TODO: Setup login and log out procedures
export default (state = INITIAL_STATE, action) => {
  // const nextState = SignedOutRouter.router.getStateForAction(action, state)
  // // Simply return the original `state` if `nextState` is null or undefined.
  // return nextState || state
  switch (action.type) {
    case "@@redux/INIT":
      return {
        ...state,
        signOut: SignedOutRouter.router.getStateForAction(
          ActionForSignOut,
          stateForSignOut
        ),
        signIn: SignedInRouter.router.getStateForAction(
          ActionForSignIn,
          stateForSignIn
        )
      }
    default:
      return {
        ...state,
        signedIn: SignedInRouter.router.getStateForAction(
          action,
          state.signedIn
        ),
        signedOut: SignedOutRouter.router.getStateForAction(
          action,
          state.signedOut
        )
      }
  }
}
