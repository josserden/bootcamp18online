// Imports
import 'material-icons/iconfont/material-icons.css';

import * as ContactsService from './js/service/contacts-service';
import { renderMarkup } from './js/template/renderMarkup';

// GET -> /contacts
// const getContacts = async () => {
//   try {
//     const contacts = await ContactsService.fetchContacts();

//     renderMarkup(contacts);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getContacts();

// GET -> /contacts/:id
// const getContact = async () => {
//   try {
//     const contact = await ContactsService.getContact(10);

//     console.log(contact);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getContact();

// POST -> /contacts
// const contact = {
//   name: 'Ellie',
//   email: 'Ellie@mail.com',
//   number: '655-496-6787',
// };

// const createContact = async () => {
//   try {
//     const newContact = await ContactsService.createContact(contact);
//     console.log(newContact);
//   } catch (error) {
//     console.error(error);
//   }
// };
// createContact();

// PUT -> /contacts/:id
// const contact = {
//   name: 'Kylie Miller',
// };

// const updateContact = async () => {
//   try {
//     const updatedContact = await ContactsService.updateContact(10, contact);

//     console.log(updatedContact);
//   } catch (error) {
//     console.error(error);
//   }
// };

// updateContact();

// DELETE /contacts/:id
// const removeContact = async () => {
//   try {
//     const deletedContact = await ContactsService.removeContact(10);

//     console.log(deletedContact);
//   } catch (error) {
//     console.error(error);
//   }
// };
// removeContact();
