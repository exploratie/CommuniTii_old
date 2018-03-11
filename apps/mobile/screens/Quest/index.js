import { StackNavigator } from "react-navigation"

import QuestCardScreen from "./QuestCard"

export default StackNavigator(
  {
    QuestCard: { screen: QuestCardScreen }
  },
  {
    initialRouteName: "QuestCard"
  }
)
