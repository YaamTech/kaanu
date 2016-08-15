'use strict'

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import Realm from '../models/Realm'
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import AddButton from '../components/AddButton'

class CreerAddressScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      addressName: "",
      ownerPhone: "",
      addressWords:"",
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
       <StatusBar title="Créer une adresse"/>
       <View style={styles.inputs}>
         <TextInput
            style={styles.textEditAddressName}
            autoCapitalize="none"
            onChangeText={
              (addressName) => {this.setState({addressName})}
            }
            value={this.state.addressName}
         />
         <Text
          style={styles.textBelow}>
         Entrez le nom de cette addresse ci-dessus. {"\n"} Ex: Ma maison
         </Text>

         <TextInput
           style={styles.textEditOwnerPhone}
           onChangeText={(ownerPhone) => this.setState({ownerPhone})}
           value={this.state.ownerPhone}
         />
         <Text
          style={styles.textBelow}>
         Entrez le numero de ce telephone. Le code du pays est important. {"\n"} Ex: +22676898321
         </Text>

         <TextInput
           style={styles.textEditOwnerPhone}
           onChangeText={(addressWords) => this.setState({addressWords})}
           value={this.state.addressWords}
         />
         <Text
          style={styles.textBelow}>
          Entrez 3 mots de votre choix comme addresse. Votre addresse doit etre unique. {"\n"} Ex: peace.wakat.fan
        </Text>

       </View>
       <AddButton title="Creer"
          onPress={() => {return this.creerAddress()}}/>
      </ViewContainer>
    )
  }

  creerAddress(){
    var CurPosCoords = this.state.initialPosition.coords;
    // var lat = '51.521251'
    // var lng = '-0.203586'
    ///:lat/:lng/:phone/:words
    //addressName, ownerPhone, addressWords
    fetch("https://kaanu-center.herokuapp.com/"+CurPosCoords.latitude+"/"+CurPosCoords.longitude+"/"+this.state.ownerPhone+"/"+this.state.addressWords, {
      method: 'GET',
      headers: {}
    })
    .then((response) =>{
      var anotherThis = this;
      var data = response.json()
      .then(function(json){
          if(json == "ok"){
            //Cannot create anymore from this phone (maybe will not add)
            //And add the data to Realm database
            //console.log(this.state.addressName, this.state.addressWords, this.state.ownerPhone)
            Realm.write(()=>{
              Realm.create('Address', {addressName: anotherThis.state.addressName, addressWords: anotherThis.state.addressWords, ownerPhone: anotherThis.state.ownerPhone});
            });
            anotherThis.props.navigator.pop();
            console.log("Data added");
          }
          if(json == "not ok"){
            console.log("not ok")
          }
          if(json == "Exist"){
            console.log("Exist")
          }
        });
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
    marginTop:50,
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
  },
  textBelow: {
    alignItems:"center",
    textAlign: "center",
    margin: 10
  }
});

module.exports = CreerAddressScreen
