import React, { Component } from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Location from "../../screens/location/Location";
import Cart from "../../screens/cart/Cart";
import Notification from "../../screens/notification/Notification";
import Ionicons from "react-native-vector-icons/Ionicons";
// Drawer Custom Component...
import { CustomContentDrawer } from "./DrawerComponent";
// MainTopTab for Drawer Home item...
import MainTopTab from "../../screens/navigation/HomeTabNavigator";

import Entypo from "react-native-vector-icons/Entypo";
import * as themes from "../../themes";

const LocationNavigator = createStackNavigator(
  {
    Location: {
      screen: Location,
      navigationOptions: ({ navigation }) => ({
        title: "Location",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: themes.colors.colorPrimary
        },
        headerLeft: (
          <Entypo
            onPress={() => navigation.openDrawer()}
            name="menu"
            style={{ fontSize: 24, paddingLeft: 10, color: "white" }}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Location"
  }
);
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: MainTopTab,
      navigationOptions: ({ navigation }) => ({
        title: "Food Now",
        headerTintColor: "white",
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          backgroundColor: themes.colors.colorPrimary
        },
        headerLeft: (
          <Entypo
            onPress={() => navigation.openDrawer()}
            name="menu"
            style={{ fontSize: 24, paddingLeft: 10, color: "white" }}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);
const CartNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: ({ navigation }) => ({
        title: "Cart",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: themes.colors.colorPrimary
        },
        headerLeft: (
          <Entypo
            onPress={() => navigation.openDrawer()}
            name="menu"
            style={{ fontSize: 24, paddingLeft: 10, color: "white" }}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Cart"
  }
);
const NotifNavigator = createStackNavigator(
  {
    Notification: {
      screen: Notification,
      navigationOptions: ({ navigation }) => ({
        title: "Notification",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: themes.colors.colorPrimary
        },
        headerLeft: (
          <Entypo
            onPress={() => navigation.openDrawer()}
            name="menu"
            style={{ fontSize: 24, paddingLeft: 10, color: "white" }}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Notification"
  }
);

export default createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={"ios-home"} size={25} color={tintColor} />
        )
      }
    },
    Location: {
      screen: LocationNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={"ios-pin"} size={25} color={tintColor} />
        )
      }
    },

    Cart: {
      screen: CartNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={"ios-cart"} size={25} color={tintColor} />
        )
      }
    },
    Notification: {
      screen: NotifNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name={"ios-notifications-outline"}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Notification: {
      screen: NotifNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name={"ios-notifications-outline"}
            size={25}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    drawerLockMode: "unlocked",
    drawerBackgroundColor: "white",
    drawerPosition: "left",
    contentComponent: CustomContentDrawer
  },

  {
    contentComponent: {
      activeTintColor: "#E77E23"
    }
  }
);
