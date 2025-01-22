let games = [];

// fetch the games.json file and store the data
fetch("../games.json")
  .then(response => response.json())
  .then(data => {
    games = data.games;
  })
  .catch(error => console.error("Error fetching games JSON:", error));

function searchGames() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultList = document.getElementById("resultList");

  // clear previous results
  resultList.innerHTML = "";

  // filter games based on input
  const filteredGames = games.filter(game =>
    game.id.toLowerCase().includes(input) ||
    game.name.toLowerCase().includes(input) ||
    game.genres.some(tag => tag.toLowerCase().includes(input))
  );

  // sort results to prioritize exact matches
  filteredGames.sort((a, b) => {
    const inputLower = input.toLowerCase();
    const aIsExactMatch = a.name.toLowerCase() === inputLower || a.id.toLowerCase() === inputLower;
    const bIsExactMatch = b.name.toLowerCase() === inputLower || b.id.toLowerCase() === inputLower;

    if (aIsExactMatch && !bIsExactMatch) return -1;
    if (!aIsExactMatch && bIsExactMatch) return 1;

    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  // populate results
  filteredGames.forEach(game => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `game/${game.id}.html`;
    a.textContent = game.name;
    a.title = `${game.genres.join(" • ")}`;

    const icon = document.createElement("img");
    icon.src = game.icon;
    icon.classList = "result-icon"
    li.appendChild(icon);
    
    // in case it is an exact match or tag match
    if (game.name.toLowerCase() === input || game.name.toLowerCase() === input) {
        a.classList.add('exact-match');
    } else if (game.genres.some(tag => input.includes(tag.toLowerCase()))) {
        a.classList.add('tag-match');
    }
    
    li.appendChild(a);
    resultList.appendChild(li);
  });
}
