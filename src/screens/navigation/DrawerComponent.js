import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";
import * as themes from "../../themes";
export const CustomContentDrawer = props => (
  <SafeAreaView
    style={styles.mainContainer}
    forceInset={{ top: "always", horizontal: "never" }}
  >
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      automaticallyAdjustContentInsets={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.drawerHeaderContainer}>
        <Image
          source={require("../../assets/images/fajita.jpg")}
          resizeMode="cover"
          style={styles.profile_pic}
        />
        <View style={styles.profileNameTextStyle}>
          <Text style={styles.headerText}>Kathrine Langford</Text>
        </View>
      </View>
      <ScrollView style={styles.drawerItemsContainerStyle}>
        <DrawerItems {...props} />
      </ScrollView>
      {/* <View style={styles.bottomLogoContainer}>
        <Image
          source={require("../../assets/images/donuts.jpg")}
          resizeMode="contain"
          style={styles.bottomLogoStyle}
        />
      </View> */}
    </ScrollView>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  drawerHeaderContainer: {
    backgroundColor: themes.colors.colorPrimary,
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  profileNameTextStyle: {
    paddingTop: 8
  },
  drawerItemsContainerStyle: {
    backgroundColor: "white"
  },
  drawerHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 200
  },
  headerStyle: {
    width: "100%",
    height: 40,
    padding: 8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  profile_pic: {
    width: 100,
    height: 100,
    borderRadius: Platform.OS === "ios" ? 50 : 100
  },
  bottomLogoContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  bottomLogoStyle: {
    height: 120,
    width: 120,
    bottom: 0,
    alignSelf: "center"
  }
});
