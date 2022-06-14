// Imports
import 'material-icons/iconfont/material-icons.css';

import * as ContactsService from './js/service/contacts-service';
import { renderMarkup } from './js/template/renderMarkup';
import { getRefs } from './js/getRefs';

const { form, modal, contactsContainer, searchForm } = getRefs();

// Functions
const getContacts = async () => {
  try {
    const contacts = await ContactsService.fetchContacts();

    renderMarkup(contacts);
  } catch (error) {
    console.error(error);
  }
};

const handleSubmit = async event => {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get('name');
  const number = formData.get('number');
  const email = formData.get('email');

  try {
    await ContactsService.createContact({ name, number, email });

    form.reset();
    modal.hide(); // метод з bootstrap
  } catch (error) {
    console.error(error);
  }
};

const handleDeleteContact = async event => {
  const id = event.target.dataset.id;

  if (!id) return;

  try {
    await ContactsService.removeContact(id);
    await getContacts();
  } catch (error) {
    console.error(error);
  }
};

// Listeners
document.addEventListener('DOMContentLoaded', getContacts);
form.addEventListener('submit', handleSubmit);
contactsContainer.addEventListener('click', handleDeleteContact);

// Trash
searchForm.addEventListener('input', event => {
  const searchValue = event.target.value.trim().toLowerCase();
  const contacts = document.querySelectorAll('.js-card');

  const filteredContacts = [...contacts].filter(contact => {
    const name = contact.querySelector('.js-name').textContent.toLowerCase();
    const number = contact
      .querySelector('.js-number')
      .textContent.toLowerCase();
    const email = contact.querySelector('.js-email').textContent.toLowerCase();

    return (
      name.includes(searchValue) ||
      number.includes(searchValue) ||
      email.includes(searchValue)
    );
  });

  contactsContainer.innerHTML = '';

  filteredContacts.forEach(contact => {
    contactsContainer.appendChild(contact);
  });
});
