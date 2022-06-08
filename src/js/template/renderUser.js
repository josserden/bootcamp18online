import { formatDate } from '../helpers/formatDate';

export const renderUser = (
  {
    avatar_url,
    name,
    location,
    bio,
    public_repos,
    created_at,
    followers,
    following,
    html_url,
  },
  container
) => {
  container.innerHTML = '';

  const markup = /* html */ `
      <div class="card mx-auto shadow-sm" style="width: 18rem">
    <img
      src="${avatar_url}"
      class="card-img-top rounded"
      alt="${name}"
    />
    <div class="card-body vstack gap-2">

      ${name ? `<h4 class="card-title mb-0">${name}</h4>` : ''}
      ${location ? `<p class="card-text mb-0">${location}</p>` : ''}
      ${bio ? `<strong class="card-text text-muted mb-0">${bio}</strong>` : ''}

      <ul class="list-group mb-2">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Followers
          <span class="badge bg-secondary rounded-pill">${followers}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Public repos
          <span class="badge bg-secondary rounded-pill">${public_repos}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Following
          <span class="badge bg-secondary rounded-pill js-badge-likes"
            >${following}</span
          >
        </li>
      </ul>
      <p>
        <small>created at: <span>${formatDate(created_at)}</span></small>
      </p>
      <a
        href="${html_url}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
        >Go to profile</a
      >
    </div>
  </div>
  `;

  container.insertAdjacentHTML('beforeend', markup);
};
