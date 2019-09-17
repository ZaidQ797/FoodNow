import React from "react";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    display: "flex",
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  },
  SignupContainer: {
    flex: 0.6,
    // height:'100%',
    // width:'100%',
    alignItems: "center",
    justifyContent: "flex-end"
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
  },
  footerContainer: {
    flex: 0.4,
    alignItems: "center",
    marginTop: 10
  },
  socialMainContainer: {
    flexDirection: "row"
  },
  iconContainer: {
    margin: 10,
    flex: 0.2,
    // backgroundColor:'#E77E23',
    padding: 5,
    borderRadius: 30
  },
  iconStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold"
  }
});
