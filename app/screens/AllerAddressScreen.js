'use strict'

import React, { Component } from 'react';
import {
  MapView,
  Text,
  StyleSheet
} from 'react-native';
import ActionButton from 'react-native-action-button'
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'

class AllerAddressScreen extends Component{
  constructor(props){
      super(props)
      this.state = {
        mapRegion: undefined
      }
  }

  render(){
    return(
      <ViewContainer>
       <StatusBar title="Aller a une address"/>
       <MapView
          region={this.state.mapRegion}
          style={styles.map}
        />
      </ViewContainer>
    )
  }

}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    marginTop: 10
  }
});

module.exports = AllerAddressScreen
