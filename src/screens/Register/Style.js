import React from 'react';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/Fonts'

export const styles=StyleSheet.create({
    mainContainer:{
       flex:1,

    },
    imageContainer:{
        flex:1,
        
    },
    image:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'cover'
    },
    detailsContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    headerContainer:{
        flex:0.50,
        alignItems:'flex-end',
       justifyContent: 'flex-end',
    },
    heading:{
        margin:20,
        fontFamily:Fonts.Romany,
        fontSize:40,
        color:'white',
        alignSelf:'center',
      
    },
    buttonContainer:{
        flex:0.50,
        justifyContent:'center',
        alignItems:'center'
    
    },
    signUpBtn:{
        margin:10,
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
        borderRadius: 30,
        width:'75%',
        
        
    },
    signUpBtnTxt:{
        color:'#E9962E',
       fontWeight:'500',
       
       
      
    },
    LogInBtn:{
        margin:10,
        backgroundColor:'#4C4C4C',
        padding:10,
        alignItems:'center',
        borderRadius: 30,
        width:'75%'
    },
    LogInBtnTxt:{
        color:'#E9962E',
        fontWeight:'500',
    }

}) 