import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { addNavigationHelpers, NavigationActions } from "react-navigation"
import { func, object } from "prop-types"
import { BackHandler } from "react-native"

import { RootNav as RootRouter } from "../lib/router"
import { addListener } from "../lib/navHelpers"

@connect(({ nav, firebase }) => ({ nav, auth: firebase.auth }))
class AppNavigator extends PureComponent {
  static propTypes = {
    dispatch: func,
    nav: object,
    auth: object
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
    return this.props.auth.isEmpty ? (
      <RootRouter
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav.signedOut,
          addListener
        })}
      />
    ) : (
      <RootRouter
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav.signedIn,
          addListener
        })}
      />
    )
  }
}

export default AppNavigator
