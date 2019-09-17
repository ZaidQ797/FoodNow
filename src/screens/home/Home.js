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

import firebaseService from "../../service/firebase";

import Entypo from "react-native-vector-icons/Entypo";
import * as themes from "../../themes";

export default class Home extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const ref = firebaseService.database().ref("/Foods");
    ref.once("value").then(snapshot => {
      const newFreshArr = Object.values(snapshot.val());

      this.setState({
        data: newFreshArr
      });
    });
  }

  replaceScreen = item => {
    const { food_image } = item;
    const { navigate } = this.props.navigation;
    navigate("FoodDetails", {
      image: food_image
    });
  };

  handleItemsOnPress = screen => {
    const { navigate } = this.props.navigation;
    navigate(screen);
  };

  renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ flex: 1, display: "flex", margin: 10 }}
        onPress={() => this.replaceScreen(item)}
      >
        <Image source={{ uri: item.food_image }} style={styles.imageStyle} />
        <View style={styles.circualView}>
          <Image source={{ uri: item.logo }} style={styles.circularImg} />
        </View>
        <View style={styles.detailView}>
          <Text style={styles.brandTxtStyle}>{item.name}</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnStyle}>
            <Text
              style={styles.btnText}
            >{`Ready in ${item.delivery_time}`}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, display: "flex" }}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity
          style={styles.bottomBtn}
          activeOpacity={0.9}
          onPress={() => this.handleItemsOnPress("Items")}
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

// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
