import 'material-icons/iconfont/material-icons.css';

import * as ContactsService from './js/service/contact.service';

// GET -> /contacts
// ContactsService.fetchContacts()
//   .then(contacts => console.log(contacts))
//   .catch(error => console.error(error.message));

// GET -> /contacts/:id
// ContactsService.getContact(1)
// .then(contact => console.log(contact))
// .catch(error => console.error(error.message));

// POST -> /contacts
// const newContact = {
//   name: 'Ellie',
//   email: 'Ellie@mail.com',
//   number: '655-496-6787',
// };

// ContactsService.createContact(newContact)
// .then(contact => console.log(contact))
// .catch(error => console.error(error.message));

// PUT -> /contacts/:id
// const updatedContact = {
//   name: 'Kylie Miller',
// };

// ContactsService.updateContact(10, updatedContact)
// .then(contact => console.log(contact))
// .catch(error => console.error(error.message));

// DELETE /contacts/:id

// ContactsService.removeContact(9)
//   .then(contact => console.log(contact))
//   .catch(error => console.error(error.message));

// const arrId = [9, 10, 11];
// const promises = arrId.map(id => removeContact(id));

// Promise.all(promises)
//   .then(data => data.forEach(res => console.log(res)))
//   .catch(err => console.error(err));

// Promise.all([ContactsService.removeContact(7), ContactsService.removeContact(8)])
//   .then(data => data.forEach(res => console.log(res)))
//   .catch(err => console.error(err));
