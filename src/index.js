import { fetchUser } from './js/service/fetchUser';
import { renderUser } from './js/template/renderUser';

const searchForm = document.querySelector('.js-search-form');
const profileContainer = document.querySelector('.js-profile-container');

const searchUser = event => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;
  const inputValue = query.value.trim();

  if (inputValue === '') {
    return alert('Запит не може бути пустим ');
  }

  fetchUser(inputValue)
    .then(user => {
      renderUser(user, profileContainer);
    })
    .catch(error => console.error(error));

  event.currentTarget.reset();
};

searchForm.addEventListener('submit', searchUser);
