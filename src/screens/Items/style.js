import { StyleSheet } from "react-native";
export const mystyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    
        justifyContent: "center"
      },
      itemsContainer: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
      },
      circualView: {
        width: 130,
        height: 130,
        borderRadius: 75,
        backgroundColor: "#e8f0ff",
        alignItems: "center",
        justifyContent: "center"
      },
      circularImg: {
        height: 50,
        width: 50
      }

});
