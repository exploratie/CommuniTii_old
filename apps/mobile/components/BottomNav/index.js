import React from "react"
import { Button, Text, Icon, Footer, FooterTab } from "native-base"
import { object, array } from "prop-types"

const rootTabScreens = [
  {
    screenName: "Quest",
    iosIcon: "ios-search",
    mdIcon: "md-search"
  },
  {
    screenName: "Message",
    iosIcon: "ios-chatbubbles",
    mdIcon: "md-chatbubbles"
  },
  {
    screenName: "Profile",
    iosIcon: "ios-person",
    mdIcon: "md-person"
  }
]

const BottomNav = ({ navItems, navigationState, navigation }) => (
  <Footer>
    <FooterTab>
      {navItems.map((navItem, i) => (
        <Button
          vertical
          key={i}
          active={navigationState.index === i}
          onPress={() => navigation.navigate(navItem.screenName)}
        >
          <Icon android={navItem.mdIcon} ios={navItem.iosIcon} />
          <Text>{navItem.screenName}</Text>
        </Button>
      ))}
    </FooterTab>
  </Footer>
)

BottomNav.propTypes = {
  navigation: object,
  navigationState: object,
  navItems: array
}

BottomNav.defaultProps = {
  navItems: rootTabScreens
}

export default BottomNav
