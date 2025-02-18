const refs = {
  gallery: document.querySelector('.gallery'),
};

function createElemet(img) {
  return `<li>
  <a class="gallery-link" href="${img.largeImageURL}">
  <div class="card">
  <img class="card-img" src="${img.webformatURL}" alt="${img.tags}"/>
  <div class="card-info">
  <div class="info-container">
    <div class="info-labels">
      <span>Likes</span>
      <span>Views</span>
      <span>Comments</span>
      <span>Downloads</span>
    </div>
    <div class="info-values">
      <span>${img.likes}</span>
      <span>${img.views}</span>
      <span>${img.comments}</span>
      <span>${img.downloads}</span>
    </div>
  </div>
</div>
</a>
</li>`
}

export function createElemets(images) {
  return images.map(createElemet).join('');
}