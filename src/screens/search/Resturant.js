import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import GetImage from "../../assets/GetImage";
import { styles } from "./style";
import CustomPicker from "../../components/CustomPicker";
class Resturant extends Component {

  render() {
    return (
      <ImageBackground
        style={styles.imageContainer}
        source={GetImage("Transparent")}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
        >
        
      <View style={styles.pickerContainer}>
            <CustomPicker />
            <CustomPicker/>
            <CustomPicker />
            <TouchableOpacity style={styles.searchBtn} activeOpacity={0.8} 
           
            activeOpacity={0.8}>
              <Text style={styles.searchBtnText}>Search</Text>
            </TouchableOpacity>
          </View>
         </ScrollView>
      </ImageBackground>
    );
  }
}

export default Resturant;
