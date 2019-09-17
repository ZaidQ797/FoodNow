import React, { Component } from "react";
import { Image } from "react-native";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "../home/Home";
import Menu from "../menu/Menu";
import FoodDetails from "../foodDetail/FoodDetails";
import Items from "../Items/Items";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Order from "../../screens/order/Order";
import Location from "../../screens/location/Location";
import Cart from "../../screens/cart/Cart";
import DelieveryDetails from "../../screens/delievery-details/DelieveryDetails";
import Payment from "../../screens/payment-details/Payment";
import Reviews from "../../screens/reviews/Reviews";
import Places from "../../screens/places/Places";
const HomeTabNavigator = createStackNavigator(
  {
    Home: Home,
    FoodDetails: FoodDetails,
    Items: Items,
    Order: Order,
    Cart: Cart,
    DelieveryDetails: DelieveryDetails,
    Payment: Payment,
    Reviews: Reviews,
    Places: Places
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
const LocationTabNavigator = createStackNavigator(
  {
    Location: Location,
    Items: Items,
    Order: Order,
    Cart: Cart,
    DelieveryDetails: DelieveryDetails,
    Payment: Payment
  },
  {
    initialRouteName: "Location",
    headerMode: "none"
  }
);
const MenuTabNavigator = createStackNavigator(
  {
    Menu: Menu,
    Items: Items,
    Order: Order,
    Cart: Cart,
    DelieveryDetails: DelieveryDetails,
    Payment: Payment
  },
  {
    initialRouteName: "Menu",
    headerMode: "none"
  }
);

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeTabNavigator,
      navigationOptions: {
        tabBarIcon: (
          <Image
            source={require("../../assets/images/columnOne.png")}
            style={{ height: 22, width: 22 }}
          />
        )
      }
    },
    Menu: {
      screen: MenuTabNavigator,
      navigationOptions: {
        tabBarIcon: (
          <Image
            source={require("../../assets/images/columnTwo.png")}
            style={{ height: 24, width: 24 }}
          />
        )
      }
    },
    Location: {
      screen: LocationTabNavigator,
      navigationOptions: {
        tabBarIcon: <MaterialIcons name="location-on" color="red" size={30} />
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "#CFD8DC",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      },

      tabStyle: {
        backgroundColor: "#B0BEC5",
        height: 60
      }
    }
  }
);
