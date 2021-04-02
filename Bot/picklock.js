const fs = require('fs');
async function fn_picklock(message, state) {
    var user = state.members[message.author.id.toString()]
    if (!user.is_prisoner) {
        message.channel.id.send('Why would you do that, silly!');
    } else {
        message.member.roles.remove(prisoner_role);
        user.experience += 5;
        user.lockpicks -= 1;
        user.is_prisoner = false;
        if (user.experience >= 10*(user.level+1)){
            user.level +=1
        }
    }
    fs.writeFileSync('../Data/game_data.json', JSON.stringify(state, null, 4));
}

module.exports = fn_picklock;