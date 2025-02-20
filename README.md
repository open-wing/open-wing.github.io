# Openwing
Simple, barebones, no-bs website made to make it easier to find hidden gems and underrated games in Roblox.

### Adding new games
1. First, make sure that the game hasn't been already added to the list. If it hasn't, great. If you are the developer of the game you are trying to submit, please keep in mind that you must clarify that you are the developer or part of the dev team, and you cannot add a description, I will play the game and add one.
2. Now, after you have confirmed all of those requirements: Fill all of these for the game you are going to submit, following the comments then deleting them:
```js
{
      "id": "example", // One word only, remove spaces.
      "name": "Example", // Full name of the game. Do not include emojis or words like [BETA], [UPDATE], [NEW], etc.
      "link": "https://www.roblox.com/games/123/example", // Copy and paste the link.
      "creator": "example", // If the game is indie, the username of the developer. If the game is made by a group, its name.
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ornare velit, ac lobortis nulla. Suspendisse eu nulla viverra, maximus arcu in, porta neque. Donec eget vestibulum libero. Integer fringilla faucibus ultrices. Ut et lectus rhoncus, pharetra neque id, tincidunt tortor. Cras massa dui, tempus non urna vel, lobortis gravida massa.", // One paragraph - describe from your perspective the game, base it off already existing descriptions in 'games.json'. You can be subjective.
      "submitted_by": "your name", // Self-explanatory.
      "icon": "link", // Link to the icon image of the game. Must be a 'tr.rbxcdn.com', if in doubt, check the other already existing links.
      "banner": "link", // Same as above but with the main banner or an applicable one.
      "genres": ["Example", "Example", "Example"], // Three to eight genres that fit the game. Please check the 'genres' section.
      "age": "example", // 9+, 10+, 11+, 12+, 13+, etc. Please rate it based on your experience in the game, not necessarily by the official rating. For example, if the game is too complex for someone under the age of X to understand, or its community is too toxic, it should be X+.
      "R6": true, // True or \false values; Select one of them if the game is only that rig type, the two if the game is 'User Choice' and none if the game doesn't use neither.
      "R15": false, // Same as above.
      "vc": false // True if the game supports voice chat, false if it doesn't.

      // OPTIONAL PART, WILL RARELY BE APPLICABLE SO YOU CAN DELETE THE TEXT BELOW IN MOST CASES
      "otherversion": "Classic, it is different because this and that." // Some games have another version of themselves, for example, if an old inactive game gets revived and rescripted by other developers and it turns out it is more active, known and fun than the original one, the original dead one may be linked here with "Classic inactive version". Just a suggestion though, and there are other cases where "otherversion" can be useful, like when the same game has 2 different versions (but it is still the same game) that are different Roblox "experiences". If you are in doubt, don't add it. Btw, it is helpful to know that when you hover your mouse over the "other version" icon, it will show the following: "This game has another version - the text you put in otherversion", so don't put a space before the first character and start with a capital letter, ending with proper punctuation.
      "otherlink": "https://www.roblox.com/games/124/example", // Copy and paste the link of this other version.
    }
```
3. After having saved the edited text somewhere, fork this repository, go to 'games.json', and add comma exactly where the pointer is, then paste the text you just saved.

![image](https://github.com/user-attachments/assets/e331b97d-cb4e-47e5-9836-3fa834e100a0)

4. Now create a .html file in the 'game/' directory, named exactly what you put in the 'id', then copy and paste this code and put it in, **do not change anything**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loading...</title>
  <script src="../scripts/script.js"></script>
  <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
</body>
</html>
```

After you have done that, it should look something like this. Do not forget to put the .html at the end: 

![image](https://github.com/user-attachments/assets/0c02f4a9-cf20-41dc-9e36-7f137db06db5)

5. Finally, just open a pull request based on your fork and I will soon review it, play the game, and add your submission. Thank you for contributing to Openwing!

### Genres

To better organize games and make it easier to find them, all the games in Openwing have multiple genres, some obligatory and some made by the submitter. Here is a list of the genres you must put, that are not optional. First, the size-based ones:

- "**Massive**" - applied to games that usually recieve over 1k players. Very rare.

- "**Big**" - applied to games that recieve usual player counts above 100 and less than 1k, and that actively recieve updates.

- "**Medium**" - applied to games that recieve player counts from 100-30, and/or that are actively updated by their developers when needed.

- "**Small**" - applied to games that recieve usual player counts from 30-10, and/or that are mildly updated once in a while by its developers.

- "**Moribund**" - applied to games that rarely but sometimes recieve players, but in very small quantities (basically up to 10 or so), and that the developers have mostly abandoned it.

- "**Abandoned**" - applied to games that recieve no players for a long time, are forgotten to time, and/or its developers have abandoned it.

Also, there is the "Indie" genre, that must be always inserted when the game is made by one single developer, with very few to no contributions from others. Then, there are the pre-existing genres. These ones should be applied to games that fill specific requirements. Other than these, you can create your own genres as you see fit, or suggest a new one. Please do not use "Multiplayer", "Fighting", "RPG" and/or "PvP".

- "**Shooting**" - any game that involves shooting as its one of its main goals

- "**FPS**" - shooting games that are exclusively or mostly in first person (stacks with "Shooting")

- "**Realistic**" - games that have mechanics very similar to IRL and have put a high emphasis on that (a bit subjective)

- "**Horror**" - horror games, no clarification needed

- "**Singleplayer**" - when the game isn't multiplayer (no "Multiplayer" genre is necessary when the game isn't singleplayer)

- "**Open world**" - games that have a map where you can freely walk, independent of tasks, quests, or limitations (no matter the size of the map)

- "**Medieval**" - games inspired or that take place in the middle ages in Europe (for other continents... well idk really)

- "**Philosophical**" - any game that makes you think about and question life, or that feature such scenarios

- "**Oldschool**" - any game that is either really old and traditional (and that still is atleast recognizable), or that is a new/revamped version of a very old game, that is faithful to the original (made by the same developers or not)

- "**Western**" - games that take place or are inspired in the Western Frontier of the USA anywhere in the 1850s–1910s (or somewhere close to there) or that depict Manifest Destiny

- "**Showcase**" - games that are made to showcase a place or a building, generally made by very experienced builders of a team of them, and mostly they don't contain much gameplay

- "**Spiritual**" - any game that has a religious or esoteric value to it that you personally think that transcends Roblox, be it intentionally or unintentionally (is a reserved and rare genre)

- "**Matches**" - games that have match systems - for example, there may be a lobby (physical or UI), different maps, gamemodes, etc, or just matches really (you get the point)

- "**Multiple endings**" - games that have various different story endings to them, and they may or may not have as one of the main goals of it to collect them all

- "**Battlegrounds**" - any game where you are thrown in a map or an arena and is expected to fight other players (or bots, but must also include players) to death, all at once

- "**Historical**" - games that faithfully depict historical moments, battles, etc

- "**Pirate**" - games that are inspired in, or depict maritime piracy from the 1650s to the 1730s (or later if the aesthetics are similar) in the Caribbean region

- "**Anime**" - games that depict an anime or have a similar style (do not mix it up with Japanese, the two are not interchangable)

- "**Japanese**" - games that are heavily inspired in or take place in Japan, at any year - past, present, or future (different from Anime, but a game can be Anime and Japanese at the same time)

- "**Chinese**" - games that are heavily inspired in or take place in China, at any year - past, present, or future
  
- "**Korean**" - games that are heavily inspired in or take place in the Korean peninsula, at any year - past, present, or future

- "**Melee**" - games opposing to shooting games, where its main mechanic includes melee weapons, contrasting with gun or bow games for example (shooting games that also have melee fighting options are not included)

- "**Social experiment**" - games that are made to test mental experiment on players in order to see how they react to something (if in doubt, check the other submissions with the social experiment genre)

- "**Alien**" - games that depict life in other planets or depicts aliens, an alien invasion, alien stuff, or some sort of thing involving aliens

- "**PvE**" - games that have player vs entity combat as their only goal (player-vs-player is the default and such games should not be tagged with "PvP")

- "**Classic RPG**" - a game where you must complete quests (or not), kill enemies, etc. to increase your level/rank/tier/xp to kill more enemies and unlock more areas - do not use only RPG, as it is a very vague term

- "**Heist**" - games that have as one of their primary objectives a bank heist or something similar

- "**Agent**" - games that depict spies, agents, or stealth jobs/professions/missions/etc, that are usually, but not always, criminal

### I found a bug

That is great! Please report it [here](https://github.com/open-wing/open-wing.github.io/issues/new?template=Blank+issue) (also if you have a suggestion), thanks!

### Credits

Openwing was made and is maintained by me, Kleosfellow. I have put some games I know and some that I find myself in the list, however I must also thank everyone that has submitted games to enrich the website. Thank you for using OW and/or for submitting games, without you, this project wouldn't make sense! \:)
