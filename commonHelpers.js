import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(t){const o="https://pixabay.com",i="/api/",s=`?key=42361876-39dc0f6de1023fb2a8c585c35&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,e=o+i+s;return fetch(e).then(r=>r.json()).then(r=>(r.hits.length===0&&c.show({position:"topRight",messageColor:"white",progressBar:!1,backgroundColor:"red",closeOnClick:!0,close:!1,message:"😭 Sorry, there are no images matching youre search query. Please, try again!"}),r))}const u=document.querySelector(".gallery");function g(t){return`<li class="gallery-item">
        <a href="${t.largeImageURL}"> <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"></a>
        <div class='discription'><p><b>Likes </b>${t.likes}</p>
        <p><b>Views </b>${t.views}</p>
        <p><b>Comments </b>${t.comments}</p>
        <p><b>Downloads </b>${t.downloads}</p>
        </div>
      </li>`}function m(t){const o=t.hits.map(g).join("");u.innerHTML=o;const i={captionsData:"alt",captionDelay:250},s=new f(".gallery a",i);s.on("show.simplelightbox"),s.refresh()}const d=document.querySelector("form"),h=document.querySelector(".gallery"),a=document.querySelector(".loader");d.addEventListener("submit",y);let l;function y(t){t.preventDefault(),a.classList.add("is-open"),l=t.target.elements.search.value.trim(),l===""?(a.classList.remove("is-open"),h.innerHTML="",c.show({position:"topRight",messageColor:"white",progressBar:!1,backgroundColor:"red",closeOnClick:!0,close:!1,message:"❌ Please enter a search tag"})):p(l).then(o=>{m(o)}).catch(o=>{c.show({position:"topRight",messageColor:"white",progressBar:!1,backgroundColor:"red",closeOnClick:!0,close:!1,message:`❌ Error fetching images: ${o}`})}).finally(()=>{a.classList.remove("is-open"),t.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
