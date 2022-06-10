import 'material-icons/iconfont/material-icons.css';

import * as CommentsApi from './js/services/CommentsApi';
import { LoadMoreBtn } from './js/services/LoadMoreBtn';
import { renderMarkup } from './js/template/renderMarkup';

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more-btn',
  className: 'd-none',
  isHide: true,
  callback: () => loadComments().catch(error => console.error(error)),
});

const loadComments = () => {
  return CommentsApi.getComments().then(({ comments, hasNextPage }) => {
    if (hasNextPage) {
      loadMoreBtn.hide();
    }

    renderMarkup(comments);
  });
};

loadComments()
  .then(() => {
    loadMoreBtn.show();
  })
  .catch(error => console.error(error));
