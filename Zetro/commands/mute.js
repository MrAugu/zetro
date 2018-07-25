const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.channel.send("You don't have permission to do that!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute)
  return message.channel.send("Please mention a valid user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, the user can't be muted.");
  let reason = args.slice(1).join(" ");
  if(!reason)
  return message.channel.send("Please specify a reason.");

  let muterole = message.guild.roles.find(`name`, "Z-Muted");

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

    message.channel.send(`${tomute} has been muted succefully.`);
    tomute.send(`You were muted in ${message.guild.name} because of ${reason}.`)
    let logs = JSON.parse(fs.readFileSync("./logs.json", "utf8"));

    if(!logs[message.guild.id]) {
      logs[message.guild.id] = {
        logs: "logs"
      };
    }

    let log = logs[message.guild.id].logs;

    let lc = message.guild.channels.find(`name`, log);

   lc.send(`:mute: **${message.author.tag}** muted **${tomute}**(ID:${tomute.id})\n**Reason**: ${reason}`);
return;
  }

module.exports.help = {
  name: "mute"
}
