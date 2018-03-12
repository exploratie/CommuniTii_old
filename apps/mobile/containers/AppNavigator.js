import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { addNavigationHelpers, NavigationActions } from "react-navigation"
import { func, object, bool } from "prop-types"
import { BackHandler } from "react-native"

import {
  SignedInNav as SignedInRouter,
  SignedOutNav as SignedOutRouter
} from "../lib/router"
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
      <SignedOutRouter
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav.signedOut,
          addListener
        })}
      />
    ) : (
      <SignedInRouter
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
