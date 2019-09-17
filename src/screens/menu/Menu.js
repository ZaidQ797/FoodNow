import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { styles } from "./style";
import Feather from "react-native-vector-icons/Feather";
export default class Menu extends Component {
  state = {
    flatData: [
      {
        key: 1,
        image: require("../../assets/images/biting.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "AB Pizza & Cafe",
        btnText: "Ready in 26 mins"
      },
      {
        key: 2,
        image: require("../../assets/images/blackDonut.jpg"),
        circularImg: require("../../assets/images/donut.png"),
        name: "Fri-Chicks",
        btnText: "Ready in 12 mins"
      },
      {
        key: 3,
        image: require("../../assets/images/whiteRoll.jpg"),
        circularImg: require("../../assets/images/kebab.png"),
        name: "Pizza-Hut",
        btnText: "Ready in 10 mins"
      },
      {
        key: 4,
        image: require("../../assets/images/green.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "KFC",
        btnText: "Ready in 5 mins"
      },
      {
        key: 5,
        image: require("../../assets/images/peper.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "Domino",
        btnText: "Ready in 25 mins"
      },
      {
        key: 6,
        image: require("../../assets/images/pizza.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "MacDonald",
        btnText: "Ready in 5 mins"
      },
      {
        key: 7,
        image: require("../../assets/images/cutting.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "Salty",
        btnText: "Ready in 35 mins"
      },
      {
        key: 8,
        image: require("../../assets/images/lovely.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "MacDonald",
        btnText: "Ready in 5 mins"
      },
      {
        key: 9,
        image: require("../../assets/images/biting.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "Salty",
        btnText: "Ready in 35 mins"
      },
      {
        key: 10,
        image: require("../../assets/images/green.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "MacDonald",
        btnText: "Ready in 5 mins"
      },
      {
        key: 11,
        image: require("../../assets/images/peper.jpg"),
        circularImg: require("../../assets/images/slice.png"),
        name: "Salty",
        btnText: "Ready in 35 mins"
      }
    ]
  };
  handleOnItemsPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Items");
  };

  renderItems = props => {
    return (
      <View
        style={{
          flex: 0.5,
          display: "flex",
          margin: 10
        }}
      >
        <Image source={props.item.image} style={styles.imageStyle}></Image>
        <View style={styles.circualView}>
          <Image source={props.item.circularImg} style={styles.circularImg} />
        </View>
        <View>
          <Text style={styles.brandTxtStyle}>{props.item.name}</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnStyle}>
            <Text style={styles.btnText}>{props.item.btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, display: "flex" }}>
        <FlatList
          data={this.state.flatData}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => item.key.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
        <TouchableOpacity
          style={styles.bottomBtn}
          activeOpacity={0.9}
          onPress={() => this.handleOnItemsPress()}
        >
          <Image
            source={require("../../assets/images/slider.png")}
            style={{
              height: 22,
              width: 22,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
              paddingRight: 10
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
Menu.navigationOptions = {
  tabBarIcon: (
    <Image
      source={require("../../assets/images/columnTwo.png")}
      style={{ height: 22, width: 22 }}
    />
  )
};

// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
