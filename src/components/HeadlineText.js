
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//My header View
const HeadlineText = (props)=> {
    const {headlineContainer, viewContainer } = styles;
    return(
        <View style={viewContainer}>  
            <Text style={headlineContainer}>
                {props.headerText}
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
    headlineContainer:{
        fontSize:30,
        marginLeft: 20,
        color:"#875195",
        fontWeight: "bold"
    }

});

export default HeadlineText;