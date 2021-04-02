async function fn_lvl(message, state) {
    var user = state.members[message.author.id.toString()]
    if (!user) {
        message.channel.id.send('Could not find user')
    }else {
        message.channel.id.send(user.level)
    }
}

module.exports = fn_lvl;