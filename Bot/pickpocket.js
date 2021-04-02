const fs = require('fs');

async function fn_pickpocket(message, state) {
    var user = state.members[message.author.id.toString()]
    if (user.lockpicks <= 0) {
        message.channel.id.send(`${message.author} You have no lockpicks left.`);
        return;
    }
    var weight = 0.345 + (user.level)*0.005;
    var success = Math.random() <= weight;
    if (message.member.roles.cache.find(role => role.id === prisoner_role)) {
        jail_channel.send('You dare try to steal from me again?!?');
    }else {
        if (success){
            var generate_gold = Math.floor(Math.random()*10) + 1;
            user.gold += generate_gold;
            user.experience += 10;
            if (user.experience >= 10*(user.level+1)){
                user.level +=1
            }
        }else{
            user.is_prisoner = true
            message.member.roles.add(prisoner_role);
        }
    fs.writeFileSync('../Data/game_data.json', JSON.stringify(state, null, 4));
    }
}

module.exports = fn_pickpocket;