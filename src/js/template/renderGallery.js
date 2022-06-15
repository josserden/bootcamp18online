import { getRefs } from '../getRefs.js';
const { galleryContainer } = getRefs();

export const renderGallery = images => {
  galleryContainer.innerHTML = '';

  const markup = images
    .map(
      ({ photographer, alt, avg_color, photographer_url, src }) => /* html */ `
        <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div class="bg-white rounded shadow-sm">
            <div class="overflow-hidden" style="height: 170px;">
              <img
                src="${src.medium}"
                alt=""
                class="img-fluid card-img-top"
              />
            </div>
            <div class="p-4">
              <h5><a href="${photographer_url}" class="text-dark" target="_blank" rel="noopener noreferrer">${photographer}</a></h5>
              <p class="small text-muted mb-0 text-truncate" style="max-width: 180px;">${alt}</p>
              <div
                class="rounded-pill px-3 py-2 mt-4 "
              style="background-color: ${avg_color};"  >
                <p class="small mb-0 text-center text-light font-weight-bold">
                  Desired photo color : ${avg_color}
                </p>
              </div>
            </div>
          </div>
        </div>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
};
