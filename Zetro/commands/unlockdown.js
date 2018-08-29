const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
    let f = client.emojis.find(c => c.name === "zuncheck");
    let s = client.emojis.find(c => c.name === "zcheck");
    
    if(!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(`${f} You don't have permission to do that!`);
    
    let reason = args.slice(0).join(" ");
    if(!reason)
    return message.channel.send(`${f} Please specify a reason!`);
    
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null,
        ADD_REACTIONS: null
      }).then(() => {
      message.channel.send(`${s} Lockdown lifted, permissions are back to normal!`);
      }).catch(error => {
        console.log(error);
      });
    
};
