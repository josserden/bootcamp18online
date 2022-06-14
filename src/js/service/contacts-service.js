import axios from 'axios';

axios.defaults.baseURL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// GET -> /contacts
export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

// GET -> /contacts/:id
export const getContact = async id => {
  const { data } = await axios.get(`/contacts/${id}`);

  return data;
};

// POST -> /contacts
export const createContact = async contact => {
  const { data } = await axios.post('/contacts', contact);

  return data;
};

// PUT -> /contacts/:id
export const updateContact = async (id, contact) => {
  const { data } = await axios.put(`/contacts/${id}`, contact);

  return data;
};

// DELETE /contacts/:id
export const removeContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};
