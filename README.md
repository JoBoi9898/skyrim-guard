# Skyrim Guard

This is a Discord integration game based on the behaviour of the city guards in The Elder Scrolls V: Skyrim.

__WARNING__ : This project was made for self-educational purposes. Furthurmore, this bot application was made for my own personal discord server. However, I provide extensive installation instructions if you do want to use it in your own server.

## Dependencies

- [discord.js](https://discord.js.org/#/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Installation

1. You will need to fork the repository, then clone it.
2. You will need to install NodeJS. See : [https://nodejs.org/en/](https://nodejs.org/en/)
3. You will need the dependecies stated above. You can follow the links for installation instructions.
4. You will need to create a Discord application by accessing the Discord developper portal. The application needs to have administration privileges in order to remove or add roles to the players in your Discord server.
5. You will need to create your own .env file at the root of the directory with the corresponding bot token.
6. You will need to add the bot to your server.
7. You will need to add a prisoner role and a jail channel to your server. Copy the ids into the setup.json file located in the root directory.
8. Select a bot channel in your discord server and copy its id in the same setup.json file.

For an enhanced experience, it is recommended to restrict players with the prisoner role from sending messages in text channels other than the jail channel.


To launch the application, you will need to move to the Bot directory and launch client.js.

## How the game works

The point of this game is to steal the guard as much as you can without getting caught. If the pickpocket is successfull, the player will be given 10 experience points and a randomly generated amount of gold. As you steal the guard, you have a chance to be jailed. If you are jailed, you will need to use a lockpick, granting 5 experience points.

If the player is out of lockpicks to get out of jail, he will not be able to pickpocket the guard. There is currently no way for the players to gain lockpicks in this version of the game.

As the player gains experience, he will gain levels. A higher level player has less chances of getting caught by the guard.

The prisoner role needs to be created and its id need to be added in the setup.json

## Need help playing the game?

After launching the bot, you can use the help command. By default, the prefix for a command is ".", but can be changed by using .set prefix [your desired prefix].


## Liscence

This software is liscenced under the  [MIT Liscence](https://discord.js.org/#/).
