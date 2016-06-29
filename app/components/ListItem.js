'use strict'

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
 } from 'react-native';

 class ListItem extends Component{
   render(){
     return(
       <View style={styles.addressRow}>
         <TouchableOpacity>
           <Text>{this.props.data.addressName}</Text>
         </TouchableOpacity>
       </View>
     );
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


module.exports = ListItem
