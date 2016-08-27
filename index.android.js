'use strict'

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

import AppNavigator from './app/navigation/AppNavigator'
import Realm from './app/models/Realm'
import AddressListScreen from './app/screens/AddressListScreen'

const ownAddress = Realm.objects('CreateOwnAddress');

class kaanu extends Component {

  render() {
    return (
        <AppNavigator
          initialRoute={{ident: "AddressListScreen"}}
          />
    );
  }
}

const styles = StyleSheet.create({

});


AppRegistry.registerComponent('kaanu', () => kaanu);
