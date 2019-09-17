import React, { Component } from 'react';
import { View,Text, Image,ScrollView,TouchableOpacity} from 'react-native';
import { styles } from "./Style";
import GetImage from '../../assets/GetImage';
import InputField from '../../components/InputField'


class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
          <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}> 
          <View style={styles.header}>
            <Image source={GetImage('Lock')} resizeMode="cover" style={{height:80,width:80}}/>
            </View>
            <View style={styles.body}>
               {/* <View style={styles.headingText}><Text style={styles.textSize}>Forgot
                </Text>
                <Text style={styles.textSize}>Your Password?
                </Text></View> */}
               <View style={styles.detailText}><Text>Enter the code you have received </Text>
                <Text>by Email in order to verify your</Text> 
                <Text>account.</Text></View>
               </View>
               <View style={styles.codeContainer}>
               <InputField placeholder="Verification Code" />
               <TouchableOpacity style={styles.verifyAccountBtn} activeOpacity={0.8}>
              <Text style={styles.verifyAccountText}>Verify Account</Text>
            </TouchableOpacity>
               
               </View>
            
        </ScrollView>
        
      </View>
    );
  }
}

export default ForgotPassword;
