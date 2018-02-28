import React from "react"
import { View } from "react-native"
import { node } from "prop-types"

const Box = ({ children }) => <View>{children}</View>

Box.propTypes = {
  children: node
}

export default Box
