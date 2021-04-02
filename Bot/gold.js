async function fn_gold(message, state) {
    var user = state.members[message.author.id]
    if (!user) {
        message.channel.id.send('Could not find user')
    }else {
        message.channel.id.send(user.gold)
    }
}   

module.exports = fn_gold;