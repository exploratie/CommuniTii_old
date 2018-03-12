import { TabNavigator, StackNavigator } from "react-navigation"

import ProfileScreen from "../screens/Profile/ProfileScreen"
import QuestCardScreen from "../screens/Quest/QuestCard"
import MessageListScreen from "../screens/Message/MessageList"

import BottomNav from "../components/BottomNav"

const MessageNav = StackNavigator({
  MesasgeList: {
    screen: MessageListScreen
  }
})

const ProfileNav = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: "Profile"
  }
)

const QuestNav = StackNavigator(
  {
    QuestCard: { screen: QuestCardScreen }
  },
  {
    initialRouteName: "QuestCard"
  }
)

// TODO: Fix statusbar height issue in android

export default TabNavigator(
  {
    Quest: { screen: QuestNav },
    Message: { screen: MessageNav },
    Profile: { screen: ProfileNav }
  },
  {
    tabBarComponent: BottomNav,
    initialRouteName: "Quest",
    animationEnabled: true,
    swipeEnabled: false,
    tabBarPosition: "bottom"
  }
)
