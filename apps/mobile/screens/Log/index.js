import React from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

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
    return (
      <View>
        <Text>This is the Quest Log Screen</Text>
      </View>
    )
  }
}

export default QuestLogScreen
