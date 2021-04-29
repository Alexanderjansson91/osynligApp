import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

const Home = ({navigation}) => {
    return (
        <View >
           <Button title="Starta" onPress={() => navigation.navigate("New")} />

            
        </View>
    )}
    export default Home;

    const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});