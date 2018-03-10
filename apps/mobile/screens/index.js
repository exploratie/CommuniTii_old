import { TabNavigator } from "react-navigation"

import QuestScreen from "./Quest"
import MessageScreen from "./Message"
import ProfileScreen from "./Profile"

import BottomNav from "../components/BottomNav"

export default TabNavigator(
  {
    Quest: { screen: QuestScreen },
    Message: { screen: MessageScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    tabBarComponent: BottomNav,
    initialRouteName: "Quest",
    animationEnabled: true,
    tabBarPosition: "bottom"
  }
)
