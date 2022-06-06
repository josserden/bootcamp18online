import users from '../data/employees.json';

import { getRefs } from './getRefs';
import { calculateAge } from './helpers/calculateAge';
import { isBirthday } from './helpers/isBirthday';

const { table } = getRefs();

const renderMarkup = array => {
  const markup = array
    .map(
      ({ username, birthDay }, index) => /* html */ `
    <tr>
      <th scope="row">${index + 1}</th>
      <td >${username}</td>
      <td>${calculateAge(birthDay)}</td>
      <td>${isBirthday(birthDay) ? 'Yes' : 'No'}</td>
    </tr>`
    )
    .join('');

  table.insertAdjacentHTML('beforeend', markup);
};

renderMarkup(users);
