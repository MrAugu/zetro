const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pfpmember = message.guild.member(message.mentions.users.first());
  if(!pfpmember) message.channel.send(`${message.author}, this is your avatar ${message.author.avatarURL}.`);
  return;
  message.channel.send(`${message.author}, this is ${pfpmember}'s avatar: ${pfpmember.avatarURL}.`);
}
 
module.exports.help = {
  name: "avatar"
}
