'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
 } from 'react-native';

 class AddButton extends Component{
   render(){
     return(
        <View style={styles.addButton}>
          <TouchableHighlight
            underlayColor='#24CE84'
            onPress={this.props.onPress}>
            <Text style={styles.buttonText}>{this.props.title}</Text>
          </TouchableHighlight>
        </View>
     );
   }
 }


 const styles = StyleSheet.create({
   addButton:{
     backgroundColor: '#24CE84',
     borderColor: 'transparent',
     borderWidth: 1,
     paddingLeft: 16,
     paddingTop: 14,
     paddingBottom: 16
   },
   buttonText:{
     color: "#444",
     fontSize: 16,
     textAlign: 'center'
   }
 });


module.exports = AddButton
