import React from 'react';
import {StyleSheet} from 'react-native';
export const styles=StyleSheet.create({
    imageContainer:{
        flex:1,
        display:'flex'
    },
    image:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'cover'
    },
    loginContainer:{
        flex:0.70,
        // height:'100%',
        // width:'100%',
       alignItems:'center',
       justifyContent: 'flex-end',
    },
    loginBtn:{
        margin:10,
        backgroundColor:'#E77E23',
        padding:13,
        borderRadius: 30,
        width:'75%',
        fontFamily:'geometriaBold',
        textAlign:'center',
    },
    loginBtnTxt:{
        color:'white',
        fontFamily:'geometriaLight',
        fontWeight:'500',
        textAlign:'center',
        fontSize:15
    },
    footerContainer:{
        flex:0.30,
        justifyContent:'center',
        alignItems  :'center',
        marginTop: 10,
    },
    socialMainContainer:{
        
       flexDirection:'row',
       
     },
     iconContainer:{
        margin:10,
        flex:0.2,
        
        // backgroundColor:'#E77E23',
        padding:5,
        borderRadius: 30,
        
     },
     iconStyle:{
         color:'white',
         textAlign:'center',
         fontSize:22,
         fontWeight:'bold'
     }
}) 