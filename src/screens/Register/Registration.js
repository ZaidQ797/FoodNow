import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import GetImage from "../../assets/GetImage";
import { styles } from "./Style";
import { Fonts } from "../../utils/Fonts";

import firebaseService from '../../service/firebase'

class Registration extends Component {


  componentDidMount(){
    firebaseService.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.navigation.navigate('Home')
      }
    })
  }
  
  hanldeSignupOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Signup");
  };

  hanldeLoginOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("Login");
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={GetImage("Register")}
          style={[styles.imageContainer, styles.image]}
        >
          <View style={styles.detailsContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.heading}>Food Now</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.signUpBtn}
                activeOpacity={0.8}
                onPress={() => this.hanldeSignupOnPress()}
              >
                <Text style={styles.signUpBtnTxt}>SIGN UP </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.LogInBtn}
                activeOpacity={0.8}
                onPress={() => this.hanldeLoginOnPress()}
              >
                <Text style={styles.LogInBtnTxt}>LOGIN IN </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Registration;
