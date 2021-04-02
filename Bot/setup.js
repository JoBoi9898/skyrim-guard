const fs = require('fs');

async function fn_set(message, state, serverSettings) {
    is_GM = serverSettings.GMS.includes(message.author.id)
    if (!is_GM) {
        return message.channel.id.send(`${message.author} tried to do something silly!`)
    }
    content = message.content.split(prefix)[1];
    key = content.split(" ")[1];
    value = content.split(" ")[2];
    if ((typeof key !== "undefined" &&  typeof value !== "undefined") && serverSettings.hasOwnProperty(key)) {
        serverSettings[key] = value
        fs.writeFileSync("../setup.json", JSON.stringify(serverSettings, null, 4));
        return message.channel.id.send(`Setting ${key} at ${value} ${message.author} 👍`);

    }else {
        return message.channel.id.send(`Set what? Use ${serverSettings.prefix}set [key] [value]`);
    }
}

module.exports = fn_set;


