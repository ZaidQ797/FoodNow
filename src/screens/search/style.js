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
    pickerContainer:{
        flex:0.60,
        // height:'100%',
        // width:'100%',
       alignItems:'center',
       justifyContent: 'flex-end',
    },
    searchBtn:{
        margin:10,
        backgroundColor:'#E77E23',
        padding:13,
        borderRadius: 30,
        width:'75%',
        fontFamily:'geometriaBold',
        textAlign:'center',
    },
    searchBtnText:{
        color:'white',
        fontFamily:'sofiapro',
        fontWeight:'500',
        textAlign:'center',
        fontSize:15
    },
    
}) 