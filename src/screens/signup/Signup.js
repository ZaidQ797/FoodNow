import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import GetImage from "../../assets/GetImage";
import { styles } from "./Style";
import InputField from "../../components/InputField";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";

//FireBase
import firebaseService from "../../service/firebase";

class Signup extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    confPassword: "",
    loading: false
  };
  handleUserNameChange = text => {
    this.setState({ userName: text });
  };
  handleEmailChange = text => {
    this.setState({ email: text });
  };
  handlePasswordChange = text => {
    this.setState({ password: text });
  };
  handleConfPasswordChange = text => {
    this.setState({ confPassword: text });
  };

  toggleLoading = () => {
    this.setState(prevState => {
      loading: !this.state.loading;
    });
  };

  handleSignupOnPress = () => {
    this.toggleLoading();
    const { email, password } = this.state;
    firebaseService
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.saveUserInfo();
      })
      .catch(err => {
        this.toggleLoading();
        alert(err);
      });
  };

  saveUserInfo = () => {
    const { userName, email, password } = this.state;
    const { navigate } = this.props.navigation;
    const uid = firebaseService.auth().currentUser.uid;
    const params = {
      username: userName,
      email: email,
      password: password
    };
    //firebaseService.database().ref('/Users').push(params)
    firebaseService
      .database()
      .ref("/Users")
      .child(uid)
      .set(params)
      .then(res => {
        this.toggleLoading();
        navigate("Login");
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {

    return (
      <ImageBackground
        style={styles.imageContainer}
        source={GetImage("Transparent")}
      >
        {
          this.state.loading && (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator color={"red"} size={"large"} />
          </View>
        )}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.SignupContainer}>
            <InputField
              placeholder="Username"
              value={this.state.username}
              onChangeText={text => this.handleUserNameChange(text)}
            />
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
            <InputField
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={this.state.confPassword}
              onChangeText={text => this.handleConfPasswordChange(text)}
            />
            <TouchableOpacity
              style={styles.signUpBtn}
              activeOpacity={0.8}
              onPress={() => this.handleSignupOnPress()}
              activeOpacity={0.8}
            >
              <Text style={styles.signUpBtnTxt}>Signup</Text>
            </TouchableOpacity>
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
                  <Zocial name="google" style={[, styles.iconStyle]} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Signup;
