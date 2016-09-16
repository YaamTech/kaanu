'use strict'

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
  StyleSheet,
  Navigator
} from 'react-native';
import Realm from '../models/Realm'
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import AddButton from '../components/AddButton'

const addresses = Realm.objects('Address');

class ItemInfosScreen extends Component{

  render(){
    return(
      <ViewContainer>
       <StatusBar title={this.props.data.addressName}/>
         <View style={styles.inputs}>

             <Text style={styles.addressWords}>
                {this.props.data.addressWords}
             </Text>

             <Text style={styles.ownerPhone}>
                {this.props.data.ownerPhone}
             </Text>

         </View>
       <AddButton title="Supprimer l'adresse" onPress={this.deleteAddress.bind(this)}/>
      </ViewContainer>
    )
  }

  deleteAddress(){

  }

}

const styles = StyleSheet.create({
  inputs: {
    flex: 1
  },
  addressWords:{
    alignItems:"center",
    textAlign: "center",
    marginTop: 30
  },
  ownerPhone:{
    alignItems:"center",
    textAlign: "center",
    marginTop: 60
  }
});

module.exports = ItemInfosScreen
