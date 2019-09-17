import React from 'react';
import {StyleSheet} from 'react-native';
export const styles=StyleSheet.create({
  mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        flex:0.3,
       
        alignItems: 'center',
        justifyContent:'center'
    },
    body:{
        flex:0.2,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'red'
        
      
    },
   textSize:{
        fontSize:22,
    },
    headingText:{
        justifyContent:'center',
        alignItems:'center',
        margin:15
    },
    detailText:{
        justifyContent:'center',
        alignItems:'center'
    },
    emailContainer:{
        flex:0.5,
        alignItems:'center',
        marginTop:10
    },
    sendPasswordBtn:{
        margin:10,
        backgroundColor:'#E77E23',
        padding:13,
        borderRadius: 30,
        width:'75%',
        fontFamily:'geometriaBold',
        textAlign:'center',
    },
    sendPasswordText:{
        color:'white',
        fontFamily:'geometriaLight',
        fontWeight:'500',
        textAlign:'center',
        fontSize:15
    },
    
}) 