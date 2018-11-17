const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send("Please specify a text.");
  message.delete();
  let ilegal = args.join(" ");
  message.channel.send(`**Breaking News:**\nTrump made illegal ${ilegal}.`);
}

module.exports.help = {
  name: "ilegal"
}
