import React, { Component } from 'react';
import { View,Text, Image,ScrollView,TouchableOpacity} from 'react-native';
import { styles } from "./Style";
import GetImage from '../../assets/GetImage';
class BestResturant extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
          <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}> 
          <View style={styles.badgeContainer}>
            <Image source={GetImage('Badge')} resizeMode="cover" style={{height:100,width:100}}/>
            </View>
            <View style={styles.body}>
               <View style={styles.headingText}><Text style={styles.textSize}>Eat from the best
                </Text>
                <Text style={styles.textSize}>resturants
                </Text></View>
               <View style={styles.detailText}><Text>Access all the best resturants</Text>
                <Text>arround you and enjoy their</Text> 
                <Text>cusines at home</Text></View>
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

export default BestResturant;
