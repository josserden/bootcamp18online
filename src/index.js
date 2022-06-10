import 'material-icons/iconfont/material-icons.css';
import throttle from 'lodash.throttle';

import * as CommentsApi from './js/services/CommentsApi';
import { BackToTopBtn } from './js/services/BackToTopBtn';
import { renderMarkup } from './js/template/renderMarkup';
import { getRefs } from './js/getRefs';
const { loader } = getRefs();

const backToTopBtn = new BackToTopBtn({
  selector: '.back-to-top',
  className: 'd-none',
});

const handleScroll = () => {
  if (window.scrollY > window.innerHeight) {
    backToTopBtn.show();
  } else {
    backToTopBtn.hide();
  }
};

window.addEventListener('scroll', throttle(handleScroll, 800));

document.addEventListener('DOMContentLoaded', () => {
  backToTopBtn.init();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  function handleIntersecting(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        CommentsApi.getComments().then(({ comments, hasNextPage }) => {
          if (hasNextPage) {
            observer.unobserve(entry.target);
            // observer.disconnect(loader);

            loader.textContent = 'No more comments...';
          }
          renderMarkup(comments);
        });
      }
    });
  }

  const infiniteScroll = new IntersectionObserver(handleIntersecting, options);
  infiniteScroll.observe(loader);
});
