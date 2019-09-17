import React, { Component } from 'react';
import { View,Text, Image,ScrollView,TouchableOpacity} from 'react-native';
import { styles } from "./Style";
import GetImage from '../../assets/GetImage';
import InputField from '../../components/InputField'


class ForgotPassword extends Component {
  handleResetOnPress=()=>{
    const {navigate}=this.props.navigation;
    navigate('VerifyAccount');
  }
  
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
               <View style={styles.headingText}><Text style={styles.textSize}>Forgot
                </Text>
                <Text style={styles.textSize}>Your Password?
                </Text></View>
               <View style={styles.detailText}><Text>Enter your email below to receive </Text>
                <Text>the instruction to reset your</Text> 
                <Text>password.</Text></View>
               </View>
               <View style={styles.emailContainer}>
               <InputField placeholder="Email Address" />
               <TouchableOpacity style={styles.sendPasswordBtn} 
               onPress={()=>this.handleResetOnPress()}
               activeOpacity={0.8}>
              <Text style={styles.sendPasswordText}>RESET PASSWORD</Text>
            </TouchableOpacity>
               
               </View>
            
        </ScrollView>
        
      </View>
    );
  }
}

export default ForgotPassword;
