import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  const markup = images
    .map(
      image => `
                <div class="gallery-item">
                    <img src="${image.webformatURL}" alt="${image.tags}" />
                </div>
            `
    )
    .join('');

  gallery.innerHTML = markup;
};

export const clearGallery = () => {
  document.querySelector('.gallery').innerHTML = '';
};
