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
