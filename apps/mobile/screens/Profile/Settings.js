import React, { PureComponent } from "react"
import {
  Container,
  Body,
  Header,
  Left,
  Right,
  Title,
  Button,
  Icon,
  Text
} from "native-base"
import { withFirebase } from "react-redux-firebase"
import { object } from "prop-types"

const SettingsScreenHeader = ({ navigation: { goBack }, firebase }) => (
  <Header>
    <Left>
      <Button transparent>
        <Icon
          android="md-arrow-back"
          ios="ios-arrow-back"
          onPress={() => goBack()}
          style={{ fontSize: 20 }}
        />
      </Button>
    </Left>
    <Body>
      <Title>Settings</Title>
    </Body>
    <Right>
      <Button transparent onPress={() => firebase.logout()}>
        <Icon android="md-log-out" ios="ios-log-out" />
      </Button>
    </Right>
  </Header>
)

SettingsScreenHeader.propTypes = {
  navigation: object,
  firebase: object
}

const SettingsHeader = withFirebase(SettingsScreenHeader)

class SettingsScreen extends PureComponent {
  static navigationOptions = navProps => ({
    header: () => <SettingsHeader {...navProps} />
  })

  render() {
    return (
      <Container>
        <Text>This is the settings screen</Text>
      </Container>
    )
  }
}

export default SettingsScreen

// TODO: [REFACTOR] Extract out header into a seperate file
// TODO: [BUG] Figure out why signning out and then signning in leads to quest cards not be rendered
