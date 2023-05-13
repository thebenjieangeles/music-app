(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.getElementById("songs"),d=10;let c=0;const u=async()=>{const s=document.getElementById("searchTerm").value.trim();if(!s){alert("Please enter a song or name of the artist");return}try{const o=`https://itunes.apple.com/search?term=${s}`,e=(await(await fetch(o)).json()).results,t=Math.min(d,e.length-c),n=e.slice(c,c+t).map(l=>`
          <article>
            <img src="${l.artworkUrl100}">
            <p>${l.artistName}</p>
            <h4>${l.trackName}</h4>
            <audio controls>
              <source src="${l.previewUrl}">
            </audio>
          </article>
        `).join("");a.innerHTML=n,c=t}catch(o){console.log("Request failed:",o)}},m=document.getElementById("searchTermBtn");m.addEventListener("click",()=>{c=0,u()});window.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".carousel-slide"),o=s.querySelector("img").clientWidth;let r=0;setInterval(()=>{r-=o/3,r<-o*2&&(r=0),s.style.transform=`translateX(${r}px)`},5e3)});window.addEventListener("scroll",()=>{const s=document.querySelector("#btn-top");window.pageYOffset>300?s.style.display="block":s.style.display="none"});document.querySelector("#btn-top").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
