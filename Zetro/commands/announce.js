const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission(`MANAGE_MESSAGES`))
    return message.channel.send("You don't have permission to do that!");
    if(!args[0]) 
    return message.channel.send("Please specify a text.");
    let announcement = args.slice(0).join(" ");
    message.delete();
    const announcementEmbed = new Discord.RichEmbed()
    .setTitle("Announcement:")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#000000")
    .setDescription(`${announcement}`)
    .setFooter(`Announced by ${message.author.tag}`)
    .setTimestamp();
    message.channel.send(announcementEmbed);
    return;
  }
  
  module.exports.help = {
    name: "announce"
  }
