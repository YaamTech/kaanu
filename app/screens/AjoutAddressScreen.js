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
       <StatusBar title="Ajouter une addresse"/>
       <View style={styles.inputs}>
           <TextInput
              style={styles.textEditAddressName}
              onChangeText={(text) => this.setState({text})}
              value={this.state.addressName}
           />

           <Text
            style={styles.textBelow}>
           Donnez un nom de cette addresse. {"\n"}Ex: Airtel Siege
           </Text>

           <TextInput
             style={styles.textEditWords}
             onChangeText={(text) => this.setState({text})}
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
    fetch("http://localhost:9393/"+CurPosCoords.latitude+"/"+CurPosCoords.longitude+"/"+this.state.ownerPhone+"/"+this.state.addressWords, {
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
    marginTop:40,
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  textEditWords: {
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
  textBelow:{
    alignItems:"center",
    textAlign: "center",
    margin: 10
  }
});

module.exports = AjoutAddressScreen
