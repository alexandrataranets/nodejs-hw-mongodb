const { Contact } = require('../models/contactModel');

async function getAllContacts() {
  return await Contact.find();
}

module.exports = { getAllContacts };

async function getContactById(contactId) {
    return await Contact.findById(contactId);
  }
  
  module.exports = { getAllContacts, getContactById };
  