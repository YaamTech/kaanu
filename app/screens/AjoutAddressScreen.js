'use strict'

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
  StyleSheet
} from 'react-native';
import Realm from '../models/Realm'
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import AddButton from '../components/AddButton'

class AjoutAddressScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      addressName: "",
      words: ""
    }
  }

  render(){

    return(
      <ViewContainer>
       <StatusBar title="Ajouter une adresse à votre répertoire"/>
       <View style={styles.inputs}>
           <TextInput
              style={styles.textEditAddressName}
              onChangeText={(addressName) => this.setState({addressName})}
              value={this.state.addressName}
           />

           <Text
            style={styles.textBelow}>
           Donnez un nom à cette addresse. {"\n"}Ex: Airtel Siege
           </Text>

           <TextInput
             style={styles.textEditWords}
             onChangeText={(words) => this.setState({words})}
             value={this.state.words}
           />
           <Text
            style={styles.textBelow}>
           Entrez l{"'"}addresse. Ex: nations.unies.airtel
           </Text>

       </View>
       <AddButton title="Ajouter" onPress={this.addAdress.bind(this)}/>
      </ViewContainer>
    )
  }

  addAdress(){
    // /check/:words
    fetch("https://kaanu-center.herokuapp.com/check/"+this.state.words, {
      method: 'GET',
      headers: {}
    })
    .then((response) =>{
      var anotherThis = this;
      var data = response.json()
      .then(function(json){
          var check_done = json["table"]
          if(check_done["answer"] == true){
            var addresses = check_done["addresses"]
            addresses = addresses.map(function(address){
              return address["ownerphone"];
            });
            console.log(addresses)

            //And add the data to Realm database
            Realm.write(()=>{
              Realm.create('Address', {addressName: anotherThis.state.addressName, addressWords: anotherThis.state.words, ownerPhone: addresses.toString()});
            });
            anotherThis.props.navigator.pop();
          }
          if(check_done["answer"] == false){
            //Alert to notify that this address does not exist
            var message = "Cette addresse n'"+"existe pas. Ou alors vous l'"+"avez mal entree";
            Alert.alert(
                'Probleme avec cette address',
                message,
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')}
                  ]
            )
          }
        });
    })
    .catch((error) => {
      console.log(error);
    });
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
  textEditWords: {
    marginLeft: 10,
    marginRight: 10,
    marginTop:90,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  inputs: {
    flex: 1
  },
  textBelow:{
    alignItems:"center",
    textAlign: "center",
    margin: 10
  }
});

module.exports = AjoutAddressScreen
