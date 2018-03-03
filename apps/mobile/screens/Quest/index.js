import React, { PureComponent } from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

class QuestScreen extends PureComponent {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={focused ? "ios-search" : "ios-search-outline"}
        size={26}
        style={{ color: "#fff" }}
      />
    )
  }

  render() {
    return (
      <View>
        <Text>This is the Quest Screen</Text>
      </View>
    )
  }
}

export default QuestScreen
