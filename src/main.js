import {getImg} from './js/pixabay-api.js';
import {createElemets} from './js/render-functions.js'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const refs = {
    btn : document.querySelector('.btn-search'),
    form : document.querySelector('.search-form'),
    msg : document.querySelector('.msg'),
    gallery : document.querySelector('.gallery'),
}



refs.form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let searchText = e.target.elements.bookSearch.value.trim();

    if(searchText === ''){
        iziToast.show ({
            backgroundColor: 'rgba(255, 67, 67, 0.68)',
            messageColor: `rgba(255, 255, 255, 1)`,
            close: `true`,
            position: "topRight",
            title: '🚫',
            titleColor: '#fff',
            titleSize: '16px',
            message: 'Поле пошуку порожнє'
        });
        return}
        else{
            getImg (searchText)
            .then(res => {
                if (res.data.hits.length === 0){
                    iziToast.show(
                        { backgroundColor: 'rgba(255, 67, 67, 0.68)',
                            messageColor: `rgba(255, 255, 255, 1)`,
                            close: `true`,
                            position: "topRight",
                            title: '🚫',
                            titleColor: '#fff',
                            titleSize: '16px',
                            message: 'Sorry, there are no images matching your search query. Please try again!'
                        }
                    )
                }
                else{
                    createElemets(res.data.hits);
                    const pushGallery = createElemets(res.data.hits);
                    refs.gallery.innerHTML = pushGallery;
                }
            })
        }
    })

    new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });


