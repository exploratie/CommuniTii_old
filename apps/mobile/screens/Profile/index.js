import React from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

class QuestScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={focused ? "ios-person" : "ios-person-outline"}
        size={26}
        style={{ color: "#fff" }}
      />
    )
  }

  render() {
    return (
      <View>
        <Text>This is the Profile Screen</Text>
      </View>
    )
  }
}

export default QuestScreen
