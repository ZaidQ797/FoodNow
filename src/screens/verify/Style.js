import React from 'react';
import {StyleSheet} from 'react-native';
export const styles=StyleSheet.create({
  mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        flex:0.5,
        alignItems: 'center',
        justifyContent:'center'
    },
    body:{
        flex:0.3,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
        
      
    },
  detailText:{
        justifyContent:'center',
        alignItems:'center'
    },
    codeContainer:{
        flex:0.2,
        alignItems:'center',
        marginTop:10
    },
    verifyAccountBtn:{
        margin:10,
        backgroundColor:'#E77E23',
        padding:13,
        borderRadius: 30,
        width:'75%',
        fontFamily:'geometriaBold',
        textAlign:'center',
    },
    verifyAccountText:{
        color:'white',
        fontFamily:'geometriaLight',
        fontWeight:'500',
        textAlign:'center',
        fontSize:15
    },
    
}) 