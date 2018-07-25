const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS"))
  return message.channel.send("You don't have permission to do that!");
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
  return message.channel.send("Please mention a valid user!");
  let reason = args.slice(1).join(" ");
  if(!reason)
  return message.channel.send("Please specify a reason.");
  if(message.member.id === member.id)
  return message.channel.send("I cannot allow self-harm.");
  if(!member.kickable)
  return message.channel.send("This member can't be kicked!");
  await member.kick(reason)
  message.channel.send(`**${member.tag}** has been kicked succefully!`);
  member.send(`You were kicked from **${message.guild.name}** for ${reason}.`);


  let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

  if(!logs[message.guild.id]) {
    logs[message.guild.id] = {
      logs: "logs"
    };
  }

  let log = logs[message.guild.id].logs;

  let lc = message.guild.channels.find(`name`, log);

 lc.send(`:boot: **${message.author.tag}** kicked **${member}**(ID:${member.id})\n**Reason**: ${reason}`);
return;
}

module.exports.help = {
  name: "kick"
}
