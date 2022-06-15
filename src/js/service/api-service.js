import axios from 'axios';

const API_KEY = '563492ad6f917000010000017177ac82ad294f609aa250f88e62125c';
import { PER_PAGE } from '../constants';

axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
};

export const ImageService = {
  _query: '',
  _page: 1,
  per_page: PER_PAGE,

  async getImages() {
    const {
      data: { photos, total_results },
    } = await axios.get(
      `search?query=${this._query}&page=${this.page}&per_page=${this.per_page}`
    );

    return { photos, total_results };
  },

  get query() {
    return this._query;
  },

  set query(newQuery) {
    this._query = newQuery;
  },

  get page() {
    return this._page;
  },

  set page(newPage) {
    this._page = newPage;
  },
};
