const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.channel.send("You don't have permission to do that!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute)
  return message.channel.send("Please mention a valid user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, the user can't be unmuted.");
  let reason = args.slice(1).join(" ");
  if(!reason)
  return message.channel.send("Please specify a reason.");

  let muterole = message.guild.roles.find(`name`, "Z-Muted");
    await(tomute.removeRole(muterole.id));

    message.channel.send(`${tomute} has been unmuted succefully.`);
    tomute.send(`You were unmuted in ${message.guild.name} because of ${reason}.`)
    let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

    if(!logs[message.guild.id]) {
      logs[message.guild.id] = {
        logs: "logs"
      };
    }

    let log = logs[message.guild.id].logs;

    let lc = message.guild.channels.find(`name`, log);
   lc.send(`:loud_sound: **${message.author.tag}** unmuted **${tomute}**(ID:${tomute.id})\n**Reason**: ${reason}`);
return;
  }

module.exports.help = {
  name: "unmute"
}
