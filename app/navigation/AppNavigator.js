'use strict'

import React, { Component } from 'react';

import {
  Navigator,
} from 'react-native';

import AddressListScreen from '../screens/AddressListScreen'
import AjoutAddressScreen from '../screens/AjoutAddressScreen'
import CreerAddressScreen from '../screens/CreerAddressScreen'
import AllerAddressScreen from '../screens/AllerAddressScreen'

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
      case "AllerAddressScreen":
        return (
          <AllerAddressScreen
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
