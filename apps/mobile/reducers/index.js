import nav from "./nav"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

export default {
  nav,
  firebase: firebaseReducer,
  firestore: firestoreReducer
}
