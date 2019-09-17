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
import * as themes from "../../themes";
import Places from "../../screens/places/Places";
import Reviews from "../../screens/reviews/Reviews";
import MapView, { Marker } from "react-native-maps";
import firebaseService from "../../service/firebase";

export default class FoodDetails extends Component {
  state = {
    menu: true,
    places: false,
    foodReviews: false,
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
    foodReview: [
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
    ],
    data: []
  };
  handleItemsOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Items");
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

  //change tabs
  changeTab = index => {
    if (index === 1) {
      this.setState({
        menu: true,
        places: false,
        foodReviews: false
      });
    }
    if (index === 2) {
      this.setState({
        menu: false,
        places: true,
        foodReviews: false
      });
    }
    if (index === 3) {
      this.setState({
        menu: false,
        places: false,
        foodReviews: true
      });
    }
  };

  reviewsItem = ({ item }) => {
    // const { avatar, avatar_name, details } = props.item;
    return (
      <View style={mystyles.itemsContainer}>
        <TouchableOpacity style={mystyles.circualView} activeOpacity={0.9}>
          <Image source={{ uri: item.avatar }} />
        </TouchableOpacity>
        <View style={mystyles.reviewContainer}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {item.avatar_name}
          </Text>
          <Text style={{ fontSize: 14, marginTop: 10, textAlign: "justify" }}>
            {item.details}
          </Text>
        </View>
      </View>
    );
  };

  renderMenus = () => {
    return (
      <FlatList
        contentContainerStyle={{
          flexGrow: 1
        }}
        data={this.state.data}
        renderItem={this.reviewsItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  renderPlaces = () => {
    return (
      <View style={mystyles.container}>
        <MapView
          style={mystyles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        ></MapView>
      </View>
    );
  };
  renderReviewsItems = props => {
    return (
      <View style={mystyles.reviewsItemsContainer}>
        <TouchableOpacity style={mystyles.reviwerContainer} activeOpacity={0.9}>
          <Image source={props.item.circularImg} style={mystyles.reviewer} />
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
  renderFoodReviews = () => {
    return (
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center"
        }}
        showsVerticalScrollIndicator={false}
        data={this.state.foodReview}
        renderItem={this.renderReviewsItems}
        keyExtractor={(item, index) => item.key.toString()}
      />
    );
  };

  render() {
    const image = this.props.navigation.getParam("image");
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: image }}
          style={{ height: 150, width: "100%" }}
        ></ImageBackground>
        <View>
          <View style={mystyles.itemsContainer}>
            <TouchableOpacity
              onPress={() => this.changeTab(1)}
              style={[
                mystyles.FlatListBtn,
                {
                  backgroundColor: this.state.menu
                    ? themes.colors.colorPrimary
                    : themes.colors.white
                }
              ]}
              activeOpacity={0.9}
            >
              <Text
                style={{
                  color: this.state.menu
                    ? themes.colors.white
                    : themes.colors.black,
                  fontSize: 15
                }}
              >
                Menu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.changeTab(2)}
              style={[
                mystyles.FlatListBtn,
                {
                  backgroundColor: this.state.places
                    ? themes.colors.colorPrimary
                    : themes.colors.white
                }
              ]}
              activeOpacity={0.9}
            >
              <Text
                style={{
                  color: this.state.places
                    ? themes.colors.white
                    : themes.colors.black,
                  fontSize: 15
                }}
              >
                Places
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.changeTab(3)}
              style={[
                mystyles.FlatListBtn,
                {
                  backgroundColor: this.state.foodReviews
                    ? themes.colors.colorPrimary
                    : themes.colors.white
                }
              ]}
              activeOpacity={0.9}
            >
              <Text
                style={{
                  color: this.state.foodReviews
                    ? themes.colors.white
                    : themes.colors.black,
                  fontSize: 15
                }}
              >
                Reviews
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {this.state.menu ? this.renderMenus() : null}
        {this.state.places ? this.renderPlaces() : null}
        {this.state.foodReviews ? this.renderFoodReviews() : null}

        <TouchableOpacity
          style={mystyles.bottomBtn}
          activeOpacity={0.9}
          onPress={() => this.handleItemsOnPress()}
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

//styles
const mystyles = StyleSheet.create({
  itemsContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  reviewsItemsContainer: {
    margin: 10,
    flexDirection: "row"
    // justifyContent: "space-around",
    // alignItems: "center"
  },
  FlatListBtn: {
    marginTop: 10,
    width: 100,
    height: 50,
    borderRadius: 30,
    // backgroundColor: "#E77E23",
    alignItems: "center",
    justifyContent: "center"
  },
  circularImg: {
    height: 110,
    width: 110,
    borderRadius: 75
  },
  circualView: {
    width: 120,
    height: 120,
    borderRadius: 75,
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
  },

  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // height: 300,
    // width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  reviwerContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#e8f0ff",
    alignItems: "center",
    justifyContent: "center"
  },
  reviewer: {
    height: 55,
    width: 55,
    borderRadius: 60
  }
});
