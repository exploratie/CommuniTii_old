import React from "react"
import StorybookUI from "./storybook"
import Expo from "expo"

class App extends React.Component {
  render() {
    return <StorybookUI />
  }
}

Expo.registerRootComponent(App)
