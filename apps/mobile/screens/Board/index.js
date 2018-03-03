import React from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

class BoardScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={focused ? "ios-globe" : "ios-globe-outline"}
        size={26}
        style={{ color: "#fff" }}
      />
    )
  }

  render() {
    return (
      <View>
        <Text>This is the Leader Board Screen</Text>
      </View>
    )
  }
}

export default BoardScreen
