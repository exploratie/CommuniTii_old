import React from "react"
import { storiesOf } from "@storybook/react"
import { Text } from "react-native"

import Box from "../"

storiesOf("Universal Components", module).add("Box", () => (
  <Box>
    <Text>Hello</Text>
  </Box>
))
