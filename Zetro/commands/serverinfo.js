const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  let sicon = message.guild.iconURL;
  const sinfoembed = new Discord.RichEmbed()
  .setColor("#0ad1d1")
  .setTitle(`These are stats for ${message.guild.name}!`)
  .setDescription("These stats may change every moment, depens on the server.")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTimestamp()
  .setThumbnail(sicon)
  .addField("Server Name:", `${message.guild.name}`)
  .addField("Created On:", `${message.guild.createdAt}`)
  .addField("You Joined At:", `${message.member.joinedAt}`)
  .addField("Total Members:", `${message.guild.memberCount}`)
  .addField("Server's Verification Level:", `${message.guild.verificationLevel}`)
  .addField("Server's Owner:", `${message.guild.owner}`)
  .addField("Owner's ID:", `${message.guild.ownerID}`)
  .addField("Server's Reggion:", `${message.guild.region}`)
  .setFooter("Zetro 2018")
  message.channel.send(sinfoembed);

};
