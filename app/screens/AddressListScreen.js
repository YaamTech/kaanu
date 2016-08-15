'use strict'
// Press Cmd+R to reload
// Cmd+D or shake for dev menu

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Alert,
  View,
  ListView,
  Text
} from 'react-native';
import Realm from '../models/Realm'
import ViewContainer from '../components/ViewContainer'
import StatusBar from '../components/StatusBar'
import ListItem from '../components/ListItem'
import ActionButton from 'react-native-action-button'

// const addresses = [
//   {addressName: "My House", addressWords: "sankara.rue.douze", ownerPhone: "77898753"},
//   {addressName: "Airtel", addressWords: "nations.unies.airtel", ownerPhone: "50894532"}
// ]

const addresses = Realm.objects('Address');
// Realm.write(()=>{
//   Realm.delete(addresses);
// });

// Realm.write(()=>{
//   Realm.create('Address', {addressName: "Airtel", addressWords: "nations.unies.airtel", ownerPhone: "50894532"});
// });

class AddressListScreen extends Component {
  constructor(props){
      super(props);
  }

  render() {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      addressDataSource: ds.cloneWithRows(addresses)
    };

    return (
        <ViewContainer>
        //  <StatusBar title="Adresses"/>
         <ListView
            dataSource={this.state.addressDataSource}
            renderRow={(address) => { return this.renderAddressView(address)}}
            style={styles.listView} />
           <ActionButton buttonColor="rgba(36, 206, 132, 1)">

           <ActionButton.Item buttonColor="rgba(36, 206, 132, 1)"
             title="Besoin d'aide?"
             onPress={() => {return this.help()}} >
             <Text>Aide</Text>
           </ActionButton.Item>

           <ActionButton.Item buttonColor="rgba(36, 206, 132, 1)"
             title="Version beta"
             onPress={() => {return this.showBetaInfo()}} >
             <Text>Beta</Text>
           </ActionButton.Item>

              <ActionButton.Item buttonColor="rgba(36, 206, 132, 1)"
                title="Carnet d'adresses"
                onPress={() => {return this.ajouterAddress()}} >
                <Text>Carnet</Text>
              </ActionButton.Item>

              <ActionButton.Item buttonColor="rgba(36, 206, 132, 1)"
                title="Creer une adresse"
                onPress={() => {return this.creerAddress()}} >
                <Text>Creer</Text>
              </ActionButton.Item>
           </ActionButton>
        </ViewContainer>
    );
  }

  renderAddressView(address){
      return(
        <ListItem data={address}/>
      );
  }

  showBetaInfo(){

  }

  help(){

  }

  // allerA(){
  //   // In the render part
  //   // <ActionButton.Item buttonColor="rgba(36, 206, 132, 1)"
  //   //   title="Aller a"
  //   //   onPress={() => {return this.allerA()}}>
  //   //   <Text> Aller a </Text>
  //   // </ActionButton.Item>
  //   this.props.navigator.push({
  //     ident: "AllerAddressScreen"
  //   })
  // }

  ajouterAddress(){
    this.props.navigator.push({
      ident: "AjoutAddressScreen"
    })
  }

  creerAddress(){
    this.props.navigator.push({
      ident: "CreerAddressScreen"
    })

  }

}

const styles = StyleSheet.create({
  listView: {
    flex: 1
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

module.exports = AddressListScreen
