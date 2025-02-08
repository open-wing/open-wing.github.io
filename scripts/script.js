document.addEventListener("DOMContentLoaded", () => {
  const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
  const gamesJSONPath = "../games.json";

  if (isIndexPage) {
    loadGamesList(gamesJSONPath);
  } else {
    loadGameDetails(gamesJSONPath);
  }
});

/*
function loadGamesList(jsonPath) {
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      const games = data.games;
      const gamesList = document.getElementById("games-list");

      games.forEach(game => {
        const gameLink = document.createElement("a");
        gameLink.href = `game/${game.id}.html`;
        gameLink.textContent = game.name;
        gameLink.style.display = "block";
        gamesList.appendChild(gameLink);
      });
    });
}
*/

function loadGameDetails(jsonPath) {
  const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      const game = data.games.find(g => g.id === currentPage);

      if (!game) {
        document.body.innerHTML = "<h1>Game not found</h1>";
        return;
      }

      document.title = "OW - " + game.name;
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.href = game.icon;
      document.head.appendChild(favicon);

      document.body.innerHTML = `<a href="../index.html"><img id="fixed-img" src="../images/openwingfixed.png"></a><article>
        <header>
          <h1 id="game-title">${game.name}</h1>
        </header>
        <main>
          <center><img id="game-banner" src="${game.banner}" alt="Game Banner"></center>
          <section>
            <img id="game-icon" src="${game.icon}" alt="Game Icon">
            <em><p id="game-description">"${game.description}"</p></em>
            <p><i>Creator:</i> <span id="game-creator">${game.creator}</span></p>
            <p><i>Submitted by:</i> <span id="submitted-by">${game.submitted_by}</span></p>
            <p><i>Genres:</i> <span id="game-genres">${game.genres.join(" • ")}</span></p>
            <div id="movement-support"></div>
          </section>
          <a id="game-link" href="${game.link}" target="_blank">Play on Roblox</a>
        </main>
      </article>`;

      const movementContainer = document.getElementById("movement-support");
      if (game.R6) {
        const r6Image = document.createElement("img");
        r6Image.src = "../images/r6.png";
        r6Image.title = "Supports R6";
        movementContainer.appendChild(r6Image);
      }
      if (game.R15) {
        const r15Image = document.createElement("img"); 
        r15Image.src = "../images/r15.png";
        r15Image.title = "Supports R15";
        movementContainer.appendChild(r15Image);
      }
      if (game.vc) {
        const vcImage = document.createElement("img");
        vcImage.src = "../images/vc.png";
        vcImage.title = "Supports Voice Chat";
        movementContainer.appendChild(vcImage);
      }
      if (game.age) {
        const ageVal = document.createElement("p");
        ageVal.textContent = game.age;
        ageVal.title = "Age Restriction";
        movementContainer.appendChild(ageVal);
      }
      if (game.otherversion && game.otherlink) {
        const otherStr = document.createElement("img"); 
        otherStr.src = "../images/otherversions.png";
        otherStr.title = "This game has another version - " + game.otherversion;
        otherStr.onclick = () => window.location.href = game.otherlink;
        movementContainer.appendChild(otherStr);
      }
    });
}
