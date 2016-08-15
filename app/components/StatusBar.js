'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
 } from 'react-native';

class StatusBar extends Component{
  render(){
    return(
          <View style={styles.statusBar}>
            <Text style ={styles.navBarTitle}>
              {this.props.title}
            </Text>
          </View>

    );

  }

}

const styles = StyleSheet.create({
  statusBar: {
    alignItems: 'center',
    backgroundColor: '#24CE84',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    justifyContent: 'center',
    borderWidth: 1,
    height: 45,
    flexDirection: 'row'
  },
  navBarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10
  }
});

module.exports = StatusBar
