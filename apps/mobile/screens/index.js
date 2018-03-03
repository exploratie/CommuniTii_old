import { TabNavigator, TabBarBottom } from "react-navigation"

import LogScreen from "./Log"
import QuestScreen from "./Quest"
import MessageScreen from "./Message"
import ProfileScreen from "./Profile"
import BoardScreen from "./Board"

export default TabNavigator(
  {
    Quest: { screen: QuestScreen },
    Log: { screen: LogScreen },
    Message: { screen: MessageScreen },
    Board: { screen: BoardScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    initialRouteName: "Quest",
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: true,
    backBehavior: "initialRoute",
    tabBarOptions: {
      activeBackgroundColor: "#1976D2",
      labelStyle: {
        fontSize: 12,
        color: "#FFF"
      },
      style: {
        backgroundColor: "#2196F3"
      }
    }
  }
)
