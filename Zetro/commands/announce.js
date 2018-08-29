const Discord = require("discord.js");

exports.run = async (client, message, args) => {
     let f = client.emojis.find(c => c.name === "zuncheck");
     let s = client.emojis.find(c => c.name === "zcheck");

    if(!message.member.hasPermission(`MANAGE_MESSAGES`))
    return message.channel.send(`${f} You don't have permission to do that!`);
    
    if(!args[0]) 
    return message.channel.send(`${f} Please specify a text.`);
    
    let channelname = args[0];
    let channel = message.guild.channels.find("name", `${channelname}`);
    if(!channel)
    return message.channel.send(`${f} Please name a valid channel of  this server!`);
    
    let announcement = args.slice(1).join(" ");
    message.delete();
    
    const announcementEmbed = new Discord.RichEmbed()
    .setTitle("Announcement:")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(`${announcement}`)
    .setFooter(`Announced by ${message.author.tag}`)
    .setTimestamp();
    channel.send(announcementEmbed);
    message.channel.send(`${s} Announcement has been sent!`);
     
  };
  
