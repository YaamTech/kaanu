'use strict'
import Realm from 'realm';
import AddressesSchema from './Addresses'
import CreateOwnAddressSchema from './CreateOwnAddress'


var r = new Realm({
  schema: [AddressesSchema, CreateOwnAddressSchema],
  schemaVersion: 4
});

module.exports = r
