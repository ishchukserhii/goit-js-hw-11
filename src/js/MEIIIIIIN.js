import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (query === '') {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term.',
        });
        return;
    }

    clearGallery(); // Очистити галерею перед новим пошуком

    try {
        const images = await fetchImages(query);
        renderImages(images); // Відображаємо зображення в галереї
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong! Please try again.',
        });
    }

    searchInput.value = ''; // Очищаємо поле після пошуку
});
