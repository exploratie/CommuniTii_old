import { TabNavigator } from "react-navigation"

import LogScreen from "./Log"
import QuestScreen from "./Quest"
import MessageScreen from "./Message"
import ProfileScreen from "./Profile"
import BoardScreen from "./Board"

export default TabNavigator({
  Quest: { screen: QuestScreen },
  Log: { screen: LogScreen },
  Message: { screen: MessageScreen },
  Board: { screen: BoardScreen },
  Profile: { screen: ProfileScreen }
})
