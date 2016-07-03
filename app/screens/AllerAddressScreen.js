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
        <ActionButton buttonColor="rgba(231,76,60,1)">
           <ActionButton.Item buttonColor="rgba(231,76,60,1)"
             title="Aller a"
             onPress={() => {}} >
             <Text> Aller a </Text>
           </ActionButton.Item>
           <ActionButton.Item buttonColor="rgba(231,76,60,1)"
             title="A parti de"
             onPress={() => {}} >
             <Text> A parti de </Text>
           </ActionButton.Item>
        </ActionButton>
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
