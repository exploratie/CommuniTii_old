import React from "react"
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

class MessageList extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent>
            <Icon android="md-people" ios="ios-people" />
          </Button>
        </Left>
        <Body>
          <Title>Message</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon android="md-add" ios="ios-add" />
          </Button>
        </Right>
      </Header>
    )
  })

  render() {
    return (
      <Container>
        <Content>
          <Text>This is the Message Screen</Text>
        </Content>
      </Container>
    )
  }
}

export default MessageList
