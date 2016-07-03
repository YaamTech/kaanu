'use strict'

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import AddButton from '../components/AddButton'

class AjoutAddressScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      addressName: "",
      words: ""
    }
  }

  render(){

    return(
      <ViewContainer>
       <StatusBar title="Ajouter une addresse"/>
       <View style={styles.inputs}>
           <TextInput
              style={styles.textEditAddressName}
              onChangeText={(text) => this.setState({text})}
              value={this.state.addressName}
              placeholder="Donnez un nom de cette addresse. Ex: Airtel Siege"
           />

           <TextInput
             style={styles.textEditWords}
             onChangeText={(text) => this.setState({text})}
             value={this.state.words}
             placeholder="Entrez l'addresse. Ex: nations.unies.airtel"
           />
       </View>
       <AddButton title="Ajouter" onPress={this.addAdress.bind(this)}/>
      </ViewContainer>
    )
  }

  addAdress(){

  }

}

const styles = StyleSheet.create({
  textEditAddressName: {
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  textEditWords: {
    marginLeft: 10,
    marginRight: 10,
    marginTop:80,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  inputs: {
    flex: 1
  }
});

module.exports = AjoutAddressScreen
