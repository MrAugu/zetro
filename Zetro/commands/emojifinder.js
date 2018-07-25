const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const ayy = client.emojis.find("name", `${args[0]}`);
    if (!ayy)
    return message.channel.send("No resoults related on your search.");
    message.channel.send(`Emoji is ${ayy}.`);

  }

module.exports.help = {
  name: "emojifind"
}