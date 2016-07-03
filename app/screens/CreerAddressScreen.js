'use strict'

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import AddButton from '../components/AddButton'

class CreerAddressScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      addressName: "",
      ownerPhone: "",
      initialPosition: 'unknown'
    };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
      }
    );
  }

  render(){
    return(
      <ViewContainer>
       <StatusBar title="Creer une address"/>
       <View style={styles.inputs}>
         <TextInput
            style={styles.textEditAddressName}
            autoCapitalize="none"
            onChangeText={
              (addressName) => {this.setState({addressName})}
            }
            value={this.state.addressName}
            placeholder="Entrez le nom de cette addresse. Ex: Ma maison"
         />

         <TextInput
           style={styles.textEditOwnerPhone}
           onChangeText={(ownerPhone) => this.setState({ownerPhone})}
           value={this.state.ownerPhone}
           placeholder="Entrez le numero de ce telephone. Ex: +22676898321"
         />
       </View>
       <AddButton title="Creer"
          onPress={this.creerAddress.bind(this)}/>
      </ViewContainer>
    )
  }

  creerAddress(){
    var CurPosCoords = this.state.initialPosition.coords;
    // var lat = '51.521251'
    // var lng = '-0.203586'
    
    fetch('https://api.what3words.com/v2/reverse?coords='+CurPosCoords.latitude+','+CurPosCoords.longitude+'&key=OO133IOY', {
      method: 'GET',
      headers: {}
    })
    .then((response) =>{
      var data = response.json().then(
        function(json){
          console.log(json.words)
        }
      );
    })
    .catch((error) => {
      console.log(error);
    });
    //CurPosCoords.latitude, CurPosCoords.longitude
    //console.log(lat, lng);

  }

}

const styles = StyleSheet.create({
  textEditAddressName: {
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  textEditOwnerPhone: {
    marginLeft: 10,
    marginRight: 10,
    marginTop:80,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  inputs: {
    flex: 1
  }
});

module.exports = CreerAddressScreen
