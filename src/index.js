// Import
import 'material-icons/iconfont/material-icons.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

import { ImageService } from './js/service/api-service';
import { getRefs } from './js/getRefs.js';
import { renderGallery } from './js/template/renderGallery';
import { PER_PAGE } from './js/constants';
import { VisibleComponent } from './js/components/VisibleComponent';

const { searchBar, paginationRef, galleryContainer } = getRefs();

// Ініціалізація пагінації та базові налаштування
const pagination = new Pagination(paginationRef, {
  totalItems: 0,
  itemsPerPage: PER_PAGE,
  visiblePages: 5,
});

const paginationWrapper = new VisibleComponent({
  selector: '.pagination-wrapper',
  className: 'd-none',
  isHide: true,
});

const spinner = new VisibleComponent({
  selector: '.js-spinner',
  className: 'd-none',
  isHide: true,
});

// Functions
const onHandleSearch = async event => {
  event.preventDefault();

  const searchQuery = event.target.elements.query.value.trim();

  if (!searchQuery) return;

  try {
    ImageService.query = searchQuery; // Записуємо значення пошуку в об'єкт ImageService
    spinner.show();
    const { photos, total_results } = await ImageService.getImages();

    if (total_results === 0) {
      paginationWrapper.hide();
      galleryContainer.innerHTML = `<div class="alert alert-danger">Нічого не знайдено</div>`;
      spinner.hide();
      return;
    }

    paginationWrapper.show(); // Показуємо пагінацію

    pagination.reset(total_results); // Оновлення значення totalItem в пагінації

    document.title = `${searchQuery} - ${total_results} results`;
    renderGallery(photos);
    spinner.hide();

    searchBar.reset();
  } catch (error) {
    console.error(error);
  }
};

const moviePagination = async event => {
  try {
    ImageService.page = event.page; // Оновлення значення page в обʼєкті ImageService
    galleryContainer.innerHTML = '';
    spinner.show();

    const { photos } = await ImageService.getImages();
    renderGallery(photos);
    spinner.hide();
  } catch (error) {
    console.error(error);
  }
};

//Listeners
searchBar.addEventListener('submit', onHandleSearch);
//Кастомний лістенер для пагінації
pagination.on('afterMove', moviePagination);
