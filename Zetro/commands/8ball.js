const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0])
    return message.channel.send("Please specify a text.");
  const responses = [
      " Yes.", "No.", "Maybe.", "Probably.."
  ]
  message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
  return;
}

module.exports.help = {
  name: "8ball"
}
