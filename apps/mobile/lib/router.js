import { TabNavigator, StackNavigator } from "react-navigation"

import ProfileScreen from "../screens/Profile/ProfileScreen"
import QuestCardScreen from "../screens/Quest/QuestCard"
import QuestLogScreen from "../screens/Quest/QuestLog"
import MessageListScreen from "../screens/Message/MessageList"
import SignInScreen from "../screens/Auth/SignIn"
import SignUpScreen from "../screens/Auth/SignUp"
import SettingsScreen from "../screens/Profile/Settings"

import BottomNav from "../components/BottomNav"

const MessageNav = StackNavigator(
  {
    MessageList: {
      screen: MessageListScreen
    }
  },
  {
    headerMode: "none",
    initialRouteName: "MessageList"
  }
)

const ProfileNav = StackNavigator(
  {
    Profile: { screen: ProfileScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: "Profile",
    headerMode: "none"
  }
)

const QuestNav = StackNavigator(
  {
    QuestCard: { screen: QuestCardScreen },
    QuestLog: { screen: QuestLogScreen }
  },
  {
    initialRouteName: "QuestCard",
    headerMode: "none"
  }
)

// TODO: [BUG] Fix statusbar height issue in android
export const SignedInNav = TabNavigator(
  {
    Quest: { screen: QuestNav },
    Message: { screen: MessageNav },
    Profile: { screen: ProfileNav }
  },
  {
    tabBarComponent: BottomNav,
    animationEnabled: true,
    swipeEnabled: false,
    tabBarPosition: "bottom"
  }
)

// TODO: [BUG] Screens not showing up after loginning in and out
export const RootNav = StackNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    SignedIn: { screen: SignedInNav }
  },
  {
    headerMode: "screen"
  }
)
