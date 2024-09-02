const { getAllContacts, getContactById } = require('../services/contactsService');

async function getContacts(req, res) {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

async function getContact(req, res) {
  const contact = await getContactById(req.params.contactId);
  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${req.params.contactId}!`,
    data: contact,
  });
}

module.exports = { getContacts, getContact };
