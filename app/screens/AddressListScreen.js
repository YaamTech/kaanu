'use strict'

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

const addresses = Realm.objects('Address');

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
         <StatusBar title="Votre répertoire d'adresses"/>
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
        <ListItem data={address}
        onPress={() => {return this.itemInfos(address)}}/>
      );
  }

  itemInfos(address){
    this.props.navigator.push({
      ident: "ItemInfosScreen",
      data: address
    })
  //  Alert.alert(
  //      'Ca marche',
  //      address,
  //        [
  //          {text: 'OK', onPress: () => console.log('OK Pressed')}
  //        ]
  //  )
  }


  showBetaInfo(){

  }

  help(){

  }

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
