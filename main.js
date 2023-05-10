import "./style.css";

const songContainer = document.getElementById("songs");

const updateTerm = async () => {
  const term = document.getElementById("searchTerm").value.trim();
  if (!term) {
    alert("Please enter a song or name of the artist");
    return;
  }

  try {
    const url = `https://itunes.apple.com/search?term=${term}`;
    const response = await fetch(url);
    const data = await response.json();
    songContainer.innerHTML = data.results
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
  } catch (error) {
    console.log("Request failed:", error);
  }
};

const searchBtn = document.getElementById("searchTermBtn");
searchBtn.addEventListener("click", updateTerm);

document.addEventListener(
  "play",
  (event) => {
    const audio = document.getElementsByTagName("audio");
    for (let i = 0; i < audio.length; i++) {
      if (audio[i] !== event.target) {
        audio[i].pause();
      }
    }
  },
  true
);

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

window.addEventListener("scroll", () => {
  const btnTop = document.querySelector("#btn-top");
  if (window.pageYOffset > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

document.querySelector("#btn-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
