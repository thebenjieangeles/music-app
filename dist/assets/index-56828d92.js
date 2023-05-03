(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i=document.getElementById("songs"),a=async()=>{const n=document.getElementById("searchTerm").value.trim();if(!n){alert("Please enter a song or name of the artist");return}try{const t=`https://itunes.apple.com/search?term=${n}`,s=await(await fetch(t)).json();i.innerHTML=s.results.map(e=>`
          <article>
            <img src="${e.artworkUrl100}">
            <p>${e.artistName}</p>
            <h4>${e.trackName}</h4>
            <audio controls>
              <source src="${e.previewUrl}">
            </audio>
          </article>
        `).join("")}catch(t){console.log("Request failed:",t)}},l=document.getElementById("searchTermBtn");l.addEventListener("click",a);const d=document.getElementById("scrollUpBtn");d.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("play",n=>{const t=document.getElementsByTagName("audio");for(let o=0;o<t.length;o++)t[o]!==n.target&&t[o].pause()},!0);
