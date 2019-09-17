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
  detailView: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between"
  },
  brandTxtStyle: {
    padding: 10,
    width: "50%",
    fontSize: 18,
    fontFamily: "verdana"
  },
  btnStyle: {
    backgroundColor: "#E77E23",
    borderRadius: 30,
    width: "40%",
    fontFamily: "geometriaBold",
    justifyContent: "center"
  },

  btnText: {
    alignSelf: "center",
    color: "white",
    fontSize: 14
  },
  bottomBtn: {
    width: "18%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingTop: 10,
    borderTopEndRadius: 75,
    backgroundColor: "#1F2533",
    zIndex: 6,
    position: "absolute",
    bottom: 0
  }
});
