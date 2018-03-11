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

class QuestCard extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent>
            <Icon
              android="md-funnel"
              ios="ios-funnel"
              style={{ fontSize: 20 }}
            />
          </Button>
        </Left>
        <Body>
          <Title>Quest</Title>
        </Body>
        <Right />
      </Header>
    )
  })

  render() {
    return (
      <Container>
        <Content>
          <Text>This is the Quest Page</Text>
        </Content>
      </Container>
    )
  }
}

export default QuestCard
