'use strict'
// Press Cmd+R to reload
// Cmd+D or shake for dev menu

import React, { Component } from 'react';

import {
  Navigator,
} from 'react-native';

import AddressListScreen from '../screens/AddressListScreen'
import AddressListScreenWithoutCreate from '../screens/AddressListScreenWithoutCreate'
import AjoutAddressScreen from '../screens/AjoutAddressScreen'
import CreerAddressScreen from '../screens/CreerAddressScreen'
import ChercherAddressScreen from '../screens/ChercherAddressScreen'

class AppNavigator extends Component {

  renderScreen(route, navigator){
    var globalNavigatorProps = { navigator }
    switch (route.ident) {
      case "AddressListScreen":
        return (
          <AddressListScreen
            {...globalNavigatorProps}
          />
        )
      case "AddressListScreenWithoutCreate":
      return (
          <AddressListScreenWithoutCreate
            {...globalNavigatorProps}
          />
        )
      case "AjoutAddressScreen":
        return (
          <AjoutAddressScreen
            {...globalNavigatorProps}
          />
        )
      case "CreerAddressScreen":
        return (
          <CreerAddressScreen
            {...globalNavigatorProps}
          />
        )
      case "ChercherAddressScreen":
        return (
          <ChercherAddressScreen
            {...globalNavigatorProps}
          />
        )
    }

  }

  render() {

    return (
        <Navigator
          initialRoute={this.props.initialRoute}
          renderScene={this.renderScreen}
        />
    );
  }
}

module.exports = AppNavigator
