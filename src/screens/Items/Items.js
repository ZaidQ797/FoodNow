import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationActions } from "react-navigation";
import Feather from "react-native-vector-icons/Feather";
export default class Items extends Component {
  state = {
    flatData: [
      {
        key: 1,
        circularImg: require("../../assets/images/slice.png"),
        name: "AB Pizza"
      },
      {
        key: 2,
        circularImg: require("../../assets/images/donut.png"),
        name: "Fri-Chicks"
      },
      {
        key: 3,
        circularImg: require("../../assets/images/kebab.png"),
        name: "Pizza-Hut"
      },
      {
        key: 4,
        circularImg: require("../../assets/images/steak.png"),
        name: "Steak"
      },
      {
        key: 5,
        circularImg: require("../../assets/images/burger.png"),
        name: "Hamburger"
      },
      {
        key: 6,
        circularImg: require("../../assets/images/cookie.png"),
        name: "Cookies"
      }
    ]
  };
  replaceScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Order");
  };
  renderItems = props => {
    return (
      <View style={mystyles.itemsContainer}>
        <TouchableOpacity
          style={mystyles.circualView}
          onPress={() => this.replaceScreen()}
        >
          <Image source={props.item.circularImg} style={mystyles.circularImg} />
          <Text style={{ marginTop: 8 }}>{props.item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          data={this.state.flatData}
          renderItem={this.renderItems}
          numColumns={2}
        />
        <TouchableOpacity
          style={mystyles.bottomBtn}
          activeOpacity={0.9}
          onPress={() =>
            this.props.navigation.dispatch(NavigationActions.back())
          }
        >
          <Feather name="x" size={30} color="tomato" />
        </TouchableOpacity>
      </View>
    );
  }
}
const mystyles = StyleSheet.create({
  itemsContainer: {
    margin: 10
  },
  circualView: {
    width: 120,
    height: 120,
    borderRadius: 75,
    backgroundColor: "#e8f0ff",
    alignItems: "center",
    justifyContent: "center"
  },
  circularImg: {
    height: 50,
    width: 50
  },
  bottomBtn: {
    width: "18%",
    height: 60,
    borderTopEndRadius: 75,
    backgroundColor: "#1F2533",
    justifyContent: "center",
    paddingTop: 10,
    paddingRight: 10,
    alignItems: "center",
    zIndex: 6,
    position: "absolute",
    bottom: 0
  }
});
