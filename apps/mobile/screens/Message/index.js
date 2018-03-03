import React from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"

class MessageScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={focused ? "ios-chatboxes" : "ios-chatboxes-outline"}
        size={26}
        style={{ color: "#fff" }}
      />
    )
  }

  render() {
    return (
      <View>
        <Text>This is the Message Screen</Text>
      </View>
    )
  }
}

export default MessageScreen
