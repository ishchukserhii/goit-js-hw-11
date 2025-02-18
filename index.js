import{a as u,i,S as f}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="https://pixabay.com",d="/api";function m(e){const o=new URLSearchParams({key:"48878301-11eef390b295f332c6628756b",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=p+d+`?${o}`;return u.get(s)}document.querySelector(".gallery");function g(e){return`<li>
  <a class="gallery-link" href="${e.largeImageURL}">
  <div class="card">
  <img class="card-img" src="${e.webformatURL}" alt="${e.tags}"/>
  <div class="card-info">
  <div class="info-container">
    <div class="info-labels">
      <span>Likes</span>
      <span>Views</span>
      <span>Comments</span>
      <span>Downloads</span>
    </div>
    <div class="info-values">
      <span>${e.likes}</span>
      <span>${e.views}</span>
      <span>${e.comments}</span>
      <span>${e.downloads}</span>
    </div>
  </div>
</div>
</a>
</li>`}function l(e){return e.map(g).join("")}const c={btn:document.querySelector(".btn-search"),form:document.querySelector(".search-form"),msg:document.querySelector(".msg"),gallery:document.querySelector(".gallery")};c.form.addEventListener("submit",e=>{e.preventDefault();let o=e.target.elements.bookSearch.value.trim();if(o===""){i.show({backgroundColor:"rgba(255, 67, 67, 0.68)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"🚫",titleColor:"#fff",titleSize:"16px",message:"Поле пошуку порожнє"});return}else m(o).then(s=>{if(s.data.hits.length===0)i.show({backgroundColor:"rgba(255, 67, 67, 0.68)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"🚫",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"});else{l(s.data.hits);const a=l(s.data.hits);c.gallery.innerHTML=a}})});new f(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=index.js.map
