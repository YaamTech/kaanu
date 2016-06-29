'use strict'

import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import AddButton from '../components/AddButton'

class AjoutAddressScreen extends Component{
  render(){

    return(
      <ViewContainer>
       <StatusBar title="Ajouter une addresse"/>
       <AddButton title="Ajouter" onPress={this.addAdress.bind(this)}/>
      </ViewContainer>
    )
  }

  ajoutAddress(){
    this.props.navigator.push({
      ident: "AjoutAddressScreen"
    })

  }

  addAdress(){
    Alert.alert(
      'Choisissez ...',
      null,
      [
          {
            text: 'Creer une nouvelle addresse',
            onPress: () => {}
          },
          {
            text: 'Ajouter une addresse existante',
            onPress: () => {this.ajoutAddress()}
          },
          {
            text: 'Quitter',
            onPress: () => {console.log('Cancel')}
          },
      ],
      null
    );
  }

}

const styles = StyleSheet.create({

});

module.exports = AjoutAddressScreen
