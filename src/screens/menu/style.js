import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flatlistStyle: {
    flex: 1
  },

  imageStyle: {
    margin: 10,
    height: 200,
    width: "100%",
    borderRadius: 10,
    alignSelf: "center",
    resizeMode: "cover"
  },
  circualView: {
    width: 60,
    height: 60,
    borderRadius: 75,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 6,
    position: "absolute",
    top: 20,
    left: 10
  },
  circularImg: {
    height: 36,
    width: 36
  },
  brandTxtStyle: {
    padding: 10,
    fontSize: 14,
    fontFamily: "verdana",
    alignSelf: "flex-start"
  },
  btnStyle: {
    backgroundColor: "#E77E23",
    borderRadius: 30,
    height: 40,
    width: "70%",
    fontFamily: "geometriaBold",
    alignSelf: "flex-end",
    justifyContent: "center"
  },

  btnText: {
    alignSelf: "center",
    color: "white",
    fontSize: 12
  },
  bottomBtn: {
    width: "18%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 10,
    borderTopEndRadius: 75,
    backgroundColor: "#1F2533",
    zIndex: 6,
    position: "absolute",
    bottom: 0
  }
});
