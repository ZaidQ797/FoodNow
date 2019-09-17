import React from 'react';
import {StyleSheet,Picker} from 'react-native';
const  CustomPicker=()=>{
      return(  
    <Picker style={styles.input} selectedValue="Select Country">
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
    </Picker>
      )
}
const styles=StyleSheet.create({
input:{
    margin:10,
    backgroundColor:'#e8f0ff',
    padding:10,
    borderWidth:1,   
    borderRadius: 50,
    width:'75%',
    overflow:'hidden',
    fontFamily:'geometriaBold',
    textAlign:'center',
    
    // justifyContent:'center',
    // alignItems:'center'
    

  
    
}
});
export default CustomPicker