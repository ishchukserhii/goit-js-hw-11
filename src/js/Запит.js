import axios from 'axios';

const API_KEY = '48878301-11eef390b295f332c6628756b';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchQuery) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: searchQuery,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });
        return response.data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};
