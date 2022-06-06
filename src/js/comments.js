import comments from '../data/comments.json';
import { getRefs } from './getRefs';
const { commentsList } = getRefs();
import { formatDate } from './helpers/formatDate';

const renderMarkup = array => {
  const markup = array
    .map(
      ({ author, content, createdAt }) => /* html */ `
        <div class="card">
          <div class="card-body">
            <span class="text-muted">Author</span>
            <h5 class="card-title">${author}</h5>
            <p class="card-text">${content}</p>
          </div>
          <div class="card-footer text-muted">posted at ${formatDate(
            createdAt
          )}</div>
        </div>`
    )
    .join('');

  commentsList.insertAdjacentHTML('beforeend', markup);
};

renderMarkup(comments);
