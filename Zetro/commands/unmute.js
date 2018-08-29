const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {
  let f = client.emojis.find(c => c.name === "zuncheck");
  let s = client.emojis.find(c => c.name === "zcheck");

  if(!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.channel.send(`${f} You don't have permission to do that!`);
  
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute)
  return message.channel.send(`${f} Please mention a valid user.`);
  
  if(tomute.hasPermission("MANAGE_MESSAGES"))
   return message.channel.send(`${f} Sorry, the user can't be unmuted.`);
  
  let reason = args.slice(1).join(" ");
  if(!reason)
  return message.channel.send(`${f} Please specify a reason!`);
  
  let muterole = message.guild.roles.find(c => c.name === "Z-Muted");
    await(tomute.removeRole(muterole.id));

    message.channel.send(`${s} **${tomute.user.tag}** has been unmuted succefully.`);
  tomute.send(`You were unmuted in **${message.guild.name}** beacuse **${reason}**!`);
  };
