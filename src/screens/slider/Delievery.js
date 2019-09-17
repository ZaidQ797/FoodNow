import React, { Component } from 'react';
import { View,Text, Image,ScrollView,TouchableOpacity} from 'react-native';
import { styles } from "./Style";
import GetImage from '../../assets/GetImage';
class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
          <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}> 
          <View style={styles.badgeContainer}>
            <Image source={GetImage('MotorCycle')} resizeMode="cover" style={{height:120,width:120}}/>
            </View>
            <View style={styles.body}>
               <View style={styles.headingText}><Text style={styles.textSize}>Sit back,
                </Text>
                <Text style={[styles.textSize,{fontFamily:'veronicaScript'}]}>dinner is on the way
                </Text></View>
               <View style={styles.detailText}><Text>Get ready and comfortable</Text>
                <Text>wishlist our bikers bring your</Text> 
                <Text>meal at your door</Text></View>
               </View>
               <View style={styles.slidingContainer}>
               {/* <InputField placeholder="Email Address" /> */}
               <TouchableOpacity style={styles.sendPasswordBtn}>
              <Text style={styles.sendPasswordText}>ORDER NOW</Text>
            </TouchableOpacity>
               
               </View>
            
        </ScrollView>
        
      </View>
    );
  }
}

export default ForgotPassword;
