import React from "react"
import { StackNavigator } from "react-navigation"
import { Ionicons } from "@expo/vector-icons"

import LovedLogView from "./LovedLog"

const QuestLogNavigation = StackNavigator(
  {
    QuestLog: {
      screen: LovedLogView
    }
  },
  {
    navigationOptions: {
      headerTitle: "Quest Log",
      headerStyle: {
        backgroundColor: "#2196F3"
      },
      headerTitleStyle: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold"
      }
    }
  }
)

class QuestLogScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={focused ? "ios-bookmarks" : "ios-bookmarks-outline"}
        size={26}
        style={{ color: "#fff" }}
      />
    )
  }

  render() {
    return <QuestLogNavigation />
  }
}

export default QuestLogScreen
