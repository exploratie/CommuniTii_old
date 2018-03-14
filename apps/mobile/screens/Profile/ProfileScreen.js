import React, { PureComponent } from "react"
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Title,
  Text,
  Button,
  Icon
} from "native-base"

class ProfileScreen extends PureComponent {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent>
            <Icon android="md-globe" ios="ios-globe" style={{ fontSize: 25 }} />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigate("Settings")}>
            <Icon android="md-settings" ios="ios-settings" />
          </Button>
        </Right>
      </Header>
    )
  })

  render() {
    return (
      <Container>
        <Content>
          <Text>This is the Profile Screen</Text>
        </Content>
      </Container>
    )
  }
}

export default ProfileScreen
