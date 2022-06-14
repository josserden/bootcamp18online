export const getRefs = () => {
  return {
    form: document.querySelector('.js-modal-form'),
    searchForm: document.querySelector('.js-search-form'),
    contactsContainer: document.querySelector('.js-contacts-container'),
    modal: new bootstrap.Modal(
      document.querySelector('#exampleModal', {
        keyboard: true,
      })
    ),
  };
};
