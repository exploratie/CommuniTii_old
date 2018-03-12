import React, { Component } from "react"
import { Image, StyleSheet } from "react-native"
import {
  View,
  DeckSwiper,
  Body,
  Card,
  CardItem,
  Button,
  Text,
  Icon,
  H1,
  H3
} from "native-base"

const cards = [
  {
    partnerName: "Korean Planning Council",
    questName: "FAQ Translations",
    questLocation: "Foresthills, NY",
    image: "http://onbyrd.com/wp-content/uploads/2015/07/import_placeholder.png"
  },
  {
    partnerName: "Korean Planning Council",
    questName: "FAQ Translations",
    questLocation: "Foresthills, NY",
    image: "http://onbyrd.com/wp-content/uploads/2015/07/import_placeholder.png"
  }
]

const styles = StyleSheet.create({
  root: {
    marginTop: 50
  },
  deckContainer: {
    flex: 4
  },
  btnContainer: {
    flexDirection: "row",
    flex: 1,
    left: 0,
    right: 0,
    justifyContent: "space-around",
    position: "absolute",
    top: 445
  },
  btnIcon: {},
  btn: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
  }
})

// TODO: Break out the card Component from DeckSwiper into a seerate file
// TODO: Clean up empty card setup
// TODO: Use flex box for creating layout so works with variety of screen sizes

export default class QuestCardDeck extends Component {
  render() {
    return (
      <View>
        <View>
          <DeckSwiper
            style={styles.deckContainer}
            ref={c => (this._deckSwiper = c)}
            dataSource={cards}
            renderEmpty={() => (
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            )}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image
                    style={{ height: 300, flex: 1 }}
                    source={{ uri: item.image }}
                  />
                </CardItem>
                <CardItem>
                  <Body>
                    <H1>{item.questName}</H1>
                    <H3>{item.partnerName}</H3>
                    <Text>{item.questLocation}</Text>
                  </Body>
                </CardItem>
              </Card>
            )}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button large warning style={{ padding: 5 }}>
            <Icon
              style={{ fontSize: 50 }}
              android="md-close-circle"
              ios="ios-close-circle"
              onPress={() => this._deckSwiper._root.swipeLeft()}
            />
          </Button>
          <Button large danger style={{ padding: 5 }}>
            <Icon
              style={{ fontSize: 50 }}
              android="md-heart"
              ios="ios-heart"
              onPress={() => this._deckSwiper._root.swipeRight()}
            />
          </Button>
        </View>
      </View>
    )
  }
}
