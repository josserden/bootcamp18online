const BASE_URL = 'https://api.github.com';

export const fetchUser = name => {
  return fetch(`${BASE_URL}/users/${name}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};
