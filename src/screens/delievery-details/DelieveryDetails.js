import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import InputField from "../../components/InputField";
class DelieveryDetails extends Component {
  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.mainContainer}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10
        }}
      >
        <InputField placeholder="First Name" style={{ width: "85%" }} />
        <InputField placeholder="Last Name" />
        <InputField placeholder="Phone No" />
        <InputField placeholder="Streat Address" />
        <InputField placeholder="Country" />
        <InputField placeholder="City" />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Payment")}
          style={styles.signUpBtn}
          activeOpacity={0.8}
          // onPress={() => this.handleSignupOnPress()}
          activeOpacity={0.8}
        >
          <Text style={styles.signUpBtnTxt}>Process To Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1
  },
  signUpBtn: {
    margin: 10,
    backgroundColor: "#E77E23",
    padding: 13,
    borderRadius: 30,
    width: "75%",
    fontFamily: "geometriaBold",
    textAlign: "center"
  },
  signUpBtnTxt: {
    color: "white",
    fontFamily: "sofiapro",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 15
  }
});
export default DelieveryDetails;
