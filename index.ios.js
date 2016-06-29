'use strict'
// Press Cmd+R to reload
// Cmd+D or shake for dev menu

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import AppNavigator from './app/navigation/AppNavigator'
import Realm from './app/models/Realm'

const ownAddress = Realm.objects('CreateOwnAddress');

class kaanu extends Component {

  render() {

    var defaultScreen;
    if(ownAddress.created){
      defaultScreen = {ident: "AddressListScreenWithoutCreate"}
    }
    else{
      defaultScreen = {ident: "AddressListScreen"}
    }

    return (
        <AppNavigator
          initialRoute={defaultScreen}
          />
    );
  }
}

const styles = StyleSheet.create({

});


AppRegistry.registerComponent('kaanu', () => kaanu);
