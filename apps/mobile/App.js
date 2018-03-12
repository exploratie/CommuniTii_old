import React from "react"
import Expo from "expo"
import { Provider } from "react-redux"

import initStore from "./lib/initStore"
import AppNavigator from "./containers/AppNavigator"

const store = initStore()

export default class App extends React.PureComponent {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    })
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

// Features
// ==========
// TODO: Add authentication
