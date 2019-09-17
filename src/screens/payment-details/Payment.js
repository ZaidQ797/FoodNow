import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

import InputField from "../../components/InputField";
import Feather from "react-native-vector-icons/Feather";
// import DatePicker from "react-native-datepicker";

export default class FoodDetails extends Component {
  state = {
    date: "09-2019",
    flatData: [
      {
        key: 1,
        name: "Menu",
        image: require("../../assets/images/visa.png")
      },
      {
        key: 2,
        name: "Places",
        image: require("../../assets/images/master.png")
      },
      {
        key: 3,
        name: "Reviews",
        image: require("../../assets/images/paypal.png")
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
          <Image
            source={props.item.image}
            style={{ height: 120, width: 200 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          horizontal={true}
          data={this.state.flatData}
          renderItem={this.renderItems}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.key.toString()}
        />

        <InputField placeholder="Full Name" />
        <InputField placeholder="Card No" keyboardType={"numeric"} />
        <InputField placeholder="Expiray Date" />
        <InputField
          placeholder="Security Code"
          maxLength={3}
          keyboardType={"numeric"}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Payment")}
          style={mystyles.signUpBtn}
          activeOpacity={0.8}
          // onPress={() => this.handleSignupOnPress()}
          activeOpacity={0.8}
        >
          <Text style={mystyles.signUpBtnTxt}>Pay Order</Text>
        </TouchableOpacity>
        <Text>{"\n"}</Text>
      </ScrollView>
    );
  }
}
const mystyles = StyleSheet.create({
  itemsContainer: {
    margin: 10
  },
  FlatListBtn: {
    width: 300,
    height: 180,
    borderRadius: 10,
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center"
  },

  reviewContainer: {
    flex: 1,
    padding: 10
  },
  signUpBtn: {
    marginTop: 10,
    backgroundColor: "#E77E23",
    padding: 13,
    borderRadius: 30,
    width: "75%",
    fontFamily: "geometriaBold",
    textAlign: "center",
    marginBottom: 10
  },
  signUpBtnTxt: {
    color: "white",
    fontFamily: "sofiapro",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 15
  }
});
