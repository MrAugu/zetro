const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = client.channels.find('name', 'logs');
  if (reason.length < 1) return message.reply('Please specify a reason.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
}
 
module.exports.help = {
  name: "unban"
}
