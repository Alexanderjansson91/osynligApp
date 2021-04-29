
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//My header View
const SubTitle = (props)=> {
    const {subtitleContainer, viewContainer } = styles;
    return(
        <View style={viewContainer}>  
            <Text style={subtitleContainer}>
                {props.subTitleText}
            </Text>
            </View>
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
       backgroundColor: '#ffffff',
       alignItems:'center',
       justifyContent:'center'

    },
    subtitleContainer:{
        fontSize:22,
        marginLeft: 20,
        color:"#875195",       
    }

});

export default SubTitle;