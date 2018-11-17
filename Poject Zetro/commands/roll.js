const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`The face of the dice signs ${Math.floor(Math.random() * 6) + 1}.`);
}
 
module.exports.help = {
  name: "roll"
}
