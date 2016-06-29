'use strict'

import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'

class ChercherAddressScreen extends Component{
  render(){
    return(
      <ViewContainer>
       <StatusBar title="Chercher une address"/>
      </ViewContainer>
    )
  }


}

const styles = StyleSheet.create({

});

module.exports = ChercherAddressScreen
