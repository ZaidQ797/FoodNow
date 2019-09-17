import React, { Component } from "react";
import { Platform, StyleSheet, View, StatusBar } from "react-native";
import AppNaviator from "./src/screens/navigation/navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AppNaviator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
