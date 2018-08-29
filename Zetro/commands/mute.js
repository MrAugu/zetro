const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let f = client.emojis.find(c => c.name === "zuncheck");
  let s = client.emojis.find(c => c.name === "zcheck");

  if(!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.channel.send(`${f} You don't have permission to do that!`);
  
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute)
  return message.channel.send(`${f} Please mention a valid user!`);
  
  if(tomute.hasPermission("MANAGE_MESSAGES")) 
  return message.channel.send(`${f} Sorry, the user can't be muted!`);
  
  let reason = args.slice(1).join(" ");
  if(!reason)
  return message.channel.send(`${f} Please specify a reason!`);

  let muterole = message.guild.roles.find(r => r.name === "Z-Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Z-Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

    await(tomute.addRole(muterole.id));

    message.channel.send(`${s} **${tomute.user.tag}** has been muted succefully.`);
    tomute.send(`You were muted in **${message.guild.name}** because of **${reason}**!`);
};
