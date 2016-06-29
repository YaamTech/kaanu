'use strict'

import React, { Component } from 'react';
import {
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import AddButton from '../components/AddButton'

class CreerAddressScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      addressName: "",
      ownerPhone: ""
    }
  }

  render(){
    return(
      <ViewContainer>
       <StatusBar title="Creer une address"/>
       <View>
       <TextInput
          style={styles.textEditAddressName}
          onChangeText={(text) => this.setState({text})}
          value={this.state.addressName}
          placeholder="Entrez le nom de cette addresse"
       />

       <TextInput
         style={styles.textEditOwnerPhone}
         onChangeText={(text) => this.setState({text})}
         value={this.state.ownerPhone}
         placeholder="Entrez le numero de telephone du proprietaire de l'addresse"
       />
       </View>
       <AddButton title="Creer"
          onPress={this.creerAddress.bind(this)}/>
      </ViewContainer>
    )
  }

  creerAddress(){

  }

}

const styles = StyleSheet.create({
  textEditAddressName: {
    marginTop:40,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  textEditOwnerPhone: {
    marginTop:80,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  createButton: {
    marginTop: 100
  }
});

module.exports = CreerAddressScreen
