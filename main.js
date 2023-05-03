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

const scrollUpBtn = document.getElementById("scrollUpBtn");
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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
