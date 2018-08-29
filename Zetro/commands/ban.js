const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
  let f = client.emojis.find(c => c.name === "zuncheck");
  let s = client.emojis.find(c => c.name === "zcheck");
  
  if(!message.member.hasPermission("BAN_MEMBERS"))
  return message.channel.send(`${f} You do not have the permission to do so!`);
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
  return message.channel.send(`${f} Please mention a valid user!`);
  
  let reason = args.slice(1).join(" ");
  if(!reason)
  return message.channel.send(`${f} Please specify a reason!`);
  
  if(message.member.id === member.id)
  return message.channel.send(`${f} Sorry but i cannot allow self-harm!`);
  
  if(!member.bannable)
  return message.channel.send(`${f} Oops, something went wrong while banning ${member.user.tag}!`);
  
  await member.ban(reason)
  message.channel.send(`${s} **${member.user.tag}** has been banned succefully!`);
  member.send(`You were banned from **${message.guild.name}** for **${reason}**!`);

};
