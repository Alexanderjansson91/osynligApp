import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';

import HeaderCaseInfoPage from './src/components/Header'
import MainViewCaseInfoPage from './src/components/MainView'
import HeadlineTextView from './src/components/HeadlineText'


class App extends React.Component {

  renderSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  };

  render() {
    return (

      <View style={styles.topContainer}>
        <HeaderCaseInfoPage headerText="Nordic dental" infoText="Profil" />
        <MainViewCaseInfoPage></MainViewCaseInfoPage>
          <View style={styles.container}>
          <HeadlineTextView headerText="Nytt ärende"/>
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





