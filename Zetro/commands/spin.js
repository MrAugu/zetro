const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const spinmsg = await message.channel.send(`Spining wheel..`);
    spinmsg.edit(`The wheel spins **${Math.floor(Math.random() * 36)}**!`);
    return;
}

module.exports.help = {
  name: "spin"
}
