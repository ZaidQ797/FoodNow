import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  bottomBtn: {
    width: "18%",
    height: 60,
    borderTopEndRadius: 75,
    backgroundColor: "#1F2533",

    zIndex: 6,
    position: "absolute",
    bottom: 0
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
