(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.getElementById("songs"),d=10;let c=0;const u=async()=>{const o=document.getElementById("searchTerm").value.trim();if(!o){alert("Please enter a song or name of the artist");return}try{const s=`https://itunes.apple.com/search?term=${o}`,e=(await(await fetch(s)).json()).results,t=Math.min(d,e.length-c),n=e.slice(c,c+t).map(l=>`
          <div class="card">
            <img class="card-img" src="${l.artworkUrl100}">
            <div class="card-body">
              <h4 class="card-title">${l.trackName}</h4>
              <p class="card-text">${l.artistName}</p>
              <audio controls>
                <source src="${l.previewUrl}">
              </audio>
            </div>
          </div>
        `).join("");a.innerHTML+=n,c+=t}catch(s){console.log("Request failed:",s)}},m=document.getElementById("searchTermBtn");m.addEventListener("click",()=>{c=0,a.innerHTML="",u()});window.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".carousel-slide"),s=o.querySelector("img").clientWidth;let r=0;setInterval(()=>{r-=s/3,r<-s*2&&(r=0),o.style.transform=`translateX(${r}px)`},5e3)});window.addEventListener("scroll",()=>{const o=document.querySelector("#btn-top");window.pageYOffset>300?o.style.display="block":o.style.display="none"});document.querySelector("#btn-top").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
