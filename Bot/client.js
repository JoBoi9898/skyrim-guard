require("dotenv").config( {path: '../.env' } )
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const fn_cmds = require("./commands")
const fn_lvl = require("./level")
const fn_gold = require("./gold")
const fn_pickpocket = require("./pickpocket")
const fn_picklock = require("./picklock")
const fn_set = require("./setup")
const { settings } = require("cluster"); //Not sure where that comes from

client.on('ready', () => {
    serverSettings = get_json("../setup.json")
    client.user.setStatus('dnd');
    prisoner_role = serverSettings.roles.prisoner
    greetings = get_json("../Data/quotes.json")
    botChannel =  client.channels.cache.get(serverSettings.botChannel)
    console.log(`Logged in as ${client.user.tag}!`);
    botChannel.send(greetings[Math.floor(Math.random()*greetings.length)]);
}
);

client.on('message', message => {
    prefix = serverSettings.prefix
    if (message.content.startsWith(prefix)) {
        process_command(message);
    }else {
        console.log(`[${message.author.tag}]: ${message}`);
    }
}
);

async function process_command(message){
    let command = message.content.split(prefix)[1];
    let user = message.author.id.toString();
    let state = get_json("../Data/game_data.json");
    if (command.substr(0,3) === "set") {
        fn_set(message, state, serverSettings);
    }
    if (!state.members.hasOwnProperty(user)) {
        console.log('User not tracked yet. Initiating tracking...')
        var new_player = {};
        new_player['tag'] = message.author.tag;
        new_player['is_prisoner'] = false;
        new_player['experience'] = 0;
        new_player['level'] = 1;
        new_player['gold'] = 0;
        new_player['lockpicks'] = 20;
        state.members[message.author.id.toString()]= new_player;
        fs.writeFileSync("../Data/game_data.json", JSON.stringify(state, null, 4));
        return;
    }

    switch(command) {
        case "cmds": 
            console.log(`Cmds command requested by [${message.author.tag}]`);
            commands = get_json("../Data/commands.json")
            fn_cmds(message, commands);
            break;
        case "level":
            console.log(`Level command requested by [${message.author.tag}]`);
            fn_lvl(message, state);
            break;
        case "gold":
            console.log(`Gold command requested by [${message.author.tag}]`);
            fn_gold(message, state)
            break;
        case "pickpocket":
            console.log(`Pickpocket command requested by [${message.author.tag}]`);
            fn_pickpocket(message, state);
            break;
        case "picklock":
            console.log(`Picklock command requested by [${message.author.tag}]`);
            fn_picklock(message, state);
            break;    
        default:
            console.log(`Unrecongnized command {${message.content}} requested by [${message.author.tag}]`);
    }
}


function get_json(path) {
    return JSON.parse(fs.readFileSync(path));
}

client.login(process.env.API_KEY);
