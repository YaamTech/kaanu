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
          <View style={styles.navBar}>
            <Text style ={styles.navBarTitle}>
              {this.props.title}
            </Text>
          </View>
        </View>

    );

  }

}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white',
    height: 30
  },
  navBar: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    justifyContent: 'center',
    borderWidth: 1,
    height: 48,
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
