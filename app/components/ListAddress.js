'use strict'

import React, { Component } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet
 } from 'react-native';

class ListAddress extends Component{
  render(){
    return(
      <TouchableHighlight>
        <View style={styles.addressRow}>
          <Text>{this.props.addressName}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  addressRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  }
});
