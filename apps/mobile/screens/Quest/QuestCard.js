import React, { PureComponent } from "react"
import {
  Container,
  Body,
  Header,
  Left,
  Right,
  Title,
  Button,
  Icon
} from "native-base"

import QuestCardDeck from "../../containers/QuestCardDeck"

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
        <QuestCardDeck />
      </Container>
    )
  }
}

export default QuestCard
