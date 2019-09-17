import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import GetImage from "../../assets/GetImage";
import { styles } from "./Style";
import InputField from "../../components/InputField";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";


import firebaseService from '../../service/firebase'


class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleEmailChange = text => {
    this.setState({ email: text });
  };
  handlePasswordChange = text => {
    this.setState({ password: text });
  };
  handleForgotOnPress = () => {
    const { navigate } = this.props.navigation;
    navigate("ForgotPassword");
  };
  handleHomeOnPress = () => {
    const { navigate } = this.props.navigation;
    firebaseService.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((res) => {
        navigate("MainTab");
    }).catch(err => {
      alert(err)
    })
 
  };
  render() {
    return (
      <ImageBackground
        style={styles.imageContainer}
        source={GetImage("LoginBG")}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.loginContainer}>
            <InputField
              placeholder="Email Address"
              value={this.state.email}
              onChangeText={text => this.handleEmailChange(text)}
            />
            <InputField
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.handlePasswordChange(text)}
            />
            <TouchableOpacity
              style={styles.loginBtn}
              activeOpacity={0.8}
              onPress={() => this.handleHomeOnPress()}
            >
              <Text style={styles.loginBtnTxt}>LOG IN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text>Forgot Passowrd? </Text>
              <Text
                onPress={() => this.handleForgotOnPress()}
                style={{ color: "#E77E23" }}
              >
                Click Here
              </Text>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text>Or</Text>
            <View style={styles.socialMainContainer}>
              <TouchableOpacity
                style={[{ backgroundColor: "#3b5998" }, styles.iconContainer]}
              >
                <View>
                  <SimpleLineIcons
                    name="social-facebook"
                    style={styles.iconStyle}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[{ backgroundColor: "#00acee" }, styles.iconContainer]}
              >
                <View>
                  <SimpleLineIcons
                    name="social-twitter"
                    style={styles.iconStyle}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[{ backgroundColor: "#DD4B39" }, styles.iconContainer]}
              >
                <View>
                  <Zocial name="google" style={[styles.iconStyle]} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Login;
