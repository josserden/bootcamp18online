import 'material-icons/iconfont/material-icons.css';

import * as CommentsApi from './js/services/CommentsApi';

import { renderMarkup } from './js/template/renderMarkup';
import { getRefs } from './js/getRefs';

const { loadMoreBtn } = getRefs();

loadMoreBtn.classList.add('d-none');

const loadComments = () => {
  return CommentsApi.getComments().then(({ comments, hasNextPage }) => {
    if (hasNextPage) {
      loadMoreBtn.classList.add('d-none');
    }

    renderMarkup(comments);
  });
};

loadComments()
  .then(() => {
    loadMoreBtn.classList.remove('d-none');
  })
  .catch(error => console.error(error));

loadMoreBtn.addEventListener('click', () => {
  loadComments().catch(error => console.error(error));
});
