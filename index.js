import{a as c,S as u,i as l}from"./assets/vendor-D0cagnvz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const d="https://pixabay.com",f="/api/";function p(e){const s=new URLSearchParams({key:"48878301-11eef390b295f332c6628756b",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=d+f+`?${s}`;return c.get(a)}document.querySelector(".gallery");function m(e){return`<li>
 
  <div class="card">
   <a class="gallery-link" href="${e.largeImageURL}">
  <img class="card-img" src="${e.webformatURL}" alt="${e.tags}"/>
  </a>
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

</li>`}function g(e){return e.map(m).join("")}const h=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),o={btn:document.querySelector(".btn-search"),form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".msg")};o.form.addEventListener("submit",e=>{e.preventDefault();let s=e.target.elements.bookSearch.value.trim();if(o.gallery.innerHTML="",s===""){l.show({backgroundColor:"rgba(255, 67, 67, 0.68)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"🚫",titleColor:"#fff",titleSize:"16px",message:"Поле пошуку порожнє"}),o.form.reset();return}else o.loader.innerHTML='<span class="loader"></span>',p(s).then(a=>{if(a.data.hits.length===0)l.show({backgroundColor:"rgba(255, 67, 67, 0.68)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"🚫",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}),o.loader.innerHTML="";else{const n=g(a.data.hits);o.gallery.innerHTML=n,h.refresh(),o.loader.innerHTML=""}}).catch(a=>{o.loader.innerHTML="Охохо.....щось пішло не так....",console.log(a),o.form.reset()});o.form.reset()});
//# sourceMappingURL=index.js.map
