async function fn_cmds(message, commands) {
    var res = '`'
    for (i=0; i<Object.keys(commands).length; i++) {
        res += `${Object.keys(commands)[i]}: ${Object.values(commands)[i]}`;
        res += '\n';
    }
    res += "`";
    message.channel.id.send(res);
}

module.exports = fn_cmds;