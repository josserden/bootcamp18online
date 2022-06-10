const BASE_URL = 'https://624dade777abd9e37c7c8930.mockapi.io';

const totalComments = 100;
const limit = 25;
const totalPages = Math.ceil(totalComments / limit);
let page = 1;

export const getComments = () => {
  const options = new URLSearchParams({
    page,
    limit,
  });
  const url = `${BASE_URL}/comments?${options}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then(comments => {
      page += 1;

      return {
        comments,
        hasNextPage: page > totalPages,
      };
    });
};
