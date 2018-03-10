import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { addNavigationHelpers, NavigationActions } from "react-navigation"
import { func, object } from "prop-types"
import { BackHandler } from "react-native"

import Screens from "../screens"
import { addListener } from "../lib/navHelpers"

@connect(({ nav }) => ({ nav }))
class AppNavigator extends PureComponent {
  static propTypes = {
    dispatch: func,
    nav: object
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    return (
      <Screens
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    )
  }
}

export default AppNavigator
