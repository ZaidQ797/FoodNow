import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
export default class FoodDetails extends Component {
  state = {
    flatData: [
      {
        key: 1,
        name: "Menu"
      },
      {
        key: 2,
        name: "Places"
      },
      {
        key: 3,
        name: "Reviews"
      }
    ],
    reviews: [
      {
        key: 1,
        circularImg: require("../../assets/images/jhon.jpg"),
        name: "Jhon Doe",
        date: "10-sep-19",
        detail:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        key: 2,
        circularImg: require("../../assets/images/adeel.jpg"),
        name: "Adeel",
        date: "22-Aug-19",
        detail:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      },
      {
        key: 3,
        circularImg: require("../../assets/images/sagheer.jpg"),
        name: "Ashfaq",
        date: "10-Aug-19",
        detail:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      },
      {
        key: 4,
        circularImg: require("../../assets/images/zaid.jpg"),
        name: "Sagheer",
        date: "31-Jul-19",
        detail:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      },
      {
        key: 5,
        circularImg: require("../../assets/images/lorem.jpg"),
        name: "Lorem Ipsum",
        date: "10-sep-19",
        detail:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      },
      {
        key: 6,
        circularImg: require("../../assets/images/zaid.jpg"),
        name: "Pizza Club",
        date: "10-sep-19",
        detail:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      }
    ]
  };
  handleItemsOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Items");
  };

  renderItems = props => {
    return (
      <View style={mystyles.itemsContainer}>
        <TouchableOpacity style={mystyles.FlatListBtn} activeOpacity={0.9}>
          <Text style={{ color: "white", fontSize: 15 }}>
            {props.item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  reviewsItem = props => {
    return (
      <View style={mystyles.itemsContainer}>
        <TouchableOpacity style={mystyles.circualView} activeOpacity={0.9}>
          <Image source={props.item.circularImg} style={mystyles.circularImg} />
        </TouchableOpacity>
        <View style={mystyles.reviewContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>{props.item.name}</Text>
              <Text style={{ fontSize: 16 }}>{props.item.date}</Text>
            </View>
            <Image
              source={require("../../assets/images/stars.png")}
              style={{ height: 20, width: 90 }}
            />
          </View>
          <Text style={{ fontSize: 14, marginTop: 10, textAlign: "justify" }}>
            {props.item.detail}
          </Text>
        </View>
      </View>
    );
  };
  render() {
    const image = this.props.navigation.getParam("image");

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={image}
          style={{ height: 150, width: "100%" }}
        ></ImageBackground>
        <View>
          <FlatList
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center"
            }}
            data={this.state.flatData}
            renderItem={this.renderItems}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <FlatList
          contentContainerStyle={{
            flexGrow: 1
          }}
          data={this.state.reviews}
          renderItem={this.reviewsItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
const mystyles = StyleSheet.create({
  itemsContainer: {
    margin: 10,
    flexDirection: "row"
  },
  FlatListBtn: {
    marginTop: 10,
    width: 100,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#E77E23",
    alignItems: "center",
    justifyContent: "center"
  },
  circularImg: {
    height: 55,
    width: 55,
    borderRadius: 60
  },
  circualView: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#e8f0ff",
    alignItems: "center",
    justifyContent: "center"
  },
  reviewContainer: {
    flex: 1,
    padding: 10
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
