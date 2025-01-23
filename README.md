# Openwing
Simple, barebones, no-bs website made to make it easier to find hidden gems and underrated games in Roblox.

### Adding new games
1. First, make sure that the game hasn't been already added to the list. If it hasn't, great. If you are the developer of the game you are trying to submit, please keep in mind that you must clarify that you are the developer or part of the dev team, and you cannot add a description, I will play the game and add one.
2. Now, after you have confirmed all of those requirements: Fill all of these for the game you are going to submit, following the comments then deleting them:
```js
{
      "id": "example", // One word only, remove spaces.
      "name": "Example", // Full name of the game. Do not include words like [BETA], [UPDATE], [NEW], etc.
      "link": "https://www.roblox.com/games/123/example", // Copy and paste the link.
      "creator": "example", // If the game is indie, the username of the developer. If the game is made by a group, its name.
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ornare velit, ac lobortis nulla. Suspendisse eu nulla viverra, maximus arcu in, porta neque. Donec eget vestibulum libero. Integer fringilla faucibus ultrices. Ut et lectus rhoncus, pharetra neque id, tincidunt tortor. Cras massa dui, tempus non urna vel, lobortis gravida massa.", // One paragraph - describe from your perspective the game, base it off already existing descriptions in 'games.json'. You can be subjective.
      "submitted_by": "your name", // Self-explanatory.
      "icon": "link", // Link to the icon image of the game. Must be a 'tr.rbxcdn.com', if in doubt, check the other already existing links.
      "banner": "link", // Same as above but with the main banner of an applicable one.
      "genres": ["Example", "Example", "Example"], // Three to eight genres that fit the game. Please check the 'genres' section.
      "age": "example", // 9+, 10+, 11+, 12+, 13+, etc. Please rate it based on your experience in the game, not necessarily by the official rating. For example, if the game is too complex for someone under the age of X to understand, or its community is too toxic, it should be X+.
      "R6": true, // True or \false values; Select one of them if the game is only that rig type, the two if the game is 'User Choice' and none if the game doesn't use neither.
      "R15": false, // Same as above.
      "vc": false // True if the game supports voice chat, false if it doesn't.
    }
```
3. After this, 
