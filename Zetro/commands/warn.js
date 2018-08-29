const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
    let f = client.emojis.find(c => c.name === "zuncheck");
    let s = client.emojis.find(c => c.name === "zcheck");
    
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`${f} You don't have permission to do that.`);
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
    return message.channel.send(`${f} Please mention a valid user.`);
    
    let reason = args.slice(1).join(" ");
    if(!reason)
    return message.channel.send(`${f} Please specify a reason.`);
    
    if(member.hasPermission("MANAGE_GUILD")) 
    return message.channel.send(`${f} This user can't be warned, sorry.`);
    
    message.channel.send(`${s} **${member.user.tag}** has been warned for ${reason}!`);
    member.send(`You were warned in **${message.guild.name}** because of **${reason}**!`);
};
