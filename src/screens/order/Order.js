import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

class Order extends Component {
  state = {
    clicks: 0,
    price: 0
  };
  increaseOnPlus = () => {
    this.setState({ clicks: this.state.clicks + 1 });

    this.setState({ price: this.state.price + 10 });
  };
  increaseOnMinus = () => {
    if (this.state.clicks === 0) {
      return 0;
    } else {
      this.setState({ clicks: this.state.clicks - 1 });
      this.setState({ price: this.state.price - 10 });
    }
  };
  handleCartOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Cart");
  };

  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imgContainer}>
          <Text
            style={{
              alignSelf: "flex-end",
              marginRight: 25,
              marginTop: 10,
              textAlign: "left",
              fontSize: 20,
              color: "#E77E23"
            }}
          >
            ${this.state.price}
          </Text>

          <Image
            source={require("../../assets/images/star.jpg")}
            style={styles.imgStyle}
          />
        </View>
        <Text style={{ fontSize: 15, textAlign: "center", margin: 10 }}>
          One of the best and delicous coffee ever!{"\n"}StartBucks Coffee,Have
          you gotta one?
        </Text>

        <View style={styles.counterContainer}>
          <View style={styles.counterStyle}>
            <TouchableOpacity
              onPress={() => this.increaseOnMinus()}
              style={styles.plusBG}
              activeOpacity={0.7}
            >
              <Entypo name="minus" size={24} color="#EC5568" />
            </TouchableOpacity>
            <View style={styles.numberCounter}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {this.state.clicks}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.increaseOnPlus()}
              style={[styles.plusBG, { backgroundColor: "#B0DFF5" }]}
              activeOpacity={0.7}
            >
              <Entypo name="plus" size={24} color="#31AEE4" />
            </TouchableOpacity>
          </View>
          <View style={styles.counterStyle}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnStyle}
              onPress={() => this.props.navigation.navigate("Cart")}
            >
              <Text style={styles.btnText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1
    // justifyContent: "center",
    // backgroundColor: "tomato"
  },
  imgContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "skyblue"
  },
  imgStyle: {
    borderRadius: 170,
    height: 280,
    width: 280
  },
  // counterContainer: {
  //   flex: 0.4,
  //   marginBottom: 10
  // },
  counterStyle: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
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
    height: 55,
    width: 55,
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
    width: "70%",
    fontFamily: "geometriaBold",
    alignSelf: "flex-start",
    justifyContent: "center",
    marginTop: 15
  },

  btnText: {
    alignSelf: "center",
    color: "white",
    fontSize: 12
  }
});
export default Order;
