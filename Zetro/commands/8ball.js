const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
     let f = client.emojis.find("name", `zuncheck`);
    if(!args[0])
    return message.channel.send(`${f} Please specify a text.`);
  const responses = [
      " Yes.", "No.", "Maybe.", "Probably..", "Ask me later.."
  ]
  message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}

module.exports.help = {
  name: "8ball"
}
