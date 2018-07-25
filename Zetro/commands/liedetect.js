const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!args[0])
    return message.channel.send("Please specify a text.");
  const result = [
      "False!", "True!"
  ]
  message.channel.send(`${result[Math.floor(Math.random() * result.length)]}`);
  return;
}

module.exports.help = {
  name: "liedetect"
}