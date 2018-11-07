'use strict';


import storage from '../lib/storage/memory.js';
// import storage from 'fileStorage';
// import storage from 'mongostuff';

// * Perform the following data validations on save and update:
//     * All fields are required
//     * `email` is a valid email address
//     * `role` is one of the following values: `user`, `editor`, `admin`

// * This model should contain the fields: _id, firstname, lastname, email, role



class Users {

  static findOne(id) {
    let query = { _id:id };
    return this.find(query);
  }

  static find(query) {
    return storage.find(query);
  }

  static save(data) {
    return storage.save(data);
  }

  static delete(id) {
    return storage.delete(id);
  }

  static put(id, data) {

    return storage.save(data);
  }

  static patch(id, data) {
    data._id = id;
    return storage.save(data);
  }

}

export default Users;

