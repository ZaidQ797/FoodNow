import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

class Cart extends Component {
  state = {
    clicks: 0,
    price: 0,
    flatData: [
      {
        key: 1,
        circularImg: require("../../assets/images/biting.jpg"),
        name: "Fri-Chicks",
        quantity: 0
      },
      {
        key: 2,
        circularImg: require("../../assets/images/fajita.jpg"),
        name: "Domino",
        quantity: 0
      },
      {
        key: 3,
        circularImg: require("../../assets/images/starbucks.jpg"),
        name: "MacDonald",
        quantity: 0
      },
      {
        key: 4,
        circularImg: require("../../assets/images/blackDonut.jpg"),
        name: "Salty",
        quantity: 0
      },
      {
        key: 5,
        circularImg: require("../../assets/images/whiteRoll.jpg"),
        name: "PizzaHut"
      },
      {
        key: 6,
        circularImg: require("../../assets/images/paratha.jpg"),
        name: "Pizza Club",
        quantity: 0
      }
    ]
  };
  increaseOnPlus = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  increaseOnMinus = () => {
    if (this.state.clicks === 0) {
      return 0;
    } else {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  };
  reviewsItem = props => {
    return (
      <View style={mystyles.itemsContainer}>
        <TouchableOpacity style={mystyles.circualView} activeOpacity={0.1}>
          <Image source={props.item.circularImg} style={mystyles.circularImg} />
        </TouchableOpacity>
        <View style={mystyles.reviewContainer}>
          <Text style={{ fontSize: 16 }}>{props.item.name}</Text>

          <View style={mystyles.counterStyle}>
            <TouchableOpacity
              onPress={() => this.increaseOnMinus(props.item)}
              style={mystyles.plusBG}
              activeOpacity={0.7}
            >
              <Entypo name="minus" size={24} color="#EC5568" />
            </TouchableOpacity>
            <View style={mystyles.numberCounter}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {this.state.clicks}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.increaseOnPlus(props.item)}
              style={[mystyles.plusBG, { backgroundColor: "#B0DFF5" }]}
              activeOpacity={0.7}
            >
              <Entypo name="plus" size={24} color="#31AEE4" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1
          }}
          data={this.state.flatData}
          renderItem={this.reviewsItem}
          showsVerticalScrollIndicator={false}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              fontSize: 22,
              margin: 15,
              justifyContent: "center",
              alignItems: "center",
              color: "#E77E23",
              fontWeight: "100"
            }}
          >
            Total: $12
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={mystyles.btnStyle}
            onPress={() => this.props.navigation.navigate("DelieveryDetails")}
          >
            <Text style={mystyles.btnText}>PROCEED ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mystyles = StyleSheet.create({
  itemsContainer: {
    margin: 10,
    flexDirection: "row"
  },
  counterStyle: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start"
  },
  plusBG: {
    backgroundColor: "#F9BCC3",
    borderRadius: 30,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  numberCounter: {
    backgroundColor: "#EDF3F6",
    height: 35,
    width: 35,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    elevation: 0.5
  },
  btnStyle: {
    backgroundColor: "#E77E23",
    borderRadius: 30,
    height: 45,
    width: "40%",
    fontFamily: "geometriaBold",
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  },
  btnText: {
    alignSelf: "center",
    color: "white",
    fontSize: 12
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
    height: 110,
    width: 110,
    borderRadius: 75
  },
  reviewContainer: {
    flex: 1,
    padding: 10
  }
});

export default Cart;
