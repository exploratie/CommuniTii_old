import React from "react"
import { View, Text } from "react-native"
import { string } from "prop-types"

const Test = ({ children }) => (
  <View>
    <Text>{children}</Text>
  </View>
)

Test.propTypes = {
  children: string
}

export default Test
