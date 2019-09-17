import React, { Component } from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import DrawerNavigator from "./DrawerNavigator";

// Import Auth Screen
import Registration from "../Register/Registration";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import VerifyAccount from "../verify/VerifyAccount";
import ForgotPassword from "../forgot/ForgotPassword";
// import TabNavigator from '../../screens/navigation/HomeTabNavigator';

const DrawerNavigation = createStackNavigator(
  {
    DrawerNavigator: {
      screen: DrawerNavigator,
    }
  },
  {
    initialRouteName: "DrawerNavigator",
    headerMode: "none"
  }
);

const AuthNavigator = createStackNavigator(
  {
    Registration: Registration,
    Signup: Signup,
    Login: Login,
    VerifyAccount: VerifyAccount,
    ForgotPassword: ForgotPassword
  },
  {
    initialRouteName: "Registration",
    headerMode: "none"
  }
);

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    MainTab: DrawerNavigation
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(MainNavigator);
