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
  View,
  Text
} from "native-base"

class QuestLogScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent>
            <Icon
              android="md-arrow-back"
              ios="ios-arrow-back"
              onPress={() => navigation.goBack()}
              style={{ fontSize: 20 }}
            />
          </Button>
        </Left>
        <Body>
          <Title>Quest Log</Title>
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
        <View>
          <Text>This is the Quest Log</Text>
        </View>
      </Container>
    )
  }
}

export default QuestLogScreen
