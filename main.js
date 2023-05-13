import "./style.css";
import images from "./images/index";

const songContainer = document.getElementById("songs");
const maxResults = 10;
let numResultsDisplayed = 0;

const updateTerm = async () => {
  const term = document.getElementById("searchTerm").value.trim();
  if (!term) {
    alert("Please enter a song or name of the artist");
    return;
  }

  try {
    const songUrl = `https://itunes.apple.com/search?term=${term}`;
    const songResponse = await fetch(songUrl);
    const songData = await songResponse.json();
    const results = songData.results;

    const numResults = Math.min(
      maxResults,
      results.length - numResultsDisplayed
    );

    const resultsHtml = results
      .slice(numResultsDisplayed, numResultsDisplayed + numResults)
      .map((result) => {
        return `
          <article>
            <img src="${result.artworkUrl100}">
            <p>${result.artistName}</p>
            <h4>${result.trackName}</h4>
            <audio controls>
              <source src="${result.previewUrl}">
            </audio>
          </article>
        `;
      })
      .join("");

    songContainer.innerHTML = resultsHtml;
    numResultsDisplayed = numResults;
  } catch (error) {
    console.log("Request failed:", error);
  }
};

const searchBtn = document.getElementById("searchTermBtn");
searchBtn.addEventListener("click", () => {
  numResultsDisplayed = 0;
  updateTerm();
});

// carousel section

window.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector(".carousel-slide");

  const slideWidth = slide.querySelector("img").clientWidth;

  let position = 0;

  const moveSlide = () => {
    position -= slideWidth / 3;

    if (position < -slideWidth * 2) {
      position = 0;
    }

    slide.style.transform = `translateX(${position}px)`;
  };

  setInterval(moveSlide, 5000);
});

// back to top feature

window.addEventListener("scroll", () => {
  const btnTop = document.querySelector("#btn-top");
  if (window.pageYOffset > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

document.querySelector("#btn-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
