const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
    let f = client.emojis.find(c => c.name === "zuncheck"); 
    let s = client.emojis.find(c => c.name === "zcheck");
  
    if(!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(`${f} You don't have permission to do that!`);
  
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
    return message.channel.send(`${f} Please mention a valid user!`);
  
    let reason = args.slice(1).join(" ");
    if(!reason)
    return message.channel.send(`${f} Please specify a reason.`);
  
    if(message.member.id === member.id)
    return message.channel.send(`${f} I cannot allow self-harm.`);
  
    if(!member.kickable)
    return message.channel.send(`${f} This member can't be kicked!`);
  
    await member.kick(reason)
    message.channel.send(`${s} **${member.user.tag}** has been kicked succefully!`);
    member.send(`You were kicked from **${message.guild.name}** for **${reason}**!`);

};
