
import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import {enableScreens} from "react-native-screens";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "react-native-screens/native-stack";

enableScreens()

import HeaderCaseInfoPage from './src/components/Header'
import MainViewCaseInfoPage from './src/components/MainView'
import HeadlineTextView from './src/components/HeadlineText'
import SubTitleTextView from './src/components/SubTitle'
import Home from './src/components/screens/Home'
import NewTask from './src/components/screens/NewTask'


class App extends React.Component {

  renderSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  };

 


  render() {

    const Stack = createNativeStackNavigator()




    return (

      <View style={styles.topContainer}>
        <HeaderCaseInfoPage headerText="" infoText="Profil" />
        <MainViewCaseInfoPage></MainViewCaseInfoPage>
        
      
          <View style={styles.container}>
       
          <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen 
          options = {{headerLargeTitle:true}}
          name="New" component={NewTask} />
          </Stack.Navigator>
          </NavigationContainer>


          <HeadlineTextView headerText="Nytt ärende"/>
          <SubTitleTextView subTitleText="Tänk på följande vid fotograferingen" />
            <View style={styles.listContainer}>

              <FlatList
                data={[
                  { key: 'Bra ljus i rummet.' }, 
                  { key: 'Bra vinkel' }, 
                  { key: 'Vit bakrund' }, 
                  { key: 'Osäker, se exempel på respektive sida' },
                ]}
                renderItem={({ item }) =>
                  <Text style={styles.item}
                    >{item.key}</Text>}
                ItemSeparatorComponent={this.renderSeparator}
              />
            </View>
     

          </View>
     
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,

  },
  topContainer: {
    backgroundColor: '#fff',
    flex: 1,

  },

  listContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#000000',
    alignItems:'center',
    justifyContent:'center',
  },
  separator: {
    height: 1,
    width: "100%",
  }


});


export default App;





