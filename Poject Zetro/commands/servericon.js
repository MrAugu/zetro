const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let servericon = message.guild.iconURL;
  message.reply(`${message.guild}'s icon is ${servericon}.`);
}
 
module.exports.help = {
  name: "servericon"
}
