const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  const sinfoembed = new Discord.RichEmbed()
   .setColor(0x00AE86)
  .setTitle(`These are stats for ${message.guild.name}!`)
  .setDescription("These stats may change every moment, depens on the server.")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTimestamp()
  .setThumbnail(sicon)
  .addField("Guild Name:", `${message.guild.name}`)
  .addField("Created On:", `${message.guild.createdAt}`)
  .addField("You Joined At:", `${message.member.joinedAt}`)
  .addField("Total Members:", `${message.guild.memberCount}`)
  .addField("Verification Level:", `${message.guild.verificationLevel}`)
  .addField("Owner:", `${message.guild.owner}`)
  .addField("Owner's ID:", `${message.guild.ownerID}`)
  .addField("Server Reggion:", `${message.guild.region}`)
  message.channel.send(sinfoembed);
}
 
module.exports.help = {
  name: "serverinfo"
}
