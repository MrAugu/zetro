const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.channel.send(`On the dice is writed **${Math.floor(Math.random() * 6) + 1}**!`);
  return;
}
 
module.exports.help = {
  name: "roll"
}
